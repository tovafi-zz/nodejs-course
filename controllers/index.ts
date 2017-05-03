import {Router} from 'express';

export const apiRouter = Router();

apiRouter.use('/search', searchRouter);