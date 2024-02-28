import { render } from '@testing-library/react'
import { JTCalendar } from '.'

describe('<JTCalendar>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTCalendar />)
    const path = container.querySelector('svg')
    expect(path).toBeInTheDocument()
  })

  it('Should render SVG with #fff color', () => {
    const { container } = render(<JTCalendar color={'#fff'} />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#fff')
  })

  it('Should render SVG with #4070F4 color when there is no color', () => {
    const { container } = render(<JTCalendar />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#4070F4')
  })
})
