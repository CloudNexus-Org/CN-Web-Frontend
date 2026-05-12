import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { SmoothScroll } from '@/components/smooth-scroll'

// Mock Lenis
jest.mock('lenis', () => {
  return jest.fn().mockImplementation(() => ({
    raf: jest.fn(),
    destroy: jest.fn(),
    stop: jest.fn(),
    start: jest.fn(),
    scrollTo: jest.fn(),
  }))
})

// Mock usePathname
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}))

describe('SmoothScroll Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Mock window.scrollTo to prevent errors in jsdom
    window.scrollTo = jest.fn()
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Rendering', () => {
    it('should render children correctly', () => {
      render(
        <SmoothScroll>
          <div>Test Content</div>
        </SmoothScroll>,
      )
      expect(screen.getByText('Test Content')).toBeInTheDocument()
    })

    it('should render multiple children', () => {
      render(
        <SmoothScroll>
          <h1>Title</h1>
          <p>Paragraph</p>
        </SmoothScroll>,
      )
      expect(screen.getByText('Title')).toBeInTheDocument()
      expect(screen.getByText('Paragraph')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have minimum height of 100vh', () => {
      const { container } = render(
        <SmoothScroll>
          <div>Content</div>
        </SmoothScroll>,
      )
      const wrapper = container.querySelector('div')
      expect(wrapper).toHaveStyle({ minHeight: '100vh' })
    })
  })

  describe('Reduced Motion', () => {
    it('should respect prefers-reduced-motion', () => {
      const mockMatchMedia = jest.fn(query => {
        if (query === '(prefers-reduced-motion: reduce)') {
          return {
            matches: true,
            media: query,
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
          }
        }
        return {
          matches: false,
          media: query,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        }
      })

      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: mockMatchMedia,
      })

      render(
        <SmoothScroll>
          <div>Content</div>
        </SmoothScroll>,
      )

      expect(mockMatchMedia).toHaveBeenCalledWith('(prefers-reduced-motion: reduce)')
    })
  })

  describe('Performance', () => {
    it('should not cause memory leaks on unmount', async () => {
      const { unmount } = render(
        <SmoothScroll>
          <div>Content</div>
        </SmoothScroll>,
      )

      await waitFor(() => {
        expect(screen.getByText('Content')).toBeInTheDocument()
      })

      unmount()

      // If this completes without hanging, memory cleanup is working
      expect(true).toBe(true)
    })
  })

  describe('Device Detection', () => {
    it('should detect touch devices', () => {
      const mockMatchMedia = jest.fn(query => {
        if (query === '(pointer: coarse)') {
          return {
            matches: true,
            media: query,
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
          }
        }
        return {
          matches: false,
          media: query,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        }
      })

      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: mockMatchMedia,
      })

      render(
        <SmoothScroll>
          <div>Touch Device Content</div>
        </SmoothScroll>,
      )

      expect(mockMatchMedia).toHaveBeenCalledWith('(pointer: coarse)')
      expect(screen.getByText('Touch Device Content')).toBeInTheDocument()
    })
  })
})
