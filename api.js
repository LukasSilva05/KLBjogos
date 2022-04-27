import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.220.30.150:3000/carrinho'
})

export default api