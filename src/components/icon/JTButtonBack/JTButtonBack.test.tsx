import { render } from '@testing-library/react'
import { JTButtonBack } from '.'

describe('<JTButtonBack>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTButtonBack />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
