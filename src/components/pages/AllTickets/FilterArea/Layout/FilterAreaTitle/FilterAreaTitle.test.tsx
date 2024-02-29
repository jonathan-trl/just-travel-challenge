import { render } from '@testing-library/react'
import { FilterAreaTitle } from '.'

describe('<FilterAreaTitle>', () => {
  it('Should render FilterAreaTitle correctly', async () => {
    const { getByText } = render(<FilterAreaTitle title="Título" />)

    expect(getByText(/Título/i)).toBeInTheDocument()
  })
})
