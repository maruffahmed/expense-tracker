"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var faker_1 = require("@faker-js/faker");
var categories = [
    { label: "Work", value: "work" },
    { label: "Personal", value: "personal" },
    { label: "Shopping", value: "shopping" },
    { label: "Others", value: "others" },
];
var seedData = Array.from({ length: 100 }, function () { return ({
    id: faker_1.faker.string.uuid(),
    date: faker_1.faker.date.recent(),
    amount: faker_1.faker.number.int({ min: 50, max: 10000 }),
    category: faker_1.faker.helpers.arrayElement(categories).value,
    description: faker_1.faker.lorem.sentence(),
    payment_method: faker_1.faker.helpers.arrayElement(["cash", "credit_card"]),
}); });
fs_1.default.writeFileSync(path_1.default.join(__dirname, "tempdata.json"), JSON.stringify(seedData, null, 2));
console.log("✅ Tempdata data generated.");
