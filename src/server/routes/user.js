'use strict';

import express from 'express';
import user from './../controllers/user';

const router = express.Router();

const userController = new user();

/**
 * @api {get} /api/user/:id Request User information
 * @apiName GetUserById
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {Number} id Users unique Id.
 * @apiSuccess {String} name Users name.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "name": "Patrick"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */


router.get('/:id', userController.getById);


export default router;