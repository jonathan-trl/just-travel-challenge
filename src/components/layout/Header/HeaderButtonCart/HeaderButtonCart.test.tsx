import { fireEvent, render } from '@testing-library/react'
import { HeaderButtonCart } from '.'

describe('<HeaderButtonCart>', () => {
  it('Should render cart button with count', () => {
    const { getByRole, getByText } = render(<HeaderButtonCart />)

    const cartButton = getByRole('button')
    expect(cartButton).toBeInTheDocument()

    const countElement = getByText(/0/i)
    expect(countElement).toBeInTheDocument()
  })

  it('Should toggle cart visibility when click button', () => {
    const { getByRole, queryByRole } = render(<HeaderButtonCart />)

    let cartElement = queryByRole('dialog')
    expect(cartElement).toBeNull()

    const cartButton = getByRole('button')
    fireEvent.click(cartButton)

    cartElement = getByRole('dialog')
    expect(cartElement).toBeInTheDocument()


    fireEvent.click(cartButton)

    cartElement = queryByRole('dialog')
    expect(cartElement).toBeNull()
  })
})
