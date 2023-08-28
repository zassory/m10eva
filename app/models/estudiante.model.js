

module.exports = (sequelize, DataTypes) => {
    const Estudiante = sequelize.define('estudiantes', {
        nombres: {
            type: DataTypes.STRING
        },
        apellidos: {
            type: DataTypes.STRING
        },
        edad: {
            type: DataTypes.INTEGER
        }
    });
    return Estudiante;
}