import {BazaarResponse} from "@/types/bazaarTypes";
const API_BASE_URL = process.env.API_BASE_URL


export const getBazaar = async (): Promise<BazaarResponse> => {
    const response = await fetch(`${API_BASE_URL}/skyblock/bazaar`, {
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