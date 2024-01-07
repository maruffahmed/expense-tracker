import express from 'express';
import auth from '../../middlewares/auth';
import transactionController from '../../controllers/transaction.controller';
import validate from '../../middlewares/validate';
import transactionValidation from '../../validations/transaction.validation';

const router = express.Router();

router.get('/', auth(), transactionController.transactions);
router.get('/:transactionId', auth(), transactionController.transactionById);
router.post(
  '/',
  auth(),
  validate(transactionValidation.createTransaction),
  transactionController.createTransaction
);
router.delete('/:transactionId', auth(), transactionController.deleteTransaction);
router.put(
  '/:transactionId',
  auth(),
  validate(transactionValidation.updateTransaction),
  transactionController.updateTransaction
);

export default router;

/**
 * @swagger
 * tags:
 *   name: Transaction
 *   description: Users' transactions history
 */

/**
 * @swagger
 * /transaction:
 *   get:
 *     summary: Get all transactions
 *     tags: [Transaction]
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
 *                transactions:
 *                  type: array
 *                  items:
 *                    type: object
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 */

/**
 * @swagger
 * /transaction:
 *   post:
 *     summary: Create a transactions
 *     tags: [Transaction]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - date
 *               - payment_method
 *               - category
 *               - amount
 *               - description
 *               - type
 *             properties:
 *               date:
 *                 type: string
 *                 format: date-time
 *               payment_method:
 *                 type: string
 *               category:
 *                 type: string
 *               amount:
 *                 type: number
 *               description:
 *                 type: string
 *               type:
 *                 type: string
 *             example:
 *               date: 2021-09-01T00:00:00.000Z
 *               payment_method: CASH
 *               category: Shopping
 *               amount: 100
 *               description: Buy a new phone
 *               type: EXPENSE
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                id:
 *                  type: number
 *                amount:
 *                  type: number
 *                date:
 *                  type: string
 *                  format: date-time
 *                category:
 *                  type: string
 *                description:
 *                  type: string
 *                payment_method:
 *                  type: string
 *                type:
 *                  type: string
 *                userId:
 *                  type: number
 *                balanceAccountId:
 *                  type: number
 *                createdAt:
 *                  type: string
 *                  format: date-time
 *                updatedAt:
 *                  type: string
 *                  format: date-time
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 */
