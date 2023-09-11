import { ExpensesPage } from "./pages/expensesPage/ExpensesPage";
import { IncomesPage } from "./pages/incomesPage/IncomesPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { AdmpanelPage } from "./pages/admPanel/AdmpanelPage";
import { BalancePage } from "./pages/balancePage/BalancePage";
import { Login } from "./pages/loginPage/Login";
import { Register } from "./pages/registerPage/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admpanel"
          element={
            <PrivateRoute>
              <AdmpanelPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/balance"
          element={
            <PrivateRoute>
              <BalancePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/expenses"
          element={
            <PrivateRoute>
              <ExpensesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/incomes"
          element={
            <PrivateRoute>
              <IncomesPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
