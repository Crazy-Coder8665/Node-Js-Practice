const swaggerDefinition = {
  info: {
    title: 'User Authentication Authorization',
    version: '0.0.1',
    description: 'A project that provides you with facility of user management on autherization bases',
  },
  host: `http://localhost:3000`,
  basePath: '/api/users',
};

const swaggerOptions = {
  swaggerDefinition,
  apis: ['../routes/*.js']
};

export default swaggerOptions;