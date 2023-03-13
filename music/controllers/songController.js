const getSongs = (req, res, next) => {
    if(Object.keys(req.query).length){
        const {
            songTitle,
            artist,
            genre
        } = req.query.genre
        
        const filter = [];
        
        if(songTitle) filter.push(songTitle);
        if(artist) filter.push(artist);
        if(genre) filter.push(genre);
    
        for(const el of filter){
            console.log(`Searching songs by: ${query}`);
        }
    }

    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: 'Get all songs.' })
}

const deleteSongs = (req, res, next) => {
    res
    .status(200) // use 200 to display message in postman rather than 204
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'All songs deleted.' })
}

const getSong = (req, res, next) => {
    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: `Get song with ID: ${req.params.songId}.` })
}

const postSong = (req, res, next) => {
    res
    .status(201)
    .setHeader('content-type', 'application/json')
    .json({ message: 'New song added.' })
}

const putSong = (req, res, next) => {
    res
    .status(202)
    .setHeader('content-type', 'application/json')
    .json({ message: `Update song with ID: ${req.params.songId}.` })
}

const deleteSong = (req, res, next) => {
    res
    .status(200) // use 200 to display message in postman rather than 204
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Deleted song with ID: ${req.params.songId}.` })
}

module.exports = {
    getSongs,
    deleteSongs,
    postSong,
    getSong,
    putSong,
    deleteSong
}