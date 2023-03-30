import axios from 'axios';

export const apiKey = "53e46aae";
export const client = axios.create({
    baseURL:"https://www.omdbapi.com",
})
