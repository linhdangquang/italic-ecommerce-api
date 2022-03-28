import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes';

const app = express();
const PORT = 5000;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use(router.Home);
app.use(router.Product);
app.use(router.Category);
app.use(router.User);

mongoose.connect('mongodb://localhost:27017/we16308');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
