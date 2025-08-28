import axios from 'axios'
import {ItemResponse} from "@/types/itemsTypes";

const API_BASE_URL = process.env.API_BASE_URL

export const getItems = async (): Promise<ItemResponse> => {
    const response = await axios.get(`${API_BASE_URL}/resources/skyblock/items`)
    return response.data
}