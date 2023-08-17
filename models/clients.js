//Cria o modelo da estrutura da tabela cliente do banco de dados.

'use strict'

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
        class Clients extends Model {}

        Clients.init({
                nome_cliente: DataTypes.STRING(50),
                endereco: DataTypes.STRING(100),
                bairro: DataTypes.STRING(50),
                complemento: DataTypes.STRING(40),
                cep: DataTypes.INTEGER,
                cidade: DataTypes.STRING(50),
                telefone: DataTypes.BIGINT,
                email: DataTypes.STRING(100)
        },
        {
                sequelize, 
                modelName: 'clients',
                timestamps: false
        });

        return Clients
}