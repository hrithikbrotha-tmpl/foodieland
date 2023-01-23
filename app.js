require('dotenv/config')
const express = require("express");
const app = express();
const db = require("./database/models");
const config = require("./database/config/routes");
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.json());

config(app);

app.listen(PORT, async() =>{
    try{
        await db.sequelize.authenticate();
        await db.sequelize.sync();
        console.log("Connected");
        console.log(`Server is running on http://localhost:${PORT}`);
    }catch(e){
        console.error("Connection error", e)
    }
});