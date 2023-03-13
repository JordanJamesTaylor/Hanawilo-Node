const getArtists = (req, res, next) => {
    if(Object.keys(req.query).length){
        const {
            firstName,
            lastName,
            genre
        } = req.query.firstName;
        
        const filter = [];
    
        if(firstName) filter.push(firstName);
        if(lastName) filter.push(lastName);
        if(genre) filter.push(genre);
    
        for(const el of filter){
            console.log(`Searching artists by: ${query}`);
        }
    }

    res
    .status(200) // default status code\\\\\\\\\\
    .setHeader('content-type', 'application/json')
    .json({ message: 'Get all artists.' })
}

const deleteArtists = (req, res, next) => {
    res
    .status(200) // use 200 to display message in postman rather than 204
    .setHeader('content-type', 'application/json')
    .json({ message: 'All artists deleted' })
}

const getArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: `Get artist with ID: ${req.params.artistId}.` })
}

const postArtist = (req, res, next) => {
    res
    .status(201)
    .setHeader('content-type', 'application/json')
    .json({ message: 'New artist added.' })
}

const putArtist = (req, res, next) => {
    res
    .status(202)
    .setHeader('content-type', 'application/json')
    .json({ message: `Update artist with ID: ${req.params.artistId}.` })
}

const deleteArtist = (req, res, next) => {
    res
    .status(200) // use 200 to display message in postman rather than 204
    .setHeader('content-type', 'application/json')
    .json({ message: `Deleted artist with ID: ${req.params.artistId}.` })
}

module.exports = {
    getArtists,
    deleteArtists,
    getArtist,
    postArtist,
    putArtist,
    deleteArtist
}