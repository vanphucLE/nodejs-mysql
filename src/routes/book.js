import { Router } from 'express';
import asyncback from 'asyncback';
import * as bookController from '../controllers/book';

const api = Router();

api.get('/', asyncback(bookController.getBooks));

export default api;
