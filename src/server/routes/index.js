import express from 'express';
import account from './account';
import memo from './memo';
import map from './map';

const router = express.Router();
router.use('/account', account);
router.use('/memo', memo);
router.use('/map', map);

export default router;