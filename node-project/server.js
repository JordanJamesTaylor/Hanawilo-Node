const bodyParser = require('body-parser'); // helps with reading json
const express = require('express'); // framework to reduce amount of node code
const dotenv = require('dotenv'); // sets environment variables
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./config/db');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');

// import routes
const category = require('./routes/category');
const item = require('./routes/item');
const user = require('./routes/user');
const cors = require('cors'); // allowed urls other than the origin

// set environment found in config.env -> accessible in all files
dotenv.config({ path: './config/config.env'});
// connect DB before init express app
connectDB();
// init express
const app = express();
// parse all json coming into app into obj 
app.use(bodyParser.json());
// set allowed cors
app.use(cors({
    origin: '*' // allow any origin
}));
// route endpoints
app.use(fileupload());
app.use(cookieParser());
app.use(logger);
app.use(errorHandler);
app.use('/category', category);
app.use('/item', item);
app.use('/user', user);
// process.env is an object containing environment variables
const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));

// process = node env
// any unhandled rejects fall into this function
// arg 1 = event type
// arg 2 = CB
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // kill the server
    // arg = CB with message to send to terminal
    // process.exit(1) = Uncaught Fatal Exception
    server.close(() => process.exit(1));
})