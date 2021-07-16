import { Router } from 'express';
import StudentController from '../controllers/StudentController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', StudentController.list);
router.post('/', loginRequired, StudentController.create);
router.put('/:id', loginRequired, StudentController.update);
router.get('/:id', StudentController.fromID);
router.delete('/:id', loginRequired, StudentController.delete);

export default router;
