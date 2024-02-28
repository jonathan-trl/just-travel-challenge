import { render } from '@testing-library/react'
import { JTUser } from '.'

describe('<JTUser>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTUser />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
