import { Router } from 'express';
const router = Router();

import { catchAsyncErrors } from '../middlewares/errors.js';
import postController from '../controllers/postController.js';

//GET
router.get('/', postController.findAll);

//POST
router.post('/', catchAsyncErrors(postController.create));

export default router;
