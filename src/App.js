import './App.css';
import React from 'react';
import ExpenseItem from './componants/expenseItem';

export default function App() {
  let expenses = [
    {
      id: 1,
      title: "House rent",
      amount: 4000,
      date: new Date(2021, 2, 12)
    },
    {
      id: 2,
      title: "electricity-bill",
      amount: 250,
      date: new Date(2021, 3, 23)
    },
    {
      id: 3,
      title: "School Fee",
      amount: 1250,
      date: new Date(2021, 4, 6)
    },
    {
      id: 4,
      title: "Books",
      amount: 250,
      date: new Date(2021, 5, 8)
    },
    {
      id: 5,
      title: "Food",
      amount: 150,
      date: new Date(2021, 6, 11)
    },
    {
      id: 6,
      title: "Fruits",
      amount: 250,
      date: new Date(2021, 7, 19)
    },
    {
      id: 7,
      title: "Clothes",
      amount: 2250,
      date: new Date(2021, 8, 8)
    },
  ]

  return (
    <React.Fragment>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}>
      </ExpenseItem>
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}>
      </ExpenseItem>
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}>
      </ExpenseItem>
      <ExpenseItem
       date={expenses[3].date}
       title={expenses[3].title}
       amount={expenses[3].amount}>
      </ExpenseItem>
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}>
      </ExpenseItem>
      <ExpenseItem
        date={expenses[4].date}
        title={expenses[4].title}
        amount={expenses[4].amount}>
      </ExpenseItem>
      <ExpenseItem
         date={expenses[5].date}
         title={expenses[5].title}
         amount={expenses[5].amount}>
      </ExpenseItem>
    </React.Fragment>
  );
}


