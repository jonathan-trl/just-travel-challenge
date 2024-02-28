import { render } from '@testing-library/react'
import { JTTrash } from '.'

describe('<JTTrash>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTTrash />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
