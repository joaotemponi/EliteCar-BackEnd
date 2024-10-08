import { DatabaseModel } from "./DatabaseModel";

// Recupera o pool de conexões do banco de dados
const database = new DatabaseModel().pool;

/**
 * Classe que representa um cliente.
 */
export class Cliente {
    static listarClientes() {
        throw new Error("Method not implemented.");
    }

    /* Atributos */
    /**
     * Identificador do cliente.
     * Inicializado com o valor padrão de 0.
     */
    private idCliente: number = 0;

    /**
     * Nome do cliente.
     */
    private nome: string;

    /**
     * CPF do cliente.
     */
    private cpf: string;

    /**
     * Telefone do cliente.
     */
    private telefone: string;

    /**
     * Construtor da classe Cliente.
     * Inicializa os atributos com os valores fornecidos.
     * 
     * @param nome Nome do cliente.
     * @param cpf CPF do cliente.
     * @param telefone Telefone do cliente.
     */
    constructor(
        nome: string,
        cpf: string,
        telefone: string
    ) {
        this.nome = nome;         // Atribui o nome fornecido ao atributo nome.
        this.cpf = cpf;           // Atribui o CPF fornecido ao atributo cpf.
        this.telefone = telefone; // Atribui o telefone fornecido ao atributo telefone.
    }

    /* Métodos get e set */

    /**
     * Retorna o identificador do cliente.
     * 
     * @returns {number} O identificador do cliente.
     */
    public getIdCliente(): number {
        return this.idCliente;
    }

    /**
     * Define o identificador do cliente.
     * 
     * @param idCliente O novo identificador do cliente.
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
     * @param nome O nome do cliente a ser definido.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna o CPF do cliente.
     * 
     * @returns {string} O CPF do cliente.
     */
    public getCpf(): string {
        return this.cpf;
    }

    /**
     * Define o CPF do cliente.
     * 
     * @param cpf O CPF a ser definido.
     */
    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    /**
     * Retorna o telefone do cliente.
     * 
     * @returns {string} O telefone do cliente.
     */
    public getTelefone(): string {
        return this.telefone;
    }

    /**
     * Define o telefone do cliente.
     * 
     * @param telefone O telefone a ser definido.
     */
    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    // MÉTODO PARA ACESSAR O BANCO DE DADOS
    // CRUD Create - Reat - Update - Delete
    static async listarCliente(): Promise<Array<Cliente> | null> {
        //CRIANDO LISTA VAZIA PARA ARMAZENAR OS CLIENTES
        let listaDeClientes: Array<Cliente> = [];

        try {
            //Query para consulta no banco de dados
            const querySelectCliente = `SELECT * FROM cliente`;

            //executa a query no banco de dados
            const respostaBD = await database.query(querySelectCliente);

            respostaBD.rows.forEach((cliente) => {
                let novaCliente = new Cliente(
                    cliente.nome,
                    cliente.cpf,
                    cliente.telefone,
                )

                // adicionando o ID ao objeto
                novaCliente.setIdCliente(cliente.id);

                // adiconando o cliente a lista
                listaDeClientes.push(novaCliente);
            });

            // retornando a lista de clientes para quem chamou a função
            return listaDeClientes
        } catch (error) {
            console.log(`Erro ao acessar o modelo: ${error}`);
            return null;
            
        } 
    }
}