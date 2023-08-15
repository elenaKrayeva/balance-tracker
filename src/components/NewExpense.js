import { FormForAdding } from "./FormForAdding";

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
        setModalActive={setModalActive}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};
