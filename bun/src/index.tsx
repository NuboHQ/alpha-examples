import { Hono } from 'hono';
import { serveStatic } from 'hono/serve-static.bun';
import Page from './components/Page';

const port = parseInt(process.env.PORT) || 5000;
const app = new Hono();

app.use('/favicon.ico', serveStatic({ path: './public/favicon.ico' }));
app.use('/global.css', serveStatic({ path: './public/global.css' }));
app.use('/bun.svg', serveStatic({ path: './public/bun.svg' }));

app.get('/hello', (c) => {
  return c.json({ message: 'Hello from Bun', region: process.env.NUBO_REGION });
});
app.get('*', (c) => {
  return c.html(<Page region={process.env.NUBO_REGION} />);
});

console.log(`Running at http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
