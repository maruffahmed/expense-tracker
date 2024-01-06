import express from 'express';
import auth from '../../middlewares/auth';
import balanceAccountController from '../../controllers/balanceAccount.controller';

const router = express.Router();

router.get('/balance', auth(), balanceAccountController.balance);

export default router;

/**
 * @swagger
 * tags:
 *   name: Balance
 *   description: Users' Balance Account
 */
/**
 * @swagger
 * /account/balance:
 *   get:
 *     summary: Get user's account balance
 *     tags: [Balance]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 balance:
 *                  type: number
 *                 total_income:
 *                  type: object
 *                  properties:
 *                   _sum:
 *                    type: number
 *                 total_expense:
 *                  type: object
 *                  properties:
 *                    _sum:
 *                     type: number
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 */
