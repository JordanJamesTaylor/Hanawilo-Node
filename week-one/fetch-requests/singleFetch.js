const fetch = require('node-fetch');

const getCharacters = async (api) => {
    const promise = await fetch(api);
    let names = [];
    
    try{
        const response = await promise.json();
        for(const character of response["results"]) names.push(character.name);
    }catch(error){
        console.log("FETCH ERROR: ", error.message);
    }
    
    return names;
}

const characters = getCharacters("https://rickandmortyapi.com/api/character");
characters.then((names) => console.log(names));
