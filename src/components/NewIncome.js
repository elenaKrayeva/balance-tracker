import { FormForAdding } from "./FormForAdding";
import { IncomesDropdown1 } from "../mocks";

export const NewIncome = ({onAddIncome, setModalActive}) => {

  const saveExpenseDataHandler = (expenseFormData) => {
    const incomesData = {
      ...expenseFormData,
      id: Date.now(),
      isEdditing: false,
    };
    onAddIncome(incomesData);
  };

  return (
    <div>
      <FormForAdding
        options={IncomesDropdown1}
        setModalActive={setModalActive}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};