"use client";

import { useState } from "react";
import { useGetInfoFromTickets, useGetUserRanking } from "@/hooks/tickets";
import { Ticket, TopUser } from "@/types/ticket";

export default function Home() {
    const {
        data: searchResults,
        isLoading,
        error,
    } = useGetInfoFromTickets("", true);

    const {
        data: userRankingData,
        isLoading: isLoadingRanking,
        error: rankingError,
    } = useGetUserRanking();

    const [expandedCategories, setExpandedCategories] = useState<
        Record<string, boolean>
    >({});

    const toggleCategory = (category: string) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    const getTemperatureColor = (temperature: string) => {
        switch (temperature) {
            case "quente":
                return "bg-red-500";
            case "morna-quente":
                return "bg-orange-500";
            case "morna":
                return "bg-yellow-500";
            case "fria-morna":
                return "bg-blue-500";
            case "fria":
                return "bg-cyan-500";
            default:
                return "bg-gray-500";
        }
    };

    const getTemperatureLabel = (temperature: string) => {
        switch (temperature) {
            case "quente":
                return "Quente";
            case "morna-quente":
                return "Morna-Quente";
            case "morna":
                return "Morna";
            case "fria-morna":
                return "Fria-Morna";
            case "fria":
                return "Fria";
            default:
                return temperature;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    Tickets por Temperatura
                                </h1>
                            </div>
                            <p className="text-lg text-gray-600 max-w-2xl">
                                Visualize os tickets organizados por nível de temperatura com análise inteligente de priorização
                            </p>
                        </div>
                        
                        <div className="flex flex-col items-center lg:items-end gap-4">
                            <div className="text-center lg:text-right">
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                                    Desafio Picnic
                                </h2>
                                <p className="text-gray-600 mb-3">
                                    Desenvolvido com Next.js, TypeScript e Tailwind CSS
                                </p>
                                <div className="flex items-center justify-center lg:justify-end gap-2">
                                    <span className="text-sm text-gray-500">por</span>
                                    <a
                                        target="_blank"
                                        href="https://github.com/felipersteles/picnic-challenge"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        Felipe Teles
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span>API Online</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span>Real-time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Ranking de Usuários
                        </h2>

                        {isLoadingRanking && (
                            <div className="flex items-center justify-center py-8">
                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                                <span className="ml-3 text-gray-600">
                                    Carregando ranking...
                                </span>
                            </div>
                        )}

                        {rankingError && (
                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <p className="text-red-600 text-sm">
                                    Erro ao carregar ranking:{" "}
                                    {rankingError instanceof Error
                                        ? rankingError.message
                                        : "Erro desconhecido"}
                                </p>
                            </div>
                        )}

                        {userRankingData && (
                            <div>
                                <div className="mb-4">
                                    <p className="text-gray-600">
                                        Total de tickets:{" "}
                                        <span className="font-semibold">
                                            {userRankingData.totalTickets}
                                        </span>
                                    </p>
                                </div>

                                <div className="grid gap-3">
                                    {userRankingData.userRanking.map(
                                        (user, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow"
                                            >
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold text-sm">
                                                        {index + 1}
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900">
                                                            {user.email}
                                                        </p>
                                                        <p className="text-sm text-gray-600">
                                                            {user.count} ticket
                                                            {user.count !== 1
                                                                ? "s"
                                                                : ""}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-2xl font-bold text-blue-600">
                                                        {user.count}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        tickets
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Tickets por Temperatura
                        </h2>

                        {isLoading && (
                            <div className="flex items-center justify-center py-12">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                                <span className="ml-3 text-gray-600">
                                    Carregando tickets...
                                </span>
                            </div>
                        )}

                        {error && (
                            <div className="p-4 bg-red-50 rounded-lg shadow-sm border border-red-200 mb-6">
                                <h3 className="text-sm font-medium text-red-700 mb-2">
                                    Erro ao carregar tickets:
                                </h3>
                                <p className="text-red-600 text-sm">
                                    {error instanceof Error
                                        ? error.message
                                        : "Erro desconhecido"}
                                </p>
                            </div>
                        )}

                        {searchResults &&
                            Object.keys(searchResults).length > 0 && (
                                <div className="space-y-6">
                                    {Object.entries(searchResults).map(
                                        ([temperature, ticketsInCategory]) => (
                                            <div
                                                key={temperature}
                                                className="bg-gray-50 rounded-lg overflow-hidden"
                                            >
                                                <button
                                                    onClick={() =>
                                                        toggleCategory(
                                                            temperature
                                                        )
                                                    }
                                                    className="w-full p-6 flex items-center justify-between hover:bg-gray-100 transition-colors"
                                                >
                                                    <div className="flex items-center space-x-4">
                                                        <div
                                                            className={`w-4 h-4 rounded-full ${getTemperatureColor(
                                                                temperature
                                                            )}`}
                                                        ></div>
                                                        <div>
                                                            <h3 className="text-lg font-semibold text-gray-900">
                                                                {getTemperatureLabel(
                                                                    temperature
                                                                )}
                                                            </h3>
                                                            <p className="text-sm text-gray-600">
                                                                {
                                                                    ticketsInCategory
                                                                        .tickets
                                                                        .length
                                                                }{" "}
                                                                ticket
                                                                {ticketsInCategory
                                                                    .tickets
                                                                    .length !==
                                                                1
                                                                    ? "s"
                                                                    : ""}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-sm text-gray-500">
                                                            {expandedCategories[
                                                                temperature
                                                            ]
                                                                ? "Recolher"
                                                                : "Expandir"}
                                                        </span>
                                                        <svg
                                                            className={`w-5 h-5 text-gray-500 transition-transform ${
                                                                expandedCategories[
                                                                    temperature
                                                                ]
                                                                    ? "rotate-180"
                                                                    : ""
                                                            }`}
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M19 9l-7 7-7-7"
                                                            />
                                                        </svg>
                                                    </div>
                                                </button>

                                                {expandedCategories[
                                                    temperature
                                                ] && (
                                                    <div className="border-t border-gray-200 p-6">
                                                        {ticketsInCategory.topUsers &&
                                                            ticketsInCategory
                                                                .topUsers
                                                                .length > 0 && (
                                                                <div className="mb-6">
                                                                    <h4 className="text-md font-semibold text-gray-800 mb-3">
                                                                        Top
                                                                        Usuários
                                                                        (
                                                                        {
                                                                            ticketsInCategory
                                                                                .topUsers
                                                                                .length
                                                                        }
                                                                        )
                                                                    </h4>
                                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                                                        {ticketsInCategory.topUsers.map(
                                                                            (
                                                                                user: TopUser,
                                                                                userIndex: number
                                                                            ) => (
                                                                                <div
                                                                                    key={
                                                                                        userIndex
                                                                                    }
                                                                                    className="p-3 bg-blue-50 rounded-lg border border-blue-200 hover:shadow-sm transition-shadow"
                                                                                >
                                                                                    <div className="flex items-center justify-between">
                                                                                        <div className="flex-1 min-w-0">
                                                                                            <p className="text-sm font-medium text-blue-900 truncate">
                                                                                                {
                                                                                                    user.email
                                                                                                }
                                                                                            </p>
                                                                                            <p className="text-xs text-blue-600">
                                                                                                {
                                                                                                    user.count
                                                                                                }{" "}
                                                                                                ticket
                                                                                                {user.count !==
                                                                                                1
                                                                                                    ? "s"
                                                                                                    : ""}
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="ml-2">
                                                                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                                                                #
                                                                                                {userIndex +
                                                                                                    1}
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            )}

                                                        <div>
                                                            <h4 className="text-md font-semibold text-gray-800 mb-3">
                                                                Tickets (
                                                                {
                                                                    ticketsInCategory
                                                                        .tickets
                                                                        .length
                                                                }
                                                                )
                                                            </h4>
                                                            <div className="grid gap-4">
                                                                {ticketsInCategory.tickets.map(
                                                                    (
                                                                        ticket: Ticket,
                                                                        index: number
                                                                    ) => (
                                                                        <div
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-shadow"
                                                                        >
                                                                            <div className="flex items-start justify-between mb-3">
                                                                                <h5 className="text-sm font-medium text-gray-700">
                                                                                    Ticket
                                                                                    #
                                                                                    {index +
                                                                                        1}
                                                                                </h5>
                                                                                {ticket
                                                                                    .requester
                                                                                    ?.email && (
                                                                                    <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
                                                                                        {
                                                                                            ticket
                                                                                                .requester
                                                                                                .email
                                                                                        }
                                                                                    </span>
                                                                                )}
                                                                            </div>
                                                                            <div className="space-y-2">
                                                                                <p className="text-gray-900 text-sm font-medium">
                                                                                    {
                                                                                        ticket.subject
                                                                                    }
                                                                                </p>
                                                                                {ticket
                                                                                    .comment
                                                                                    ?.body && (
                                                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                                                        {
                                                                                            ticket
                                                                                                .comment
                                                                                                .body
                                                                                        }
                                                                                    </p>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    )}
                                </div>
                            )}

                        {(!searchResults ||
                            Object.keys(searchResults).length === 0) &&
                            !isLoading && (
                                <div className="text-center py-12">
                                    <div className="text-gray-500">
                                        <svg
                                            className="mx-auto h-12 w-12 mb-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                                            Nenhum ticket encontrado
                                        </h3>
                                        <p className="text-gray-600">
                                            Não há tickets disponíveis para
                                            exibir.
                                        </p>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}
