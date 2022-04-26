const fs = require("fs").promises;

const express = require("express");

const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
  const data = await fs.readFile(global.fileName, "utf8");
  const json = JSON.parse(data);
  res.send(json.carrinho);
});

router.post("/", async (req, res) => {
  //adiciona um novo jogo
  let jogo = req.body;

  const data = await fs.readFile(global.fileName, "utf8");
  let json = JSON.parse(data);

  jogo = { id: json.nextId, ...jogo };
  json.carrinho.push(jogo);
  json.nextId++;

  await fs.writeFile(global.fileName, JSON.stringify(json));

  res.send(json.carrinho);
});

router.delete("/:id", async (req, res) => {
  //deleta um jogo
  const id = req.params.id;
  const data = await fs.readFile(global.fileName, "utf8");
  const json = JSON.parse(data);

  let jogosList = json.carrinho;
  jogosList = jogosList.filter((a) => a.id != id);
  json.carrinho = jogosList;
  await fs.writeFile(global.fileName, JSON.stringify(json));

  res.send(json.carrinho);
});

module.exports = router;
