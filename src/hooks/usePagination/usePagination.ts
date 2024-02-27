import { Ticket } from '@/types/Ticket'
import { useEffect, useMemo, useState } from 'react'

export const usePagination = (tickets: Ticket[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentData, setCurrentData] = useState<Ticket[]>([])

  const totalPages = useMemo(() => {
    return Math.ceil((tickets?.length || 0) / itemsPerPage)
  }, [tickets, itemsPerPage])

  const handleChangePage = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    if (tickets) {
      const startIndex = (currentPage - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      setCurrentData(tickets.slice(startIndex, endIndex))
    }
  }, [currentPage, itemsPerPage, tickets ? tickets.length : 0])

  useEffect(() => {
    setCurrentPage(1)
  }, [tickets])

  return {
    currentPage,
    currentData,
    totalPages,
    handleChangePage,
    handleNextPage,
    handlePreviousPage,
  }
}
