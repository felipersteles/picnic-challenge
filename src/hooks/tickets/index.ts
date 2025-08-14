import { TicketsResponse, TicketSearchResult, UserRankingResponse } from '@/types/ticket'
import { useQuery } from '@tanstack/react-query'

// Function to fetch tickets from the API
const fetchTickets = async (): Promise<TicketsResponse> => {
  const response = await fetch('/api/tickets')
  
  if (!response.ok) {
    throw new Error(`Failed to fetch tickets: ${response.status}`)
  }
  
  return response.json()
}

// Function to search tickets info using the info API
const fetchTicketsInfo = async (query: string): Promise<TicketSearchResult> => {
  const response = await fetch(`/api/tickets/info?query=${encodeURIComponent(query)}`)
  
  if (!response.ok) {
    throw new Error(`Failed to search tickets info: ${response.status}`)
  }
  
  return response.json()
}

// Function to fetch user ranking
const fetchUserRanking = async (): Promise<UserRankingResponse> => {
  const response = await fetch('/api/tickets/users')
  
  if (!response.ok) {
    throw new Error(`Failed to fetch user ranking: ${response.status}`)
  }
  
  return response.json()
}

export const useGetTickets = () => {
  return useQuery({
    queryKey: ['tickets'],
    queryFn: fetchTickets,
    staleTime: 5 * 60 * 1000, 
    gcTime: 10 * 60 * 1000, 
  })
}

export const useGetInfoFromTickets = (query: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ['tickets-info', query],
    queryFn: () => fetchTicketsInfo(query),
    enabled: enabled,
    staleTime: 2 * 60 * 1000, 
    gcTime: 5 * 60 * 1000, 
  })
}

export const useGetUserRanking = () => {
  return useQuery({
    queryKey: ['user-ranking'],
    queryFn: fetchUserRanking,
    staleTime: 5 * 60 * 1000, 
    gcTime: 10 * 60 * 1000, 
  })
}