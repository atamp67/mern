const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// ----------------------
// Config

dotenv.config({path: "backend/config/config.env"});


// ----------------------
// Connecting To Database

connectDatabase();


app.listen(process.env.PORT, () => {
    console.log(`http server is running on port:${process.env.PORT}`);
});