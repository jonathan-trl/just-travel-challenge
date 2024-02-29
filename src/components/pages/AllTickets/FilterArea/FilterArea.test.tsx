import { render } from '@testing-library/react'
import { FilterArea } from '.'

describe('<FilterArea>', () => {
  it('Should render FilterArea correctly', async () => {
    const { getByTestId } = render(<FilterArea />)
    expect(getByTestId('filter-area')).toBeInTheDocument()
  })
})
