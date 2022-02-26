const Sequelize = require('sequelize');
const CatModel = require('./cats');

const {DB_PASSWORD, DB_USER, DB_NAME, DB_HOST, DB_PORT} = process.env;

const setUpDatabase = () => {
    const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
        host: DB_HOST,
        port: DB_PORT,
        dialect: "mysql"
    })

    const Cat = CatModel(connection, Sequelize);

    connection.sync({alter: true});

    return {};
}

module.exports = setUpDatabase();
