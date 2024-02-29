import { reviews } from '@/mocks/filters/Reviews'
import { render } from '@testing-library/react'
import { FilterAreaReviewScore } from '.'

describe('<FilterAreaReviewScore>', () => {
  it('Should render FilterAreaReviewScore correctly', async () => {
    const { getByText } = render(<FilterAreaReviewScore reviews={reviews} />)
    
    expect(getByText(/Review Score/i)).toBeInTheDocument()
  })
})
