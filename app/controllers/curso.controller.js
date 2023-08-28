const {
    cursos,
    estudiantes
} = require("../models");
const db = require("../models");
const Curso = db.cursos;
const Estudiante = db.estudiantes;

//Crear y Guardar

exports.createEstudiante = (estudiante) => {
    return Estudiante.create({
        nombres: estudiante.nombres,
        apellidos: estudiante.apellidos,
        edad: estudiante.edad
    }).then(estudiante => {
        console.log(`>> Creado el estudiante: ${JSON.stringify(estudiante, null, 4)}`);
        return estudiante;
    })
    .catch(err => {
        console.log(`>> Error al crear el estudiante: ${err.message}`);
    });
}

exports.createCurso = (estudianteId,curso) => {
    return Curso.create({
        titulo: curso.titulo,
        descripcion: curso.descripcion,
        estudianteId: estudianteId
    })
    .then( curso => {
        console.log(`>> Se ha creado el curso: ${JSON.stringify(curso,null,4)}`);
        return curso;
    })
    .catch(err => {
        console.log(`>> Error al crear el curso ${err.message}`);
    });
}

exports.findEstudianteById = (id) => {
            return Estudiante.findByPk(id, {
                include: ['cursos']
            })
            .then(estudiante => {
                return estudiante;
            })
            .catch(err => {
                console.log(`>> Error buscando los estudiante: ${err.message}`);
            })
}

exports.findCursoById = (id) => {
    return Curso.findByPk(id, {
        include: ['estudiantes']
    }).then(user => {
        return user;
    }).catch(err => console.log(`>> Error mientras se encontraba el curso: ${err.message}`));
}