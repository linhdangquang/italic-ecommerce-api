import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
  res.send(`
    <h1 style="color: red">Hello World</h1>
  `);
});

export default router;
