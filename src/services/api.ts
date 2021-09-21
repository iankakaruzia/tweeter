import axios from 'axios'
import { toast } from 'react-toastify'

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

api.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response.status === 500) {
      toast.error('Server Error. Please wait a few minutes to try again!')
    }
    return Promise.reject(error)
  }
)

const isServiceError = axios.isAxiosError

export { api, isServiceError }
