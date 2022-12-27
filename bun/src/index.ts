import { Hono } from 'hono';
import { serveStatic } from 'hono/serve-static.bun';

const port = parseInt(process.env.PORT) || 5000;
const app = new Hono();

app.use('/favicon.ico', serveStatic({ path: './public/favicon.ico' }));
app.use('/global.css', serveStatic({ path: './public/global.css' }));
app.use('/bun.svg', serveStatic({ path: './public/bun.svg' }));

app.get('/hello', (c) => {
  return c.json({ message: 'Hello from Bun', region: process.env.NUBO_REGION });
});

app.get('*', (c) => {
  return c.html(`<html>
      <head>
        <link rel="stylesheet" href="global.css" />
        <title>Bun on Nubo</title>
      </head>

      <body>
        <div class="box">
          <div>
            <img class="bun-logo" src="bun.svg" alt="Bun" />

            <h1>Bun on Nubo</h1>

            <p>Region: ${process.env.NUBO_REGION}</p>
          </div>
        </div>
      </body>
    </html>`);
});

console.log(`Running at http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
