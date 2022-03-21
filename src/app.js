import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes';
import checkAuth from './middlewares/checkAuth.middleware';

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
  const startMs = Date.now();
  next();
  const endMs = Date.now() - startMs;
  console.log(`${req.method} ${req.baseUrl}${req.url}  ${res.statusCode} ${endMs}ms`);
});

app.use(express.json());
app.use(cors());

app.use(router.Home);
app.use(checkAuth, router.Product);
app.use(router.Category);

mongoose.connect('mongodb://localhost:27017/we16308');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
