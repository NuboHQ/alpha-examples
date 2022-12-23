import express from 'express';

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.get('*', (req, res) => {
  res.json({ message: 'Express', region: process.env.NUBO_REGION });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
