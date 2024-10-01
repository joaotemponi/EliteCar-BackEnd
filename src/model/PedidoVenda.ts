/**
 * Classe que representa um Pedido de Venda.
 */
export class PedidoVenda {

    /* Atributos */
    /* Identificador do pedido de venda */
    private idPedido: number = 0;
    /* Identificador do cliente que fez o pedido */
    private idCliente: number;
    /* Data do pedido */
    private dataPedido: Date;
    /* Lista de produtos do pedido */
    private produtos: string[];
    /* Valor total do pedido */
    private valorTotal: number;

    /**
     * Construtor da classe PedidoVenda
     * 
     * @param idCliente Identificador do cliente que fez o pedido
     * @param dataPedido Data do pedido
     * @param produtos Lista de produtos do pedido
     * @param valorTotal Valor total do pedido
     */
    constructor(
        idCliente: number,
        dataPedido: Date,
        produtos: string[],
        valorTotal: number
    ) {
        this.idCliente = idCliente;
        this.dataPedido = dataPedido;
        this.produtos = produtos;
        this.valorTotal = valorTotal;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do pedido.
     * @returns {number} o identificador do pedido.
     */
    public getIdPedido(): number {
        return this.idPedido;
    }

    /**
     * Atribui um valor ao identificador do pedido.
     * @param idPedido novo identificador do pedido.
     */
    public setIdPedido(idPedido: number): void {
        this.idPedido = idPedido;
    }

    /**
     * Recupera o identificador do cliente.
     * @returns {number} o identificador do cliente.
     */
    public getIdCliente(): number {
        return this.idCliente;
    }

    /**
     * Atribui um novo valor ao identificador do cliente.
     * @param idCliente novo identificador do cliente.
     */
    public setIdCliente(idCliente: number): void {
        this.idCliente = idCliente;
    }

    /**
     * Recupera a data do pedido.
     * @returns {Date} a data do pedido.
     */
    public getDataPedido(): Date {
        return this.dataPedido;
    }

    /**
     * Define uma nova data para o pedido.
     * @param dataPedido nova data do pedido.
     */
    public setDataPedido(dataPedido: Date): void {
        this.dataPedido = dataPedido;
    }

    /**
     * Recupera a lista de produtos do pedido.
     * @returns {string[]} A lista de produtos do pedido.
     */
    public getProdutos(): string[] {
        return this.produtos;
    }

    /**
     * Define uma nova lista de produtos para o pedido.
     * @param produtos A nova lista de produtos.
     */
    public setProdutos(produtos: string[]): void {
        this.produtos = produtos;
    }

    /**
     * Recupera o valor total do pedido.
     * @returns {number} O valor total do pedido.
     */
    public getValorTotal(): number {
        return this.valorTotal;
    }

    /**
     * Define o valor total do pedido.
     * @param valorTotal Novo valor total do pedido.
     */
    public setValorTotal(valorTotal: number): void {
        this.valorTotal = valorTotal;
    }
}
