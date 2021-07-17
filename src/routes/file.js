import { Router } from 'express';
import file from '../controllers/FileController';

const router = new Router();

router.post('/', file.create);

export default router;
