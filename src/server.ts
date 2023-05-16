import fastify from 'fastify';

const PORT = 3333;
const app = fastify();

app.listen({
  port: PORT,
}).then(() => {
  console.log(`Listening at port ${PORT}`)
})