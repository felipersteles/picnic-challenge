

export enum Temperature {
    Fria = "fria",
    FriaMorna = "fria-morna",
    Morna = "morna",
    MornaQuente = "morna-quente",
    Quente = "quente",
}


export interface Author {
    role: 'requester' | 'agent'
    name: string
    email?: string
}

export interface Comment {
    author: Author
    public: boolean
    body: string
    created_at: string
    attachments: Array<{ file_name: string }>
}

export interface Ticket {
    subject: string
    requester?: { email: string }
    created_at?: string
    comment?: {
        body: string
        public?: boolean
    }
    comments?: Comment[]
}

export  interface TicketsResponse {
    tickets: Ticket[]
}

export interface TopUser {
    email: string
    count: number
}

export interface CategoryData {
    tickets: Ticket[]
    topUsers: TopUser[]
}

export type TicketSearchResult = Record<string, CategoryData>

export interface UserRankingResponse {
    totalTickets: number
    userRanking: TopUser[]
}

export interface Category {
    tickets: Ticket[];
    centroid: number[] | null;
}