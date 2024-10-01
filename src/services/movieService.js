import {API_URL,API_KEY} from '../config';
import axios from 'axios';


export const fetchAllMovies= async (endpoint) => {
    try {
        let result = await axios.get(endpoint)
        return result
    } catch (error) {
        console.log('Error occured while fetching movies...',error)
    }
}
export const fetchAllShows= async (endpoint) => {
    try {
        let result = await axios.get(endpoint)
        return result
    } catch (error) {
        console.log('Error occured while fetching tv shows...',error)
    }
}
