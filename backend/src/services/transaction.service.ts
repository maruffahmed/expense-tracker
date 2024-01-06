import httpStatus from 'http-status';
import prisma from '../client';
import ApiError from '../utils/ApiError';

const getTotalIncomeByUserId = async (userId: string) => {
  try {
    const totalIncome = await prisma.transaction.aggregate({
      where: {
        userId: parseInt(userId),
        type: 'INCOME'
      },
      _sum: {
        amount: true
      }
    });
    return totalIncome;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Unable to calculate total income');
  }
};

const getTotalExpenseByUserId = async (userId: string) => {
  try {
    const totalExpense = await prisma.transaction.aggregate({
      where: {
        userId: parseInt(userId),
        type: 'EXPENSE'
      },
      _sum: {
        amount: true
      }
    });
    return totalExpense;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Unable to calculate total expense');
  }
};

const getTransactionByUserId = async (userId: string) => {
  try {
    const transaction = await prisma.balanceAccount.findFirst({
      where: {
        userId: parseInt(userId)
      },
      select: {
        transacrions: true
      }
    });
    return transaction;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Unable to get transaction');
  }
};

const createTransaction = async (userId: string, transaction: any) => {
  try {
    let newTransaction;
    await prisma.$transaction(async (tx) => {
      // get balance account
      const balanceAccount = await tx.balanceAccount.findFirstOrThrow({
        where: {
          userId: parseInt(userId)
        }
      });
      // create transaction
      newTransaction = await tx.transaction.create({
        data: {
          ...transaction,
          userId: parseInt(userId),
          balanceAccountId: balanceAccount?.id
        }
      });
      // update balance account
      await tx.balanceAccount.update({
        where: {
          id: balanceAccount?.id
        },
        data: {
          balance:
            transaction.type === 'INCOME'
              ? balanceAccount?.balance + transaction.amount
              : balanceAccount?.balance - transaction.amount
        }
      });
    });
    return newTransaction;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Unable to add transaction');
  }
};

export default {
  getTotalIncomeByUserId,
  getTotalExpenseByUserId,
  getTransactionByUserId,
  createTransaction
};
