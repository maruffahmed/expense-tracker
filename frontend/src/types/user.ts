export type IUser = {
  id: number;
  name: string;
  email: string;
  role: string;
  isEmailVerified: boolean;
};

export interface Sum {
  amount: null;
}

export interface TotalIncome {
  _sum: Sum;
}

export interface TotalExpense {
  _sum: Sum;
}

export type IUserbalance = {
  balance: number;
  total_income: TotalIncome;
  total_expense: TotalExpense;
};
