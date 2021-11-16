import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
  // Approccio multi state
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  // Approccio single state
  // const [userInput, setUserInput] = useState({
  //   inputTitle: "",
  //   inputAmount: "",
  //   inputDate: "",
  // });

  // Questi due approcci possono essere usati ugualmente ma ora preferiamo usare il multi state

  const titleChangeHandler = (event) => {
    // Approccio multi state
    setInputTitle(event.target.value)

    // Approccio single state
    // Metodo 1:
    // setUserInput({ // Questo modo può essere usato ma potremmo avere problemi in quanto prendiamo il valore iniziale della variabile e non l'ultimo assegnato
    //   ...userInput,
    //   inputTitle: event.target.value
    // });
    // Metodo 2:
    // setUserInput((prevState) => { // In questo modo saremo sicuri che in prevState ci sarà l'ultimo valore assegnato e non quello iniziale
    //   return {
    //     ...prevState,
    //     inputTitle: event.target.value
    //   }
    // });
  };

  const amountChangeHandler = (event) => {
    // Approccio multi state
    setInputAmount(event.target.value)
  };

  const dateChangeHandler = (event) => {
    // Approccio multi state
    setInputDate(event.target.value)
  };

  const submimtHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate)
    };

    props.onSaveExpenseData(expenseData);

    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submimtHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={inputTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;