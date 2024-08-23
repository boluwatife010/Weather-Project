import {Router} from 'express';
import { getCityHandler } from '../controllers/weather.controller';
const router = Router();
router.get('/:city',getCityHandler);
export default router;