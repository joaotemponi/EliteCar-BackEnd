import express from "express";
import cors from "cors";
import { DatabaseModel } from './model/DatabaseModel';
import { Cliente } from "./model/Cliente";
import ClienteController from "./controller/ClienteController";

const port: number = 3333;

const server = express();
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.json({mensagem: "Olá mundo, está é minha primeira aplicação web"});
});

server.get('/clientes', ClienteController.todos);

server.get('/clientes', async (req, res) => {
    const pessoas = await Cliente.listarClientes();
    res.json(pessoas);
});

new DatabaseModel().testeConexao().then((resdb) =>{
    if(resdb) {
        console.log("Conexão com banco de dados realizada com sucesso!");
        //iniciando o servidor
        server.listen(port, () => {
            console.log(`Servidor iniciado no endereço http://localhost:${port}`);
});
    } else {
        console.log("Erro ao conectar com o banco de dados");
    }
})