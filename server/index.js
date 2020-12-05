import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// ROUTES
import postRouter from './routes/posts';

const DB_CONFIG = 'mongodb+srv://covy:password1!@cluster0.okbza.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.use('/posts', postRouter);

mongoose
  .connect(DB_CONFIG, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log('error', error.message))

  mongoose.set('useFindAndModify', false);