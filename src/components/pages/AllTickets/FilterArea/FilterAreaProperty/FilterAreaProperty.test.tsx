import { properties } from '@/mocks/filters/Properties'
import { render } from '@testing-library/react'
import { FilterAreaProperty } from '.'

describe('<FilterAreaProperty>', () => {
  it('Should render FilterAreaProperty correctly', async () => {
    const { getByText } = render(<FilterAreaProperty properties={properties} />)

    expect(getByText(/Tipo de propriedade/i)).toBeInTheDocument()
  })
})
