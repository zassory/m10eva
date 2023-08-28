const db = require('./app/models');
const controller = require('./app/controllers/curso.controller.js');

const run = async() => {        
    await controller.createCurso({
        titulo: 'Introduccion a la programación',
        descripcion: 'Aprender a programar con Java y Bluej'
    });

    const estudiante = await controller.createEstudiante({
        nombres: 'Nicolás Vladimir',
        apellidos: 'Cáceres Latorre',
        edad: 39
    });

    const estudianteData = await controller.findEstudianteById(estudiante.id);
    console.log(`>> Projecto id = ${estudianteData.id} ${JSON.stringify(estudianteData,null,2)}`);
}

db.sequelize.sync({
    force: true
}).then(()=> {
    console.log('Eliminando y resincronizando la base de datos.');
    run();
});