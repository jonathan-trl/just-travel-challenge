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

  return (
    <>
      <SearchArea onSubmit={onSubmit} />
      <div className="container grid lg:grid-cols-12 items-start gap-[30px] py-12">
        <FilterArea />
        <TicketArea filteredTickets={filteredTickets} />
      </div>
    </>
  )
}
