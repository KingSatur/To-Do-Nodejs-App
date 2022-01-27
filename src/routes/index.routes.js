import { Router } from 'express';
import todoRouter from './todo.routes';
import viewsRouter from './view.routes';

const router = Router();

router.use('/api', todoRouter);
router.use(viewsRouter);

export default router;
