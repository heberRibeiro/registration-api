import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.create);
router.get('/', loginRequired, userController.list);
router.get('/:id', userController.fromID);
router.put('/:id', userController.update);

export default router;
