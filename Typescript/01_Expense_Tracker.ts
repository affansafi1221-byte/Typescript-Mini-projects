
type Expense = {
  title: string;
  amount: number;
};

const expenses: Expense[] = [
  { title: "Transport", amount: 200 },
  { title: "Lunch", amount: 350 },
  { title: "Internet", amount: 500 }
];

function calculateTotal(items: Expense[]): number {
  return items.reduce((total, item) => total + item.amount, 0);
}

console.log("My Expenses:");

expenses.forEach((expense) => {
  console.log(`${expense.title}: Rs. ${expense.amount}`);
});

console.log("Total: Rs.", calculateTotal(expenses));
