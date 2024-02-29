import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '.'
import { JTWifi } from '@/components/icon/JTWifi'

describe('<Button>', () => {
  it('Should render Button correctly', () => {
    const { getByRole } = render(<Button title="Click me" />)
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button.tagName).toBe('BUTTON')
    expect(button).toHaveClass('h-[39px]')
    expect(button).toHaveClass('rounded-[3px]')
    expect(button).toHaveClass('px-3')
    expect(button).toHaveClass('text-normal')
    expect(button).toHaveClass('bg-brand-blue')
    expect(button).toHaveClass('text-white')
  })

  it('Should render Button with specified size prop', () => {
    const { getByRole } = render(<Button title="Click me" size="lg" />)
    const button = getByRole('button')
    expect(button).toHaveClass('h-[58px]')
    expect(button).toHaveClass('rounded-[4px]')
    expect(button).toHaveClass('px-6')
  })

  it('Should render Button with specified colorScheme prop', () => {
    const { getByRole } = render(
      <Button title="Click me" colorScheme="secondary" />
    )
    const button = getByRole('button')
    expect(button).toHaveClass('bg-white')
    expect(button).toHaveClass('border')
    expect(button).toHaveClass('border-brand-blue')
    expect(button).toHaveClass('text-brand-blue')
  })

  it('Should render Button as anchor element with href prop', () => {
    const { getByRole } = render(<Button title="Click me" href="/link" />)
    const anchor = getByRole('link')
    expect(anchor.tagName).toBe('A')
    expect(anchor).toHaveAttribute('href', '/link')
  })

  it('Should call onClick handler when clicked', () => {
    const onClickMock = jest.fn()
    const { getByRole } = render(
      <Button title="Click me" onClick={onClickMock} />
    )
    const button = getByRole('button')
    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('Should render Button with disabled prop', () => {
    const { getByRole } = render(<Button title="Click me" disabled />)
    const button = getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('bg-gray-10')
    expect(button).toHaveClass('text-gray-30')
  })

  it('Should render Button with selected prop', () => {
    const { getByRole } = render(<Button title="Click me" selected={false} />)
    const button = getByRole('button')
    expect(button).toHaveClass('bg-transparent')
    expect(button).toHaveClass('text-gray-20')
    expect(button).toHaveClass('border')
    expect(button).toHaveClass('border-gray-20')
  })

  it('Should render Button without border when borderless prop is true', () => {
    const { getByRole } = render(<Button title="Click me" borderless />)
    const button = getByRole('button')
    expect(button).not.toHaveClass('border')
  })

  it('Should render Button with icon', () => {
    const { container } = render(<Button title="Click me" icon={JTWifi} />)
    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
})
