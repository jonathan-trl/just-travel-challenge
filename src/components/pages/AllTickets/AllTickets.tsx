'use client'
import { ticketService } from '@/services/ticketService'
import { Ticket } from '@/types/Ticket'
import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { FilterArea } from './FilterArea'
import { SearchArea } from './SearchArea'
import { TicketArea } from './TicketArea'

type SearchInputs = {
  name: string
}

export const AllTickets = () => {
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([])

  const onSubmit: SubmitHandler<SearchInputs> = async (data) => {
    if (data.name === '') {
      setFilteredTickets([])
      return
    }

    try {
      const response = await ticketService.filterTicketsByName(data.name)
      setFilteredTickets(response)
    } catch (error) {
      setFilteredTickets([])
      alert('Nenhum item encontrado!')
    }
  }

  const onClearFilter = () => {
    setFilteredTickets([])
  }

  return (
    <>
      <div className="bg-white py-spacing-sm">
        <div className="container">
          <SearchArea onSubmit={onSubmit} />
          {filteredTickets && filteredTickets.length > 0 && (
            <span
              onClick={onClearFilter}
              className="inline-block cursor-pointer mt-4 text-md"
            >
              Limpar filtro
            </span>
          )}
        </div>
      </div>
      <div className="container grid xl:grid-cols-12 items-start gap-[30px] py-12">
        <div className="bg-white px-spacing-xs shadow-sm xl:col-span-3">
          <FilterArea />
        </div>
        <div className="relative flex flex-col gap-6 xl:col-span-9">
          <TicketArea filteredTickets={filteredTickets} />
        </div>
      </div>
    </>
  )
}
