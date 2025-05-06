import axios from 'axios'
import {Bingo} from "@/types/bingoType";

const API_BASE_URL = process.env.API_BASE_URL

export const getBingo = async (): Promise<Bingo> => {
    const response = await axios.get(`${API_BASE_URL}/resources/skyblock/bingo`)
    return response.data
}