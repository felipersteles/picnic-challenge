import { NextResponse } from "next/server";
import tickets from "../../../../data/ticket.json";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Category, Temperature, Ticket } from "@/types/ticket";

const embeddings = new OpenAIEmbeddings({ model: "text-embedding-3-small" });

export function cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length) throw new Error("Vetores devem ter o mesmo tamanho");

    let dot = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < a.length; i++) {
        dot += a[i] * b[i];
        normA += a[i] * a[i];
        normB += b[i] * b[i];
    }

    if (normA === 0 || normB === 0) return 0;

    return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export async function GET() {
    try {
        const ticketsData = tickets.tickets as Ticket[];

        const categoryNames = ["categoria 1", "categoria 2", "categoria 3", "categoria 4", "categoria 5"];
        const categories: Record<string, Category> = {};
        categoryNames.forEach(name => categories[name] = { tickets: [], centroid: null });

        for (const ticket of ticketsData) {
            const text = ticket.subject;
            const emb = await embeddings.embedQuery(text);

            let bestCategory = "";
            let bestSim = -1;

            for (const [catName, catData] of Object.entries(categories)) {
                const sim = catData.centroid ? cosineSimilarity(emb, catData.centroid) : 0;
                if (sim > bestSim) {
                    bestSim = sim;
                    bestCategory = catName;
                }
            }

            if (bestSim < 0.5) {
                bestCategory = Object.entries(categories).sort((a, b) => a[1].tickets.length - b[1].tickets.length)[0][0];
            }

            const cat = categories[bestCategory];
            cat.tickets.push(ticket);

            if (!cat.centroid) {
                cat.centroid = emb;
            } else {
                cat.centroid = cat.centroid.map((v, i) => (v * (cat.tickets.length - 1) + emb[i]) / cat.tickets.length);
            }
        }

        // Temperature based on the ticket arr length
        const entries = Object.entries(categories).sort((a, b) => b[1].tickets.length - a[1].tickets.length);
        const temps = [Temperature.Quente, Temperature.MornaQuente, Temperature.Morna, Temperature.FriaMorna, Temperature.Fria];

        const categorizedByTemp: Partial<Record<Temperature, { tickets: Ticket[]; topUsers: { email: string; count: number }[] }>> = {};

        entries.forEach(([key, cat], i) => {
            const temp = temps[i] || Temperature.Morna;

            // Top user per category
            const userCounts: Record<string, number> = {};
            cat.tickets.forEach(t => {
                const email = t.requester?.email || "desconhecido";
                userCounts[email] = (userCounts[email] || 0) + 1;
            });

            const topUsers = Object.entries(userCounts)
                .map(([email, count]) => ({ email, count }))
                .sort((a, b) => b.count - a.count)
                .slice(0, 5); 

            categorizedByTemp[temp] = {
                tickets: cat.tickets,
                topUsers,
            };
        });

        return NextResponse.json(categorizedByTemp, { status: 200 });
    } catch (error) {
        console.error("Erro ao categorizar tickets:", error);
        return NextResponse.json({ error: "Falha ao categorizar tickets" }, { status: 500 });
    }
}
