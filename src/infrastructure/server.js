const express = require('express');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');

const { swaggerOptions } = require('./config/swagger');
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

    this.app.use(morgan('dev'));
    
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