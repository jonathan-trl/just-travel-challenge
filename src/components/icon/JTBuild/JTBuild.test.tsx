import { render } from '@testing-library/react'
import { JTBuild } from '.'

describe('<JTBuild>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTBuild />)
    const path = container.querySelector('svg')
    expect(path).toBeInTheDocument()
  })
})
