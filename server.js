const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise"); // Biblioteca para conectar ao MySQL
const app = express();

const PORT = 4000; // Porta do servidor

// Middleware para interpretar o corpo das requisições JSON
app.use(express.json());

// Habilita CORS
app.use(cors());

// Configuração da conexão com o banco de dados
const dbConfig = {
  host: "137.131.199.82", // Endereço do servidor MySQL
  user: "remoto", // Substitua pelo seu usuário do MySQL
  password: "minhasenha", // Substitua pela sua senha
  database: "atividadefinal", // Nome do banco de dados
  waitForConnections: true,
  connectionLimit: 10, 
  queueLimit: 0,
};

async function queryDatabase(sql, params = []) {
    let connection;
    try {
      connection = await mysql.createConnection(dbConfig);
      const [rows] = await connection.execute(sql, params);
      return rows;
    } catch (error) {
      console.error("Erro ao consultar o banco de dados:", error);  // Mostra o erro completo
      throw error;
    } finally {
      if (connection) await connection.end();
    }
  }
  

// Rota principal
app.get("/", (req, res) => {
  res.send("Olá, Mundo com Express e Banco de Dados!");
});

// Rota para buscar músicas no banco de dados
app.get("/musica", async (req, res) => {
  try {
    const sql = "SELECT * FROM musica"; // Ajuste conforme sua tabela
    const musicas = await queryDatabase(sql);
    res.json(musicas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar músicas no banco de dados." });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });