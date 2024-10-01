/**
 * Classe que representa um cliente.
 */
export class Cliente {

    /* Atributos */
    /* Identificador do cliente */
    private idCliente: number = 0;
    /* Nome do cliente */
    private nome: string;
    /* Idade do cliente */
    private idade: number;
    /* Endereço do cliente */
    private endereco: string;
    /* Email do cliente */
    private email: string;

    /**
     * Construtor da classe Cliente
     * 
     * @param nome Nome do cliente
     * @param idade Idade do cliente
     * @param endereco Endereço do cliente
     * @param email Email do cliente
     */
    constructor(
        nome: string,
        idade: number,
        endereco: string,
        email: string
    ) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.email = email;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do cliente.
     * @returns o identificador do cliente.
     */
    public getIdCliente(): number {
        return this.idCliente;
    }

    /**
     * Atribui um valor ao identificador do cliente.
     * @param idCliente novo identificador do cliente.
     */
    public setIdCliente(idCliente: number): void {
        this.idCliente = idCliente;
    }

    /**
     * Retorna o nome do cliente.
     *
     * @returns {string} O nome do cliente.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do cliente.
     * 
     * @param nome - O nome do cliente a ser definido.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna a idade do cliente.
     *
     * @returns {number} A idade do cliente.
     */
    public getIdade(): number {
        return this.idade;
    }

    /**
     * Define a idade do cliente.
     * 
     * @param idade - A idade a ser definida para o cliente.
     */
    public setIdade(idade: number): void {
        this.idade = idade;
    }

    /**
     * Retorna o endereço do cliente.
     *
     * @returns {string} O endereço do cliente.
     */
    public getEndereco(): string {
        return this.endereco;
    }

    /**
     * Define o endereço do cliente.
     * 
     * @param endereco - O endereço a ser definido para o cliente.
     */
    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    /**
     * Retorna o email do cliente.
     *
     * @returns {string} O email do cliente.
     */
    public getEmail(): string {
        return this.email;
    }

    /**
     * Define o email do cliente.
     * 
     * @param email - O novo email do cliente.
     */
    public setEmail(email: string): void {
        this.email = email;
    }
}
