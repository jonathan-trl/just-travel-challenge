import { fireEvent, render, waitFor } from '@testing-library/react'
import { SearchArea } from '.'

describe('<SearchArea>', () => {
  const onSubmitMock = jest.fn()

  it('Should render SearchArea correctly', async () => {
    const { getByTestId } = render(<SearchArea onSubmit={onSubmitMock} />)

    const searchInput = getByTestId('search-input')

    expect(searchInput).toBeInTheDocument()
  })

  it('Should call onSubmit when form is submitted', async () => {
    const { getByTestId } = render(<SearchArea onSubmit={onSubmitMock} />)

    const form = getByTestId('search-form')

    fireEvent.submit(form)

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalled()
    })
  })

  it('Should reset form after submission', async () => {
    const { getByTestId } = render(<SearchArea onSubmit={onSubmitMock} />)

    const searchInput = getByTestId('search-input') as HTMLInputElement
    const form = getByTestId('search-form')

    fireEvent.change(searchInput, { target: { value: 'Museu' } })
    fireEvent.submit(form)

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalled()
    })

    expect(searchInput.value).toBe('')
  })
})
