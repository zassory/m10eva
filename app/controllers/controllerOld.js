exports.findUserById = (userId) => {
    return User.findByPk(userId, {
        include: ['projects'] //Nos permite aumentar nuestra consulta a otras tablas
    })
    .then(user => {
        return user;
    })
    .catch(err => {
        console.log(`>> Error mientras se encontraba los usuarios: ${err.message}`);
    });
}

exports.findProjectById = (id) => {
    return Project.findByPk(id, {
        include: ['user']
    })
    .then(project => {
        return project;
    })
    .catch(err => {
        console.log(`>> Error buscando los proyectos: ${err.message}`);
    });
}

exports.findAll = () => {
    return User.findAll({
        include: ['projects']
    }).then( users => {
        return users;
    }).catch(err => {
        console.log(`>> Error buscando los usuarios: ${err.message}`);
    });
}

exports.getRowsUsers = () => {
    return User.findAll({
        order: [
            ['name','DESC']
        ],
        attributes: ['name'],
        raw: true
    }).then(users => {
        return users;
    }).catch(err => {
        console.log(`>> Error buscando los usuarios por DESC: ${err.message}`);
    });
}

exports.updateUser = (_id,_name) => {
    let userUpdate = {
        id: _id,
        name: _name
    }

    return User.update(userUpdate, {
        where: {
            id: _id
        }
    }).then(user => {
        return user;
    }).catch(err => {
        console.log(`>> Error editando: ${err.message}`);
    });
}

exports.deleteUser = (_id) => {
    return User.destroy({
        where: {
            id: _id
        }
    }).then(user => {
        return user;
    }).catch(err => {
        console.log(`>> Error eliminando: ${err.message}`);
    });
}