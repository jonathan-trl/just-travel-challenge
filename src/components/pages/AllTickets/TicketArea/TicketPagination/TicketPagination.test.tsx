import { fireEvent, render, waitFor } from '@testing-library/react'
import { TicketPagination } from '.'
import { TicketPaginationProps } from './TicketPagination'

describe('<TicketPagination>', () => {
  let mockPagination: TicketPaginationProps

  beforeEach(() => {
    mockPagination = {
      currentPage: 1,
      totalPages: 5,
      totalResults: 50,
      handleChangePage: jest.fn(),
      handlePreviousPage: jest.fn(),
      handleNextPage: jest.fn(),
    }
  })

  it('Should render TicketPagination correctly', async () => {
    const { getByText } = render(<TicketPagination {...mockPagination} />)

    const text = getByText(/50 resultados/i)

    expect(text).toBeTruthy()
  })

  it('Should call handleChangePage when select option is changed', () => {
    const { getByTestId } = render(<TicketPagination {...mockPagination} />)

    const selectElement = getByTestId(/select-change-page/i)
    fireEvent.change(selectElement, { target: { value: '3' } })

    expect(mockPagination.handleChangePage).toHaveBeenCalledWith(3)
  })

  it('Should button previous page be disabled when currentPage equals 1', async () => {
    const { getByTestId } = render(<TicketPagination {...mockPagination} />)

    const buttonPrevious = getByTestId('button-previous-page')
    expect(buttonPrevious).toBeDisabled()
  })

  it('Should button next page be disabled when currentPage equals totalPages', async () => {
    mockPagination.totalPages = 1
    const { getByTestId } = render(<TicketPagination {...mockPagination} />)

    const buttonNext = getByTestId('button-next-page')
    expect(buttonNext).toBeDisabled()
  })

  it('Should call handleNextPage when right button is clicked', async () => {
    const { getByTestId } = render(<TicketPagination {...mockPagination} />)

    const buttonNext = getByTestId('button-next-page')
    fireEvent.click(buttonNext)

    await waitFor(() => {
      expect(mockPagination.handleNextPage).toHaveBeenCalled()
    })
  })

  it('Should call handlePreviousPage when left button is clicked', async () => {
    mockPagination.currentPage = 2
    const { getByTestId } = render(<TicketPagination {...mockPagination} />)

    const buttonPrevious = getByTestId('button-previous-page')
    fireEvent.click(buttonPrevious)

    await waitFor(() => {
      expect(mockPagination.handlePreviousPage).toHaveBeenCalled()
    })
  })

  it('Should call handleNextPage when right button is clicked', async () => {
    const { getByTestId } = render(<TicketPagination {...mockPagination} />)

    const buttonNext = getByTestId('button-next-page')
    fireEvent.click(buttonNext)

    await waitFor(() => {
      expect(mockPagination.handleNextPage).toHaveBeenCalled()
    })
  })
})
