import { prices } from '@/mocks/filters/Prices'
import { render } from '@testing-library/react'
import { FilterAreaPrice } from '.'

describe('<FilterAreaPrice>', () => {
  it('Should render FilterAreaPrice correctly', async () => {
    const { getByText } = render(<FilterAreaPrice prices={prices} />)
    
    expect(getByText(/Preço/i)).toBeInTheDocument()
  })
})
