import { ExpensesPage } from "./pages/expensesPage/ExpensesPage";
import { IncomesPage } from "./pages/incomesPage/IncomesPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { AdmpanelPage } from "./pages/admPanel/AdmpanelPage";
import { BalancePage } from "./pages/balancePage/BalancePage";
import { Login } from "./pages/loginPage/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admpanel" element={<AdmpanelPage />} />
        <Route path="/balance" element={<BalancePage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/incomes" element={<IncomesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
