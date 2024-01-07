import fs from 'fs';
import path from 'path';
import { faker } from '@faker-js/faker';

const payment_methods = [
  {
    label: 'Cash',
    value: 'CASH'
  },
  {
    label: 'Bank Transfer',
    value: 'BANK_TRANSFER'
  },
  {
    label: 'Card',
    value: 'CARD'
  },
  {
    label: 'Others',
    value: 'OTHERS'
  }
];

const categories = [
  { label: 'Work', value: 'work' },
  { label: 'Personal', value: 'personal' },
  { label: 'Shopping', value: 'shopping' },
  { label: 'Others', value: 'others' }
];

const transactions = Array.from({ length: 100 }, () => ({
  id: faker.string.uuid(),
  date: faker.date.recent(),
  amount: faker.number.int({ min: 50, max: 10000 }),
  category: faker.helpers.arrayElement(categories).value,
  description: faker.lorem.sentence(),
  type: faker.helpers.arrayElement(['INCOME', 'EXPENSE']),
  payment_method: faker.helpers.arrayElement(payment_methods).value
}));

fs.writeFileSync(path.join(__dirname, 'transactions.json'), JSON.stringify(transactions, null, 2));

console.log('✅ Transactions data generated.');
