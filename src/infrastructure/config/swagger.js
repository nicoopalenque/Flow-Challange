exports.swaggerOptions = {
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