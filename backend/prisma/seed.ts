import fakeTransactions from '../data/transactions.json';
import { PaymentMethod, PrismaClient, TransactionType } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    const testUser = await prisma.user.create({
      data: {
        email: 'test@gmail.com',
        password: '$2a$08$W0qSTH37vLYUif47/1qv1Oe4.o.wKHkPVe4STRcuFq9CuzRO9qw1O',
        name: 'Test User',
        role: 'USER',
        isEmailVerified: true,
        BalanceAccount: {
          create: {
            balance: 1000000
          }
        }
      },
      select: {
        id: true,
        BalanceAccount: true
      }
    });

    for (const transaction of fakeTransactions) {
      await prisma.transaction.create({
        data: {
          amount: transaction.amount,
          category: transaction.category,
          date: transaction.date,
          description: transaction.description,
          payment_method: transaction.payment_method as PaymentMethod,
          type: transaction.type as TransactionType,
          balanceAccountId: testUser.BalanceAccount?.id as number,
          userId: testUser.id
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
