import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

const url =`${baseUrl}?apiKey=${apiKey}`

const $axios = axios.create({
  baseURL: url
})

export default $axios