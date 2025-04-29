import axios from 'axios'
import {MayorResponse} from "@/types/electionTypes";

const API_BASE_URL = process.env.API_BASE_URL

export const getMayors = async (): Promise<MayorResponse> => {
    const response = await axios.get(`${API_BASE_URL}/resources/skyblock/election`)
    return response.data
}