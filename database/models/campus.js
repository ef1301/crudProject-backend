const Sequelize = require('sequelize');
// Our "db" is our modified database now with tables, routes, and seeded data 
const db = require('../db');

const Campus = define("campus", {

    id: {
        type: Sequelize.NUMBER,
        allowNull: false
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    allStudents: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    imageURL: {
        type: Sequelize.STRING,
        allowNull: false
    },

    address: {
        type: Sequelize.STRING,
        allowNull: false
    },

    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default Campus;