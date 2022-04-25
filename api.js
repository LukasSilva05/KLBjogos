import axios from 'axios'

const api = axios.create({
    baseURL: 'http://172.18.36.145:3000/carrinho'
})

export default api