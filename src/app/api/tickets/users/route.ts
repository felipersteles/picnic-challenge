import { NextResponse } from "next/server";
import tickets from "../../../../data/ticket.json";
import { Ticket } from "@/types/ticket";

export async function GET() {
    try {
        const ticketsData = tickets.tickets as Ticket[];

        const userCounts: Record<string, number> = {};
        
        ticketsData.forEach(ticket => {
            const email = ticket.requester?.email || "desconhecido";
            userCounts[email] = (userCounts[email] || 0) + 1;
        });

        const userRanking = Object.entries(userCounts)
            .map(([email, count]) => ({ email, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10); // top 10 users

        return NextResponse.json({
            totalTickets: ticketsData.length,
            userRanking
        }, { status: 200 });
    } catch (error) {
        console.error("Erro ao buscar ranking de usuários:", error);
        return NextResponse.json({ error: "Falha ao buscar ranking de usuários" }, { status: 500 });
    }
}
