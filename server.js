const express = require('express');
const cors = require('cors');
require('dotenv').config();
const usersRouter = require('./routes/users');

class Server {
    constructor(){
        this.app = express(); //instancia de express
        this.port = process.env.PORT, //Puerto para el servidor
         
   //http://localhost:3000/api/v1/users
        this.basePath= '/api/v1';
        this.usersPath = `${this.basePath}/users`;

        this.middlewares();
        this.routers();

    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());//Para poder interpretar el texto en
    }

    routers(){
        this.app.use(this.usersPath, usersRouter);
    }

    listen(){
        this.app.listen(this.port,() =>{
            console.log("Listening on port " + this.port)
        })
    }
}
module.exports = Server;