import httpStatus from 'http-status';
import prisma from '../client';
import ApiError from '../utils/ApiError';

const getBalanceByUserId = async (userId: string) => {
  try {
    const balance = await prisma.balanceAccount.findFirstOrThrow({
      where: {
        userId: parseInt(userId)
      }
    });
    return balance;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No Balance Account found');
  }
};

const createBalanceAccount = async (userId: string) => {
  try {
    const balance = await prisma.balanceAccount.create({
      data: {
        balance: 0,
        userId: parseInt(userId)
      }
    });
    return balance;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Unable to create balance account');
  }
};

export default {
  getBalanceByUserId,
  createBalanceAccount
};
