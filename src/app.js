import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use(router.Home);
app.use(router.Product);
app.use(router.Category);
app.use(router.Auth);
app.use(router.Order);
app.use(router.HeroBanner);

mongoose.connect(process.env.MONGODB_URL)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
