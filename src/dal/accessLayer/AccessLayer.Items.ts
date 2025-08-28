import {ItemResponse} from "@/types/items";
const API_BASE_URL = process.env.API_BASE_URL

export const getItems = async (): Promise<ItemResponse> => {
    const response = await fetch(`${API_BASE_URL}/skyblock/items`, {
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