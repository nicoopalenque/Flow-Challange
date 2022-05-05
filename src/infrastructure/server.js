const express = require('express');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { SERVER_PORT, HOST, ROOT_PATH } = require('../common/constants/constants');
class Server {

  constructor() {
    this.app = express();
    this.port = SERVER_PORT;
    this.basePath = `${ROOT_PATH}`;

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
    this.app.use(this.basePath, require('../common/routes/weather'));
    this.app.use(this.basePath, require('../common/routes/forecast'));
  }

  listen() {
    this.app.listen(this.port, `${HOST}`, () => {
      console.log(`Server running in PORT :: http://${HOST}:${this.port}`);
    });
  }

}

module.exports = Server;