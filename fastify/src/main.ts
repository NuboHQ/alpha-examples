import Fastify from 'fastify';

const port = Number(process.env.PORT) || 5000;
const fastify = Fastify({
  logger: true,
});

fastify.get('*', () => {
  return {
    message: 'Fastify on Nubo',
  };
});

fastify.listen({ port, host: '0.0.0.0' }, () => {
  console.log(`http://localhost:${port}`);
});
