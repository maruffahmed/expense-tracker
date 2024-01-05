import { CiBank, CiCreditCard1, CiDollar, CiMoneyCheck1 } from "react-icons/ci";
import { RiArrowDownDoubleFill, RiArrowUpDoubleFill } from "react-icons/ri";

export const payment_methods = [
  {
    label: "Cash",
    value: "cash",
    icon: CiMoneyCheck1,
  },
  {
    label: "Bank Transfer",
    value: "bank_transfer",
    icon: CiBank,
  },
  {
    label: "Card",
    value: "card",
    icon: CiCreditCard1,
  },
  {
    label: "Others",
    value: "other",
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
