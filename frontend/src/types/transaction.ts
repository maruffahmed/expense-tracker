export type Transaction = {
  id: number;
  amount: number;
  date: string;
  category: string;
  description: string;
  payment_method: string;
  type: string;
  userId: number;
  balanceAccountId: number;
  createdAt: string;
  updatedAt: string;
};

export type ITransactionResponse = {
  transacrions: Transaction[];
};

export type ICreateTransactionInput = {
  date: string;
  payment_method: string;
  category: string;
  amount: number;
  description: string;
  type: string;
};
