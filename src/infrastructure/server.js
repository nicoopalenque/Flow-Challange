const express = require('express')
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('../../config/swagger.json');

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
        
        this.app.use(cors());
        
        this.app.use(express.json());
        
        this.app.use(
            '/api-docs',
            swaggerUi.serve, 
            swaggerUi.setup(swaggerConfig)
          );
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