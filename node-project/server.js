const bodyParser = require('body-parser'); // helps with reading json
const express = require('express'); // framework to reduce amount of node code
const dotenv = require('dotenv'); // sets environment variables
const category = require('./routes/category'); // route import
const cors = require('cors'); // allowed urls other than the origin

// set environment found in config.env 
dotenv.config({ path: './config/config.env'});
// init express
const app = express();
// parse json
app.use(bodyParser.json());
// set allowed cors
app.use(cors({
    origin: '*' // allow any origin
}));
// category route
app.use('/category', category);
// process.env is an object containing environment variables
const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
