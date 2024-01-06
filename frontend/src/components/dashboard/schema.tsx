import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const transactionsSchema = z.object({
  id: z.number(),
  date: z.string(),
  amount: z.number(),
  category: z.string(),
  description: z.string(),
  payment_method: z.string(),
});

export type Transactions = z.infer<typeof transactionsSchema>;
