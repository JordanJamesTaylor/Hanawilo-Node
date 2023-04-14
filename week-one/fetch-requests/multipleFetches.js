const fetch = require('node-fetch');

const getData = async (api1, api2) => {
    let names = [];

    try{
        const [promise1, promise2] = await Promise.all([fetch(api1), fetch(api2)]);
        const [randomUser, rickAndMorty] = await Promise.all([promise1.json(), promise2.json()])

        const { results: [{name: {first, last}}]} = randomUser;
        const { name } = rickAndMorty;
        
        names.push((first + " " + last));
        names.push((name));
    }catch(error){
        console.log("FETCH ERROR: ", error.message);
    }
    
    return names;
}

const peoples = getData("https://randomuser.me/api/?results=1", "https://rickandmortyapi.com/api/character/2");
peoples.then(() => console.log(peoples));