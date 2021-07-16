import { Router } from 'express';
import login from '../controllers/Login';

const router = new Router();

router.post('/', login.create);

export default router;
