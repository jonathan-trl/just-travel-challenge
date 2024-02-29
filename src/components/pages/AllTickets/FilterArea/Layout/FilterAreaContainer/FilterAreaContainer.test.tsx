import { render } from '@testing-library/react'
import { FilterAreaContainer } from '.'

describe('<FilterAreaContainer>', () => {
  it('Should render FilterAreaContainer correctly', async () => {
    const { getByText} = render(<FilterAreaContainer>Teste</FilterAreaContainer>)

    expect(getByText(/Teste/i)).toBeInTheDocument()
  })
})
