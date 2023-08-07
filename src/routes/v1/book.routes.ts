import { Router } from 'express';
import {
  createBook,
  deleteBook,
  getAllBook,
  getBook,
  updateBook,
} from '../../controllers/book.controller';

const app: Router = Router();

app.post('/create', createBook);
app.get('/get', getAllBook);
app.get('/get/:bookId', getBook);
app.patch('/update/:bookId', updateBook);
app.delete('/delete/:bookId', deleteBook);

export const bookRouter = app;
