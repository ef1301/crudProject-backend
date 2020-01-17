// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Student = require("./student");
const Campus = require("./campus");


//Let's prepare  our associations 
//O:M
Campus.hasMany(Student);
//O:O
Student.belongsTo(Campus);

export default {
    Student,
    Campus
};