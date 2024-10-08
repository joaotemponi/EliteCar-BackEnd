import { Request,Response } from "express";
import { Cliente } from "../model/Cliente";

class ClienteController extends Cliente{

    static async todos( req: Request, res: Response) {
        try{
            const listaDeClientes = await Cliente.listarCliente();

            res.status(200).json(listaDeClientes)
        } catch (error) {
            console.log(`Erro ao acessar método herdado: ${error}`);

            res.status(400).json("Erro ao recuperar as informações dos clientes");
        }
    }
}

export default ClienteController