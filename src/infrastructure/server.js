const express = require('express')
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.basePath = '/v1';

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    middlewares(){
        // Cors
        this.app.use(cors());
        // JSON
        this.app.use(express.json());
        // Public folder
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.basePath, require('../common/routes/location'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running in PORT ${this.port}`)
        });
    }

}

module.exports = Server;