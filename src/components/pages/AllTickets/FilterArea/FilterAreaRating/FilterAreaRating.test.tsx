import { ratings } from '@/mocks/filters/Ratings'
import { render } from '@testing-library/react'
import { FilterAreaRating } from '.'

describe('<FilterAreaRating>', () => {
  it('Should render FilterAreaRating correctly', async () => {
    const { getByText } = render(<FilterAreaRating ratings={ratings} />)

    expect(getByText(/Avaliações/i)).toBeInTheDocument()
  })
})
