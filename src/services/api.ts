import axios from 'axios'

const api = axios.create({
  baseURL: 'https://server-black-kappa.vercel.app/api'
})

export default api
