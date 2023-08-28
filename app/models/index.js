const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    pool: {
        max: dbConfig.max,
        min: dbConfig.min,
        acquire: dbConfig.acquire,
        idle: dbConfig.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cursos = require("./curso.model")(sequelize,Sequelize);
db.estudiantes = require("./estudiante.model")(sequelize,Sequelize);

db.cursos.hasMany(db.cursos, {
    as: 'cursos' //Con este nick sale en la consulta
});

db.estudiantes.hasMany(db.estudiantes, {    
    as: 'estudiantes'
});

module.exports = db;