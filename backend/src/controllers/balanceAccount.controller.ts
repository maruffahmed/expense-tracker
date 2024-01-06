import { User } from '@prisma/client';
import balanceService from '../services/balance.service';
import catchAsync from '../utils/catchAsync';
import httpStatus from 'http-status';
import transactionService from '../services/transaction.service';

const balance = catchAsync(async (req, res) => {
  const user = req.user as User;
  const balance = await balanceService.getBalanceByUserId(user.id.toString());
  const totalIncome = await transactionService.getTotalIncomeByUserId(user.id.toString());
  const totalExpense = await transactionService.getTotalExpenseByUserId(user.id.toString());
  res.status(httpStatus.OK).send({
    balance: balance.balance,
    total_income: totalIncome,
    total_expense: totalExpense
  });
});

export default {
  balance
};
