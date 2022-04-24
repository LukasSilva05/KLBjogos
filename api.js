import axios from 'axios'

const api = axios.create({
    baseURL: 'http://172.24.221.23:3000'
})

export default api