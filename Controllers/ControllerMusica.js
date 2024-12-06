import Database from "../utils/database.js";

const db = new Database();

class ControllerMusica{

    constructor() {}

    async getTodasMusicas(_req, res){
        try 
        {
            const sql = "SELECT * FROM musica";
            const resultado = await db.ExecutaComando(sql);
            res.status(200).json(resultado);
        } 
        catch (err) 
        {
            console.error("Erro ao buscar dados da tabela:", err);
            res.status(500).json({ error: "Método não permitido." });
        }  
    }
}

export default ControllerMusica;