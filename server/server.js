const express = require("express"); //commons
const router = require("./routes");

const app = express();
app.use(express.json());

app.use("/carrinho", router);

app.listen(3000, () => console.log(`Servidor rodando em http://localhost:3000/carrinho`))
