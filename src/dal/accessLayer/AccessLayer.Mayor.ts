import {MayorResponse} from "@/types/election";
const API_BASE_URL = process.env.API_BASE_URL

export const getMayors = async (): Promise<MayorResponse> => {
    const response = await fetch(`${API_BASE_URL}/resources/skyblock/election`, {
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