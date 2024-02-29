import { render } from '@testing-library/react'
import { SubmitHandler } from 'react-hook-form'
import { SearchArea } from '.'

type SearchInputs = {
  name: string
}

describe('<SearchArea>', () => {
  it('Should render SearchArea correctly', async () => {
    const onSubmit: SubmitHandler<SearchInputs> = async (data) => {}
    render(<SearchArea onSubmit={onSubmit} />)
  })
})
