const fastify = require('fastify')({
  logger: true,
});
fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Fastify API',
    }
  }
});
fastify.register(require('./routes/items'))

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await fastify.listen(port);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};


start();