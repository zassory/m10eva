module.exports = (sequelize,DataTypes) => {
    const Curso = sequelize.define('cursos', {
        titulo: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        }
    });
    return Curso;
}