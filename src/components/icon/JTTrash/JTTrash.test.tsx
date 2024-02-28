import { render } from '@testing-library/react'
import { JTTrash } from '.'

describe('<JTTrash>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTTrash />)
    const path = container.querySelector('svg')
    expect(path).toBeInTheDocument()
  })

  it('Should render SVG with #f00 color', () => {
    const { container } = render(<JTTrash color={'#f00'} />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#f00')
  })

  it('Should render SVG with #646981 color when there is no color', () => {
    const { container } = render(<JTTrash />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#646981')
  })
})
