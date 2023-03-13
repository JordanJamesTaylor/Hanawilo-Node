const express = require('express'); // reduces needed node code
const dotenv = require('dotenv'); // sets env variables
const bodyParser = require('body-parser'); // helps read JSON
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const artistRouter = require('./routes/artist.js'); // routes
const songRouter = require('./routes/song.js'); // routes
const userRouter = require('./routes/user.js'); // routes

dotenv.config({ path: './config/config.env' }); // set env vars

const app = express(); // init app with express
app.use(bodyParser.json()); // parse all json coming to app
app.use('/song', songRouter); // set endpoints
app.use('/user', userRouter); // set endpoints
app.use('/artist', artistRouter); // set endpoints

const PORT = process.env.PORT || 5001; // grab PORT from env or set to 5001 if undefined

app.listen(PORT, () => console.log(`Server is runnin on PORT: ${PORT}`)); // logs to the console when server is running