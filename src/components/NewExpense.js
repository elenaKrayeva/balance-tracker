/* import { FormForAdding } from "./FormForAdding";
import { ExpenseDropdown1 } from "../mocks";

export const NewExpense = ({onAddExpense, setModalActive}) => {

  const saveExpenseDataHandler = (expenseFormData) => {
    const expenseData = {
      ...expenseFormData,
      id: Date.now(),
      isEdditing: false,
    };
    onAddExpense(expenseData);
  };

  return (
    <div>
      <FormForAdding
        options={ExpenseDropdown1}
        setModalActive={setModalActive}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
}; */
