import { Router } from 'express';
import {
  createAuthor,
  deleteAuthor,
  getAllAuthor,
  getAuthor,
  updateAuthor,
} from '../../controllers/author.controller';

const app: Router = Router();

app.post('/create', createAuthor);
app.get('/get', getAllAuthor);
app.get('/get/:authorId', getAuthor);
app.patch('/update/:authorId', updateAuthor);
app.delete('/delete/:authorId', deleteAuthor);

export const authorRouter = app;
