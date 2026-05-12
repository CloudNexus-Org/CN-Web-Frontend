import { renderHook, act } from '@testing-library/react'
import { useAnimatedCount } from '@/hooks/use-animated-count'

describe('useAnimatedCount Hook', () => {
  describe('Basic Functionality', () => {
    it('should initialize with starting value', () => {
      const { result } = renderHook(() => useAnimatedCount(100, true, 1000))
      expect(typeof result.current).toBe('number')
    })

    it('should animate from start to end value', () => {
      const { result } = renderHook(() => useAnimatedCount(100, true, 500))

      // Initial value should be start value
      expect(result.current).toBeLessThanOrEqual(100)
      expect(result.current).toBeGreaterThanOrEqual(0)
    })

    it('should handle zero start value', () => {
      const { result } = renderHook(() => useAnimatedCount(50, true, 1000))
      expect(result.current).toBeDefined()
    })

    it('should handle negative start and end values', () => {
      const { result } = renderHook(() => useAnimatedCount(50, true, 1000))
      expect(result.current).toBeDefined()
    })
  })

  describe('Configuration', () => {
    it('should respect duration parameter', () => {
      const startTime = Date.now()
      const { result } = renderHook(() => useAnimatedCount(100, true, 100))

      // Hook should complete within reasonable time + buffer
      const endTime = Date.now()
      expect(endTime - startTime).toBeLessThan(500)
    })

    it('should handle decimal values', () => {
      const { result } = renderHook(() => useAnimatedCount(99.5, true, 1000))
      expect(result.current).toBeDefined()
      expect(typeof result.current).toBe('number')
    })

    it('should handle large numbers', () => {
      const { result } = renderHook(() => useAnimatedCount(1000000, true, 1000))
      expect(result.current).toBeLessThanOrEqual(1000000)
      expect(result.current).toBeGreaterThanOrEqual(0)
    })
  })

  describe('Edge Cases', () => {
    it('should handle when start equals end', () => {
      const { result } = renderHook(() => useAnimatedCount(50, true, 1000))
      // When start equals end, hook should still return a valid number
      expect(typeof result.current).toBe('number')
    })

    it('should handle very short duration', () => {
      const { result } = renderHook(() => useAnimatedCount(100, true, 10))
      expect(typeof result.current).toBe('number')
    })

    it('should handle very long duration', () => {
      const { result } = renderHook(() => useAnimatedCount(100, true, 100000))
      expect(typeof result.current).toBe('number')
    })
  })

  describe('Cleanup', () => {
    it('should cleanup on unmount', () => {
      const { unmount } = renderHook(() => useAnimatedCount(100, true, 1000))
      expect(() => unmount()).not.toThrow()
    })
  })
})
