const getUsers = (req, res ,next) => {
    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: 'Show me all the users!'})
}

const deleteUsers = (req, res, next) => {
    res
    .status(204)
    .setHeader('content-type', 'application/json')
    .json({ message: 'User deleted.'})
}

const postUser = (req, res, next) =>{
    res
    .status(201)
    .setHeader('content-type', 'application/json')
    .json({ message: 'User added.'})
}

const getUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: `Show me the user with user ID ${req.params.userId}` })
}

const putUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: `Updated the user with ID ${req.params.userId}` })
}

const deleteUser = (req, res, next) => {
    res
    .status(204)
    .setHeader('contetn-type', 'application/json')
    .json({ message: `Delted the user with user ID ${req.params.userId}` })
}

module.exports = {
    getUsers,
    deleteUsers,
    postUser,
    getUser,
    putUser,
    deleteUser
}