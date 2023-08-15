import { Expenses } from "./pages/expensesPage/Expenses";
import styled from "styled-components";
import {Burger} from "./components/Burger"

const AppWrapper = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  gap: 15px;
  max-width: 1400px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppWrapper>
      <Burger></Burger>
      <Expenses />
    </AppWrapper>
  );
}

export default App;
