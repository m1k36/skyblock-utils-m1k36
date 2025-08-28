import axios from 'axios'

import {BazaarResponse} from "@/types/bazaarTypes";

const API_BASE_URL = process.env.API_BASE_URL

export const getBazaar = async (): Promise<BazaarResponse> => {
    const response = await axios.get(`${API_BASE_URL}/skyblock/bazaar`)
    return response.data
}