import express from 'express';
import cors from 'cors';
import RouteMusica from './Routes/RouteMusica.js';

const app = express();

app.use(express.json());
app.use(cors());


//app.get("/", (request, response)=>response.status(200).send(db.executaComando()))
app.use('/musica', new RouteMusica().getRouter());
export default app;