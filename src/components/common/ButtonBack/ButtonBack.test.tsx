import { render } from '@testing-library/react'
import { ButtonBack } from '.'

describe('<ButtonBack>', () => {
  it('Should render ButtonBack correctly', () => {
    const { getByRole } = render(<ButtonBack />)
    const linkElement = getByRole('link')
    expect(linkElement).toBeInTheDocument()
  })

  it('Should render ButtonBackIcon', () => {
    const { container } = render(<ButtonBack />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('Should navigate to / when click button', () => {
    const { getByRole } = render(<ButtonBack />)
    const linkElement = getByRole('link')
    expect(linkElement).toHaveAttribute('href', '/')
  })
})
