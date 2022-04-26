import axios from 'axios'

const api = axios.create({
    baseURL: 'http://172.30.125.224:3000/carrinho'
})

export default api