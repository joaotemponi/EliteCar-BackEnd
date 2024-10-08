import { DatabaseModel } from "./DatabaseModel";

// Recupera o pool de conexões do banco de dados
const database = new DatabaseModel().pool;

/**
 * Classe que representa um pedido de venda.
 */
export class PedidoVenda {

    /* Atributos */
    /**
     * Identificador do pedido de venda.
     * Inicializado com o valor padrão de 0.
     */
    private idPedido: number = 0;

    /**
     * Identificador do carro relacionado ao pedido.
     */
    private idCarro: number;

    /**
     * Identificador do cliente relacionado ao pedido.
     */
    private idCliente: number;

    /**
     * Data do pedido de venda.
     */
    private dataPedido: Date;

    /**
     * Valor total do pedido de venda.
     */
    private valorPedido: number;

    /**
     * Construtor da classe PedidoVenda.
     * Inicializa os atributos com os valores fornecidos.
     * 
     * @param idCarro Identificador do carro relacionado ao pedido.
     * @param idCliente Identificador do cliente relacionado ao pedido.
     * @param dataPedido Data em que o pedido foi realizado.
     * @param valorPedido Valor total do pedido.
     */
    constructor(
        idCarro: number, 
        idCliente: number,
        dataPedido: Date,
        valorPedido: number
    ) {
        this.idCarro = idCarro;           // Atribui o ID do carro ao atributo idCarro.
        this.idCliente = idCliente;       // Atribui o ID do cliente ao atributo idCliente.
        this.dataPedido = dataPedido;     // Atribui a data do pedido ao atributo dataPedido.
        this.valorPedido = valorPedido;   // Atribui o valor do pedido ao atributo valorPedido.
    }

    /* Métodos get e set */

    /**
     * Retorna o identificador do pedido de venda.
     * 
     * @returns {number} O identificador do pedido de venda.
     */
    public getIdPedido(): number {
        return this.idPedido;
    }

    /**
     * Define o identificador do pedido de venda.
     * 
     * @param idPedidoVenda O novo identificador do pedido de venda.
     */
    public setIdPedido(idPedido: number): void {
        this.idPedido = idPedido;
    }

    /**
     * Retorna o identificador do carro relacionado ao pedido.
     * 
     * @returns {number} O identificador do carro.
     */
    public getIdCarro(): number {
        return this.idCarro;
    }

    /**
     * Define o identificador do carro relacionado ao pedido.
     * 
     * @param idCarro O novo identificador do carro.
     */
    public setIdCarro(idCarro: number): void {
        this.idCarro = idCarro;
    }

    /**
     * Retorna o identificador do cliente relacionado ao pedido.
     * 
     * @returns {number} O identificador do cliente.
     */
    public getIdCliente(): number {
        return this.idCliente;
    }

    /**
     * Define o identificador do cliente relacionado ao pedido.
     * 
     * @param idCliente O novo identificador do cliente.
     */
    public setIdCliente(idCliente: number): void {
        this.idCliente = idCliente;
    }

    /**
     * Retorna a data do pedido de venda.
     * 
     * @returns {Date} A data do pedido de venda.
     */
    public getDataPedido(): Date {
        return this.dataPedido;
    }

    /**
     * Define a data do pedido de venda.
     * 
     * @param dataPedido A nova data do pedido de venda.
     */
    public setDataPedido(dataPedido: Date): void {
        this.dataPedido = dataPedido;
    }

    /**
     * Retorna o valor total do pedido de venda.
     * 
     * @returns {number} O valor do pedido de venda.
     */
    public getValorPedido(): number {
        return this.valorPedido;
    }

    /**
     * Define o valor total do pedido de venda.
     * 
     * @param valorPedido O novo valor do pedido de venda.
     */
    public setValorPedido(valorPedido: number): void {
        this.valorPedido = valorPedido;
    }

    // MÉTODO PARA ACESSAR O BANCO DE DADOS
    // CRUD Create - Reat - Update - Delete
    static async listarPedidosVendas(): Promise<Array<PedidoVenda> | null> {
        //CRIANDO LISTA VAZIA PARA ARMAZENAR OS CLIENTES
        let listaDePedidoVenda: Array<PedidoVenda> = [];

        try {
            //Query para consulta no banco de dados
            const querySelectPedidoVenda = `SELECT * FROM pedido_venda`;

            //executa a query no banco de dados
            const respostaBD = await database.query(querySelectPedidoVenda);

            respostaBD.rows.forEach((pedidoVenda) => {
                let novaPedidoVenda = new PedidoVenda(
                    pedidoVenda.id_carro,
                    pedidoVenda.id_cliente,
                    pedidoVenda.data_pedido,
                    pedidoVenda.valor_pedido
                )

                // adicionando o ID ao objeto
                novaPedidoVenda.setIdPedido(pedidoVenda.id_pedido);
                console.log(novaPedidoVenda);
                // adiconando o cliente a lista
                listaDePedidoVenda.push(novaPedidoVenda);
            });

            // retornando a lista de clientes para quem chamou a função
            return listaDePedidoVenda
        } catch (error) {
            console.log(`Erro ao acessar o modelo: ${error}`);
            return null;
            
        } 
    }

}
