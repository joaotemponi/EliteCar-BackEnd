import { Request,Response } from "express";
import { Carro } from "../model/Carro";

class CarroController extends Carro{

    static async todos( req: Request, res: Response) {
        try{
            const listaDeCarros = await Carro.listarCarro();

            res.status(200).json(listaDeCarros)
        } catch (error) {
            console.log(`Erro ao acessar método herdado: ${error}`);

            res.status(400).json("Erro ao recuperar as informações dos carros");
        }
    }
}

export default CarroController