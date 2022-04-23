import axios from 'axios'

const api = axios.create({
    baseURL: 'http://172.24.211.199:3000'
})

export default api