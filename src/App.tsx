import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Invoices from "./pages/Invoices";
import Products from "./pages/Products";
import Customers from "./pages/Customers";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Invoice Management</h1>
        <Invoices />
        <Products />
        <Customers />
      </div>
    </Provider>
  );
};

export default App;
