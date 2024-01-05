import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";
import { fileURLToPath } from "url";

const payment_methods = [
  {
    label: "Cash",
    value: "cash",
  },
  {
    label: "Bank Transfer",
    value: "bank_transfer",
  },
  {
    label: "Card",
    value: "card",
  },
  {
    label: "Others",
    value: "other",
  },
];

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const categories = [
  { label: "Work", value: "work" },
  { label: "Personal", value: "personal" },
  { label: "Shopping", value: "shopping" },
  { label: "Others", value: "others" },
];

const seedData = Array.from({ length: 100 }, () => ({
  id: faker.string.uuid(),
  date: faker.date.recent(),
  amount: faker.number.int({ min: 50, max: 10000 }),
  category: faker.helpers.arrayElement(categories).value,
  description: faker.lorem.sentence(),
  payment_method: faker.helpers.arrayElement(payment_methods).value,
}));

fs.writeFileSync(
  path.join(__dirname, "tempdata.json"),
  JSON.stringify(seedData, null, 2)
);

console.log("✅ Tempdata data generated.");
