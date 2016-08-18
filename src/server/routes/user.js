'use strict';

import express from 'express';
import user from './../controllers/user';

const router = express.Router();

const userController = new user();

router.get('/:id', userController.getById);


export default router;