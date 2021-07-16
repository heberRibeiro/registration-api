import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.create);
router.get('/', userController.list);
router.get('/:id', userController.fromID);
router.put('/:id', userController.update);

export default router;
