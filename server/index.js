import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// ROUTES
import postRouter from './routes/posts';

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.use('/posts', postRouter);

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`)))
  .catch((error) => console.log('error', error.message))

  mongoose.set('useFindAndModify', false);