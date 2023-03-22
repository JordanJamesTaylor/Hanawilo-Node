const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONDO_URL);

    // console.log(conn);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
}

module.exports = connectDB;