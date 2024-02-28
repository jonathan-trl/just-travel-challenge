import { render } from '@testing-library/react'
import { JTSupport } from '.'

describe('<JTSupport>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTSupport />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
