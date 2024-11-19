import React from "react";
import DataTable from "../components/DataTable";
import { useAppSelector } from "../redux/hooks";
import { Customer } from "../types";

const Customers: React.FC = () => {
  const customers = useAppSelector((state) => state.customers.data);

  const columns = [
    { field: "name", headerName: "Customer Name", width: 200 },
    { field: "phoneNumber", headerName: "Phone Number", width: 200 },
    {
      field: "totalPurchaseAmount",
      headerName: "Total Purchase Amount",
      width: 200,
    },
  ];

  return (
    <DataTable
      rows={customers}
      columns={columns}
      getRowId={(row: Customer) => row.id} // Pass the `id` field to `getRowId`
    />
  );
};

export default Customers;
