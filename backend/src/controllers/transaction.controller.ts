import { User } from '@prisma/client';
import catchAsync from '../utils/catchAsync';
import httpStatus from 'http-status';
import transactionService from '../services/transaction.service';

const transactions = catchAsync(async (req, res) => {
  const user = req.user as User;
  const transactions = await transactionService.getTransactionByUserId(user.id.toString());
  res.status(httpStatus.OK).send(transactions);
});

const createTransaction = catchAsync(async (req, res) => {
  const user = req.user as User;
  const newTransaction = req.body;
  const transaction = await transactionService.createTransaction(
    user.id.toString(),
    newTransaction
  );
  res.status(httpStatus.OK).send(transaction);
});

const deleteTransaction = catchAsync(async (req, res) => {
  const user = req.user as User;
  const transactionId = req.params.transactionId;
  const transaction = await transactionService.deleteTransaction(user.id.toString(), transactionId);
  res.status(httpStatus.OK).send(transaction);
});

const updateTransaction = catchAsync(async (req, res) => {
  const user = req.user as User;
  const transactionId = req.params.transactionId;
  const updateTransaction = req.body;
  const transaction = await transactionService.updateTransaction(
    user.id.toString(),
    transactionId,
    updateTransaction
  );
  res.status(httpStatus.OK).send(transaction);
});

export default {
  transactions,
  createTransaction,
  deleteTransaction,
  updateTransaction
};
