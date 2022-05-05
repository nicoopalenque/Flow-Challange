const express = require('express');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.basePath = '/v1';

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  middlewares() {
        
    this.app.use(cors());
        
    this.app.use(express.json());

    const swaggerOptions = {
      swaggerDefinition: {
        info: {
          title: 'Teco challenge',
          description: 'Teco Challenge',
          contact: {
            name: 'Rene Nicolas Palenque'
          },
          servers: ['http://localhost:3000']
        }
      },
      apis: ['src/common/routes/*.js']
    };

    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  }

  routes() {
    this.app.use(this.basePath, require('../common/routes/location'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running in PORT ${this.port}`);
    });
  }

}

module.exports = Server;