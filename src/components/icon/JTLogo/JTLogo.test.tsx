import { render } from '@testing-library/react'
import { JTLogo } from '.'

describe('<JTLogo>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTLogo />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
