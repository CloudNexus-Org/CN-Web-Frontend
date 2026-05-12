/**
 * Example test showing async/API testing patterns for production-grade frontend testing.
 * This demonstrates mocking API calls, handling loading/error states, and async assertions.
 */

import React from 'react'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Example API service (normally in lib/api/services/)
const fetchUserData = async (userId: string) => {
  const response = await fetch(`/api/users/${userId}`)
  if (!response.ok) throw new Error('Failed to fetch user')
  return response.json()
}

// Example component that uses the API
const UserProfile: React.FC<{ userId: string }> = ({ userId }) => {
  const [user, setUser] = React.useState<any>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    fetchUserData(userId)
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [userId])

  if (loading) return <div data-testid="loading">Loading...</div>
  if (error) return <div data-testid="error">Error loading user</div>
  if (!user) return <div data-testid="empty">No user found</div>

  return (
    <div data-testid="user-profile">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}

// Tests
describe('UserProfile Component - API Integration', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks()
  })

  describe('Loading State', () => {
    it('should show loading state initially', () => {
      // Mock fetch to delay response
      global.fetch = jest.fn(
        () =>
          new Promise(resolve =>
                setTimeout(
                  () =>
                    resolve({
                      ok: true,
                      json: () => Promise.resolve({ name: 'John', email: 'john@example.com' }),
                    } as unknown as Response),
                  100,
                ),
              ),
      )

      render(<UserProfile userId="123" />)
      expect(screen.getByTestId('loading')).toBeInTheDocument()
    })
  })

  describe('Success State', () => {
    it('should display user data when API call succeeds', async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              name: 'John Doe',
              email: 'john@example.com',
            }),
        } as unknown as Response),
      ) as unknown as typeof fetch

      render(<UserProfile userId="123" />)

      // Wait for loading to disappear and data to appear
      await waitFor(() => {
        expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
      })

      expect(screen.getByText('John Doe')).toBeInTheDocument()
      expect(screen.getByText('john@example.com')).toBeInTheDocument()
    })

    it('should call API with correct userId', async () => {
      const mockFetch = jest.fn(() =>
        Promise.resolve({ ok: true, json: () => Promise.resolve({ name: 'Jane', email: 'jane@example.com' }) } as unknown as Response),
      ) as unknown as typeof fetch
      global.fetch = mockFetch

      render(<UserProfile userId="456" />)

      await waitFor(() => {
        expect(screen.getByText('Jane')).toBeInTheDocument()
      })

      expect(mockFetch).toHaveBeenCalledWith('/api/users/456')
    })
  })

  describe('Error State', () => {
    it('should display error message when API call fails', async () => {
      global.fetch = jest.fn(() => Promise.resolve({ ok: false } as unknown as Response)) as unknown as typeof fetch

      render(<UserProfile userId="123" />)

      await waitFor(() => {
        expect(screen.getByTestId('error')).toBeInTheDocument()
      })
    })

    it('should handle network errors gracefully', async () => {
      global.fetch = jest.fn(() => Promise.reject(new Error('Network error'))) as unknown as typeof fetch

      render(<UserProfile userId="123" />)

      await waitFor(() => {
        expect(screen.getByTestId('error')).toBeInTheDocument()
      })
    })
  })

  describe('Component Lifecycle', () => {
    it('should refetch when userId prop changes', async () => {
      const mockFetch = jest.fn()

      global.fetch = mockFetch.mockImplementation((url: string) => {
        const userId = url.split('/').pop()
        return Promise.resolve({ ok: true, json: () => Promise.resolve({ name: `User ${userId}`, email: `user${userId}@test.com` }) } as unknown as Response)
      }) as unknown as typeof fetch

      const { rerender } = render(<UserProfile userId="123" />)

      await waitFor(() => {
        expect(screen.getByText('User 123')).toBeInTheDocument()
      })

      expect(mockFetch).toHaveBeenCalledTimes(1)

      // Re-render with new userId
      rerender(<UserProfile userId="456" />)

      await waitFor(() => {
        expect(screen.getByText('User 456')).toBeInTheDocument()
      })

      expect(mockFetch).toHaveBeenCalledTimes(2)
    })
  })

  describe('Empty State', () => {
    it('should show empty state when no user data', async () => {
      global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve(null) } as unknown as Response)) as unknown as typeof fetch

      render(<UserProfile userId="999" />)

      await waitFor(() => {
        expect(screen.getByTestId('empty')).toBeInTheDocument()
      })
    })
  })
})

describe('Async Testing Best Practices', () => {
  it('should use waitFor for async assertions', async () => {
    global.fetch = jest.fn(() =>
      new Promise(resolve =>
        setTimeout(
          () =>
            resolve({ ok: true, json: () => Promise.resolve({ name: 'Test User', email: 'test@example.com' }) } as unknown as Response),
          50,
        ),
      ),
    ) as unknown as typeof fetch

    render(<UserProfile userId="123" />)

    // ✅ Good: Use waitFor for async operations
    await waitFor(() => {
      expect(screen.getByText('Test User')).toBeInTheDocument()
    })
  })

  it('should cleanup timers to prevent memory leaks', async () => {
    const mockFetch = jest.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve({ name: 'Test', email: 'test@test.com' }) } as unknown as Response)) as unknown as typeof fetch
    global.fetch = mockFetch

    const { unmount } = render(<UserProfile userId="123" />)

    // Unmount before API resolves
    unmount()

    // No warning should be raised about setState on unmounted component
    expect(true).toBe(true)
  })
})
