import { render } from '@testing-library/react'
import { JTBuildHigh } from '.'

describe('<JTBuildHigh>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTBuildHigh />)
    const path = container.querySelector('svg')
    expect(path).toBeInTheDocument()
  })

  it('Should render SVG with #fff color', () => {
    const { container } = render(<JTBuildHigh color={'#fff'} />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#fff')
  })

  it('Should render SVG with #CED2DB color when there is no color', () => {
    const { container } = render(<JTBuildHigh />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#CED2DB')
  })
})
