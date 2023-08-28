const db = require('./app/models');
const controller = require('./app/controllers/curso.controller.js');

const run = async() => {

    const estudiante1 = await controller.createEstudiante({
        nombres: 'Nicolas Vladimir',
        apellidos: 'Caceres Latorre',
        edad: 39
    })


    const curso1 = await controller.createCurso(estudiante1.id,{
        titulo: 'Introduccion a la programación',
        descripcion: 'Aprender a programar con Java y Bluej'
    });

    const estudianteData = await controller.findEstudianteById(estudiante1.id);
    console.log(`>> Projecto id = ${estudianteData.id} ${JSON.stringify(estudianteData,null,2)}`);

    const cursoData = await controller.findCursoById(curso1.id);
    console.log(`>> Curso id = ${cursoData.id} ${JSON.stringify(cursoData,null,2)}`);
}

db.sequelize.sync({
    force: true
}).then(()=> {
    console.log('Eliminando y resincronizando la base de datos.');
    run();
});