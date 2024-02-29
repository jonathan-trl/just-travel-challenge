import { cartTotalPriceMock } from '@/mocks/Cart'
import { render } from '@testing-library/react'
import { CartCheckout } from '.'

describe('<CartCheckout>', () => {
  it('Should render CartCheckout correctly', () => {
    const { getByText } = render(
      <CartCheckout totalPrice={cartTotalPriceMock} />
    )

    const ticketTotalPrice = getByText(/Valor total/i)
    expect(ticketTotalPrice).toBeInTheDocument()
  })
})
