import { JTArrowLeft } from '@/components/icon/JTArrowLeft'
import { JTArrowRight } from '@/components/icon/JTArrowRight'

type TicketPaginationProps = {
  currentPage: number
  totalPages: number
  totalResults: number
  handleChangePage: (page: number) => void
  handlePreviousPage: () => void
  handleNextPage: () => void
}
export const TicketPagination = ({
  currentPage,
  totalPages,
  handleChangePage,
  handleNextPage,
  handlePreviousPage,
  totalResults,
}: TicketPaginationProps) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="pagination flex w-full justify-end items-center gap-6 font-inter">
      <span className="text-[#828292] text-md">{totalResults} resultados</span>
      <div className="flex items-center gap-2">
        <span className="text-[#3E3F44] text-md">Página:</span>
        <select
          name=""
          id=""
          onChange={(e) => handleChangePage(Number(e.target.value))}
          value={currentPage}
          className="w-[70px] py-1.5 px-2 outline-none border border-[#8A90BD] rounded-md"
        >
          {pageNumbers.map((page) => (
            <option
              key={page}
              onClick={() => handleChangePage(page)}
              value={page}
            >
              0{page}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-4 text-md">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="arrow-left"
        >
          <JTArrowLeft color={currentPage === 1 ? '#9EAAE1' : '#455CC7'} />
        </button>

        <div className="flex gap-4">
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handleChangePage(page)}
              disabled={page === currentPage}
              className={`text-[#455CC7] ${
                page === currentPage ? 'font-bold' : 'font-normal'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="arrow-right"
        >
          <JTArrowRight
            color={currentPage === totalPages ? '#9EAAE1' : '#455CC7'}
          />
        </button>
      </div>
    </div>
  )
}
