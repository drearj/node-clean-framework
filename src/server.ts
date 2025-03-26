import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`[CORE] Node Clean Framework Initialized on http://localhost:${PORT}`);
});
