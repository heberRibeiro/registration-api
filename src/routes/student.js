import { Router } from 'express';
import StudentController from '../controllers/StudentController';

const router = new Router();

router.get('/', StudentController.list);

export default router;
