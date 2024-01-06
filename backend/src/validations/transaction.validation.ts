import { PaymentMethod, TransactionType } from '@prisma/client';
import Joi from 'joi';

const createTransaction = {
  body: Joi.object().keys({
    date: Joi.date().required(),
    payment_method: Joi.string()
      .required()
      .valid(
        PaymentMethod.CASH,
        PaymentMethod.BANK_TRANSFER,
        PaymentMethod.CARD,
        PaymentMethod.OTHERS
      ),
    category: Joi.string().required(),
    amount: Joi.number().required(),
    description: Joi.string().required(),
    type: Joi.string().required().valid(TransactionType.INCOME, TransactionType.EXPENSE)
  })
};

export default {
  createTransaction
};
