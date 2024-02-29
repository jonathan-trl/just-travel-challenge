import { commodities } from '@/mocks/filters/Commodities'
import { render } from '@testing-library/react'
import { FilterAreaCommodity } from '.'

describe('<FilterAreaCommodity>', () => {
  it('Should render FilterAreaCommodity correctly', async () => {
    const { getByText } = render(
      <FilterAreaCommodity commodities={commodities} />
    )

    expect(getByText(/Comodidades/i)).toBeInTheDocument()
  })
})
