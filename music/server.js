const express = require('express'); // reduces needed node code
const dotenv = require('dotenv'); // sets env variables
const bodyParser = require('body-parser'); // helps read JSON
const logger = require('./middlewares/logger'); // logs activity
const errorHandler = require('./middlewares/errorHandler'); // error handler fn
const connectDB = require('./config/db'); // mongoose database
// routes
const artistRouter = require('./routes/artist.js');
const songRouter = require('./routes/song.js');
const userRouter = require('./routes/user.js');
 // set env vars
dotenv.config({ path: './config/config.env' });
// Connect to DB before init express app
connectDB();
// init app with express
const app = express();
// parse all json coming to app
app.use(bodyParser.json());
// middlewares
app.use(logger);
app.use(errorHandler);
// endpoints
app.use('/song', songRouter);
app.use('/user', userRouter);
app.use('/artist', artistRouter);
// grab PORT from env or set to 5001 if undefined
const PORT = process.env.PORT || 5001;
// logs to the console when server is running
app.listen(PORT, () => console.log(`Server is runnin on PORT: ${PORT}`));
// should only be used as a last resort
process.on('uncaughtException', (err) => {
    console.log(err);
    process.exit(1);
});