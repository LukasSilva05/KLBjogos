async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') {
      return global.connection
    }
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:aluno@localhost:3306/carrinho")
    console.log("Conectou no MySQL!")
    global.connection = connection
    return connection
  }

async function selectJogos() {
    const conn = await connect()
    const [rows] = await conn.query("select * from jogo;")
    return rows
}

async function insertJogos(jogo) {
    const conn = await connect()
    const sql = 'INSERT INTO jogo(nome, valor) VALUES (?,?);'
    const values = [jogo.nome, jogo.valor]
    await conn.query(sql, values)
}

async function deleteJogos(id) {
    const conn = await connect()
    const sql = 'DELETE FROM jogo WHERE id=?;'
    await conn.query(sql, [id])
}

module.exports = {selectJogos, insertJogos, deleteJogos}