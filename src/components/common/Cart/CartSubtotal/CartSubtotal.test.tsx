import { cartTotalPriceMock } from '@/mocks/Cart'
import { formatPrice } from '@/utils/formatPrice'
import { render } from '@testing-library/react'
import { CartSubtotal } from '.'

describe('<CartSubtotal>', () => {
  it('Should render CartSubtotal correctly', () => {
    const { getByTestId } = render(
      <CartSubtotal totalPrice={cartTotalPriceMock} />
    )

    const ticketTotalPrice = getByTestId('ticket-total-price')
    expect(ticketTotalPrice).toBeInTheDocument()
  })
})
