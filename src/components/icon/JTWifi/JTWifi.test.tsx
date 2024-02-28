import { render } from '@testing-library/react'
import { JTWifi } from '.'

describe('<JTWifi>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTWifi />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
