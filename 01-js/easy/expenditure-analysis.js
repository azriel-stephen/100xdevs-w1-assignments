/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

const transactions = [
  {
    itemName: "Item 1",
    category: "Groceries",
    price: 50.0,
    timestamp: "2023-09-19T12:00:00Z",
  },
  {
    itemName: "Item 2",
    category: "Electronics",
    price: 300.0,
    timestamp: "2023-09-19T13:00:00Z",
  },
  {
    itemName: "Item 3",
    category: "Groceries",
    price: 45.0,
    timestamp: "2023-09-19T14:00:00Z",
  },
  {
    itemName: "Item 4",
    category: "Clothing",
    price: 80.0,
    timestamp: "2023-09-19T15:00:00Z",
  },
  {
    itemName: "Item 5",
    category: "Electronics",
    price: 150.0,
    timestamp: "2023-09-19T16:00:00Z",
  },
  {
    itemName: "Item 6",
    category: "Groceries",
    price: 35.0,
    timestamp: "2023-09-19T17:00:00Z",
  },
  {
    itemName: "Item 7",
    category: "Clothing",
    price: 60.0,
    timestamp: "2023-09-19T18:00:00Z",
  },
  {
    itemName: "Item 8",
    category: "Electronics",
    price: 200.0,
    timestamp: "2023-09-19T19:00:00Z",
  },
  {
    itemName: "Item 9",
    category: "Groceries",
    price: 55.0,
    timestamp: "2023-09-19T20:00:00Z",
  },
  {
    itemName: "Item 10",
    category: "Clothing",
    price: 70.0,
    timestamp: "2023-09-19T21:00:00Z",
  },
];

function calculateTotalSpentByCategory(transactions) {
  const output = transactions.reduce((result, transaction) => {
    const { category, price } = transaction;
    if (!result[category]) {
      result[category] = price;
    } else {
      result[category] += price;
    }
    return result;
  }, {});

  const outputArray = Object.keys(output).map((key) => {
    return { [key]: output[key] };
  });

  return outputArray;
}

module.exports = calculateTotalSpentByCategory;

const expenditure = calculateTotalSpentByCategory(transactions);
console.log(expenditure);
