import { cartMock, cartTotalPriceMock } from '@/mocks/Cart'
import { render } from '@testing-library/react'
import { Cart } from '.'

describe('<Cart>', () => {
  it('Should render Cart with items', () => {
    const { getByTestId } = render(
      <Cart cart={cartMock} totalPrice={cartTotalPriceMock} />
    )

    const cartWithItems = getByTestId('cart-with-items')
    expect(cartWithItems).toBeInTheDocument()
  })

  it('Should render Cart with no items', () => {
    const { getByText } = render(<Cart cart={[]} totalPrice={() => 0} />)

    const text = getByText(/Não há itens no carrinho/i)
    expect(text).toBeInTheDocument()
  })
})
