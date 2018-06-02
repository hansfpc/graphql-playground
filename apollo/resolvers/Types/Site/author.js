import Users from '../../../../collections/Users'

export default parent => Users.findOne({ _id: parent.authorId })

// TO DO: esto devuelve un array de objetos...ese es el problema
