CREATE DATABASE elitecar;

CREATE TABLE carro (
	id_carro SERIAL PRIMARY KEY,
	marca VARCHAR(50) NOT NULL,
	modelo VARCHAR(50) NOT NULL,
	ano INT,
	cor VARCHAR(20)
);

CREATE TABLE cliente (
	id_cliente SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	cpf VARCHAR(11) UNIQUE NOT NULL,
	telefone VARCHAR(16)
);

CREATE TABLE pedido_venda (
	id_pedido SERIAL PRIMARY KEY,
	id_cliente INT NOT NULL,
	id_carro INT NOT NULL,
	data_pedido DATE NOT NULL,
	valor_pedido DECIMAL(6) NOT NULL,
	FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente),
	FOREIGN KEY (id_carro) REFERENCES carro (id_carro)
);

INSERT INTO carro (marca, modelo, ano, cor) VALUES 
('Toyota', 'Corolla', 2020, 'Prata'),
('Honda', 'Civic', 2021, 'Preto'),
('Ford', 'Fiesta', 2019, 'Vermelho'),
('Chevrolet', 'Onix', 2022, 'Branco'),
('Volkswagen', 'Gol', 2020, 'Azul');


INSERT INTO cliente (nome, cpf, telefone) VALUES 
('Maria Silva', '12345678901', '11 91234-5678'),
('João Pereira', '10987654321', '21 99876-5432'),
('Ana Costa', '23456789012', '31 98765-4321'),
('Pedro Oliveira', '34567890123', '41 97654-3210'),
('Luiza Souza', '45678901234', '51 96543-2109');


INSERT INTO pedido_venda (id_cliente, id_carro, data_pedido, valor_pedido) VALUES 
(1, 1, '2024-10-01', 75000.00),  -- Maria Silva comprou um Toyota Corolla
(2, 2, '2024-10-02', 85000.00),  -- João Pereira comprou um Honda Civic
(3, 3, '2024-10-03', 45000.00),  -- Ana Costa comprou um Ford Fiesta
(4, 4, '2024-10-04', 65000.00),  -- Pedro Oliveira comprou um Chevrolet Onix
(5, 5, '2024-10-05', 50000.00);  -- Luiza Souza comprou um Volkswagen Gol
