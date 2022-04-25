const fs = require("fs").promises;

const express = require("express");

const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
    const data = await fs.readFile(global.fileName, "utf8");
    const json = JSON.parse(data);
    res.send(json.carrinho);
});

module.exports = router;
