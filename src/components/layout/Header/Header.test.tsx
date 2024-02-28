import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('<Header>', () => {
  it('Should render Header correctly', () => {
    const { getByRole } = render(<Header />)
    const header = getByRole('banner')
    expect(header).toBeInTheDocument()
  })
})
