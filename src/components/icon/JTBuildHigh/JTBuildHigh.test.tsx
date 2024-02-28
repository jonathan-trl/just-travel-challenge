import { render } from '@testing-library/react'
import { JTBuildHigh } from '.'

describe('<JTBuildHigh>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTBuildHigh />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
