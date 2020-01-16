const Sequelize = require('sequelize');
// Our "db" is our modified database now with tables, routes, and seeded data 
const db = require('../db');

const Student = define("student", {

    id: {
        type: Sequelize.NUMBER,
        allowNull: false
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    imageURL: {
        type: Sequelize.STRING,
        allowNull: false
    },

    gpa: {
        type: Sequelize.FLOAT,
        allowNull: false
    },

    campusId: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
});

export default Student;