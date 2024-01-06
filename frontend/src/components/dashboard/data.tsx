import { CiBank, CiCreditCard1, CiDollar, CiMoneyCheck1 } from "react-icons/ci";
import { RiArrowDownDoubleFill, RiArrowUpDoubleFill } from "react-icons/ri";

export const payment_methods = [
  {
    label: "Cash",
    value: "CASH",
    icon: CiMoneyCheck1,
  },
  {
    label: "Bank Transfer",
    value: "BANK_TRANSFER",
    icon: CiBank,
  },
  {
    label: "Card",
    value: "CARD",
    icon: CiCreditCard1,
  },
  {
    label: "Others",
    value: "OTHERS",
    icon: CiDollar,
  },
];

export const transaction_types = [
  {
    label: "Expense",
    value: "expense",
    icon: RiArrowUpDoubleFill,
  },
  {
    label: "Income",
    value: "income",
    icon: RiArrowDownDoubleFill,
  },
];
