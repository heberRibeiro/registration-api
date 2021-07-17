import { Router } from 'express';
import file from '../controllers/FileController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, file.create);

export default router;
