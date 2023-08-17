//Realiza conexão com o banco de dados.

const Sequelize = require('sequelize');

const sequelize = new Sequelize ('nextbeef', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
        console.log('Conexão realizada com sucesso.')
})
.catch(function(){
        console.log('ERRO: Não foi possível realizar a conexão.')
})

module.exports = sequelize;