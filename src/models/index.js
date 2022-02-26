const Sequelize = require('sequelize');
const CatModel = require('./cats');

const setUpDatabase = () => {
    const connection = new Sequelize("have_i_fed_the_cat_app", "root", "password", {
        host: "localhost",
        port: 3308,
        dialect: "mysql"
    })

    const Cat = CatModel(connection, Sequelize);

    connection.sync({alter: true});

    return {};
}

module.exports = setUpDatabase();
