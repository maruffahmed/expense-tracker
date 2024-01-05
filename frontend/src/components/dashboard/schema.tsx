import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  date: z.string(),
  amount: z.number(),
  category: z.string(),
  description: z.string(),
  payment_method: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
