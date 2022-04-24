const express = require('express')
const router = express.Router()
router.use(express.json())

const dbCarrinho = [
    {
        id: 5,
        name: "Microsoft Flight Simulator",
        value: "R$ 249,95",
        image: "require('./assets/pesado.jpg')",
    },
]

router.get('/carrinho', (req, res) => {
    res.send(dbCarrinho)
})

module.exports = router