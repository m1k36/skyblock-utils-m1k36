import {Bingo} from "@/types/bingoType";

const API_BASE_URL = process.env.API_BASE_URL

export const getBingo = async (): Promise<Bingo> => {
    const response = await fetch(`${API_BASE_URL}/resources/skyblock/bingo`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'force-cache',
        next: {
            revalidate: 60,
        },
    });

    return await response.json();
};