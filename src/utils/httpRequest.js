import axios from "axios"
const http = axios.create({
  baseURL: "",
  timeout: 3000,
  headers: { "Content-Type": "application/json" }
})

http.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
http.interceptors.request.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default http
