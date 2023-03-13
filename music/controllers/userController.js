const getUsers = (req, res, next) => {
    if(Object.keys(req.query).length){
        const {
            userName,
            gender
        } = req.query;
        
        const filter = [];
    
        if(userName) filter.push(userName);
        if(gender) filter.push(gender);
    
        for(const el of filter){
            console.log(`Searching users by: ${query}`)
        }
    }

    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: 'Get all users' })
}

const deleteUsers = (req, res, next) => {
    res
    .status(200) // use 200 to display message in postman rather than 204
    .setHeader('content-type', 'application/json')
    .json({ message: 'All users deleted.' })
}

const getUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ messgae: `Get user with ID: ${req.params.userId}.` })
}

const postUser = (req, res, next) => {
    res
    .status(201)
    .setHeader('content-type', 'application/json')
    .json({ message: 'New user added.' })
}

const putUser = (req, res, next) => {
    res
    .status(202)
    .setHeader('content-type', 'application/json')
    .json({ messgae: `Update user with ID: ${req.params.userId}.` })
}

const deleteUser = (req, res, next) => {
    res
    .status(200) // use 200 to display message in postman rather than 204
    .setHeader('content-type', 'application/json')
    .json({ messgae: `Deleted user with ID: ${req.params.userId}` })
}

module.exports = {
    getUsers,
    deleteUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
}