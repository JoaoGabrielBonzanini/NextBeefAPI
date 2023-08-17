const express = require('express');

const cors = require('cors');

const app = express();

const clientsRoute = require('./route/clientsRoute');
const peopleRoute = require('./route/peopleRoute');
const businessRoute = require('./route/businessRoute');
const productsRoute = require('./route/productsRoute');
const regionsRoute = require('./route/regionsRoute');
const deliverymansRoute = require('./route/deliverymansRoute');
const order_itensRoute = require('./route/orders_itensRoute');
const ordersRoute = require('./route/odersRoute');

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers: Content-Type')
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')

        app.use(cors())
        next()
});

app.use('/clients', clientsRoute);
app.use('/people', peopleRoute);
app.use('/business', businessRoute);
app.use('/products', productsRoute);
app.use('/regions', regionsRoute);
app.use('/deliverymans', deliverymansRoute);
app.use('/orders_itens', order_itensRoute);
app.use('/orders', ordersRoute);

//Tratamento de erros

app.use((req, res, next) => {
        const erro = new Error('Rota não encontrada');
        error.status = 404;
        next(erro)
})

app.use((error, req, res, next) => {
        res.status(error.status || 500);
        return res.send({
                erro: {
                        message: error.message
                }
        })
})

module.exports = app;