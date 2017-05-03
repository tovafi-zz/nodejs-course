import {Router} from 'express';
import {SearchFactory} from './search.controller';
export const router = Router();
const controller = new SearchFactory();
router.get('/:searchParam', controller.get);
