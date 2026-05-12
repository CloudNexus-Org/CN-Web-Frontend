import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '@/components/ui/button'

describe('Button Component', () => {
  describe('Rendering', () => {
    it('should render button with default variant', () => {
      render(<Button>Click me</Button>)
      const button = screen.getByRole('button', { name: /click me/i })
      expect(button).toBeInTheDocument()
    })

    it('should render button with different sizes', () => {
      render(
        <>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </>,
      )
      expect(screen.getByRole('button', { name: /small/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /default/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /large/i })).toBeInTheDocument()
    })

    it('should render button with different variants', () => {
      render(
        <>
          <Button variant="default">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </>,
      )
      expect(screen.getByRole('button', { name: /primary/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /secondary/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /outline/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /ghost/i })).toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it('should handle click events', async () => {
      const handleClick = jest.fn()
      const user = userEvent.setup()

      render(<Button onClick={handleClick}>Click me</Button>)
      const button = screen.getByRole('button', { name: /click me/i })

      await user.click(button)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should be disabled when disabled prop is set', () => {
      render(<Button disabled>Disabled Button</Button>)
      const button = screen.getByRole('button', { name: /disabled button/i })
      expect(button).toBeDisabled()
    })

    it('should not trigger onClick when disabled', async () => {
      const handleClick = jest.fn()
      const user = userEvent.setup()

      render(
        <Button disabled onClick={handleClick}>
          Disabled
        </Button>,
      )
      const button = screen.getByRole('button', { name: /disabled/i })

      await user.click(button)
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Accessibility', () => {
    it('should have proper focus handling', async () => {
      const user = userEvent.setup()
      render(<Button>Focus me</Button>)
      const button = screen.getByRole('button', { name: /focus me/i })

      expect(button).not.toHaveFocus()
      await user.tab()
      expect(button).toHaveFocus()
    })

    it('should support aria attributes', () => {
      render(
        <Button aria-label="Close dialog" aria-disabled="false">
          X
        </Button>,
      )
      const button = screen.getByRole('button', { name: /close dialog/i })
      expect(button).toHaveAttribute('aria-label', 'Close dialog')
      expect(button).toHaveAttribute('aria-disabled', 'false')
    })
  })

  describe('Styling', () => {
    it('should apply custom className', () => {
      render(<Button className="custom-class">Styled</Button>)
      const button = screen.getByRole('button', { name: /styled/i })
      expect(button).toHaveClass('custom-class')
    })
  })
})
