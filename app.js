require('dotenv/config')
const cors = require('cors');
const express = require("express");
const app = express();
const db = require("./database/models");
const config = require("./database/config/routes");
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.json());

// CORS SETUP
app.use(cors())
app.use((res, req, next)=> {
    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Methods",
    "GET, HEAD, OPTIONS, POST, PUT, DELETE"
    );
    res.header("Acess-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next()
})

config(app);

app.listen(PORT, async() =>{
    try{
        await db.sequelize.authenticate();
        await db.sequelize.sync({ alter: true });
        console.log("Connected");
        console.log(`Server is running on http://localhost:${PORT}`);
    }catch(e){
        console.error("Connection error", e)
    }
});

