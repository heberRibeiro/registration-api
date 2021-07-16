import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', loginRequired, userController.list);
router.post('/', userController.create);
router.get('/', loginRequired, userController.fromID);
router.put('/', loginRequired, userController.update);

export default router;
