import { Ticket } from '@/types/Ticket'
import { AxiosResponse } from 'axios'
import api from '../api'

const getAllTickets = async (): Promise<Ticket[]> => {
  try {
    const response: AxiosResponse<Ticket[]> = await api.get(`/tickets`)
    return response.data
  } catch (error) {
    console.error('Erro ao pegar todos os tickets', error)
    throw error
  }
}

const getTicketDetails = async (ticketId: string): Promise<Ticket> => {
  try {
    const response: AxiosResponse<Ticket> = await api.get(`/tickets/${ticketId}`)
    return response.data
  } catch (error) {
    console.error(`Erro ao pegar o ticket de id: ${ticketId}:`, error)
    throw error
  }
}

const filterTicketsByName = async (name: string): Promise<Ticket[]> => {
  try {
    const response: AxiosResponse<Ticket[]> = await api.get(
      `/tickets?search=${name}`
    )
    return response.data
  } catch (error) {
    console.error('Erro ao filtrar o ticket pelo nome', error)
    throw error
  }
}

const getPaginatedTickets = async (
  page: number,
  limit: number
): Promise<Ticket[]> => {
  try {
    const response: AxiosResponse<Ticket[]> = await api.get(
      `/tickets?page=${page}&limit=${limit}`
    )
    return response.data
  } catch (error) {
    console.error('Erro ao pegar tickets paginados', error)
    throw error
  }
}

export const ticketService = {
  getAllTickets,
  getTicketDetails,
  filterTicketsByName,
  getPaginatedTickets,
}
