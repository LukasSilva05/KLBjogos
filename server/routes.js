const express = require("express");
const db = require("./db");

const router = express.Router();

router.get("/", async (req, res) => {
  const jogos = await db.selectJogos()
  res.send(jogos);
});

router.post("/", async (req, res) => {
  //adiciona um novo jogo
  let jogo = req.body;

  const jogos = await db.insertJogos(jogo)

  res.send(jogos);
});

router.delete("/:id", async (req, res) => {
  //deleta um jogo
  const id = req.params.id;
  const jogos = await db.deleteJogos(id)

  res.send(jogos);
});

module.exports = router;