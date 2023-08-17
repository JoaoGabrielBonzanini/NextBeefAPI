//Cria o modelo da estrutura da tabela cliente do banco de dados.

'use strict'

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes ) => {
        class Orders extends Model {}

        Orders.init({
                valor_total: DataTypes.DECIMAL(8,2),
                data_hora: DataTypes.DATE,
                entrega: DataTypes.STRING(3),
                id_cliente: DataTypes.BIGINT,
                id_entregador: DataTypes.BIGINT,
        },
        {
                sequelize,
                modelName: 'orders',
                timestamps: false
        })

        return Orders
}