//Cria o modelo da estrutura da tabela cliente do banco de dados.

'use strict'

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
        class Orders_itens extends Model {}

        Orders_itens.init({
                valor_parcial: DataTypes.DECIMAL(7,2),
                quantidade: DataTypes.TINYINT,
                id_pedido: DataTypes.BIGINT,
                id_produto: DataTypes.BIGINT
        },
        {
                sequelize,
                modelName: 'order_itens',
                timestamps: false
        });

        return Orders_itens
}