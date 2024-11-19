import React from "react";
import DataTable from "../components/DataTable";
import { useAppSelector } from "../redux/hooks";
import { Invoice } from "../types";
import { GridColDef } from "@mui/x-data-grid";

const Invoices: React.FC = () => {
  const invoices = useAppSelector((state) => state.invoices.data);

  const columns: GridColDef[] = [
    { field: "serialNumber", headerName: "Serial Number", width: 150 },
    { field: "customerName", headerName: "Customer Name", width: 200 },
    { field: "productName", headerName: "Product Name", width: 200 },
    { field: "qty", headerName: "Qty", width: 100 },
    { field: "tax", headerName: "Tax", width: 100 },
    { field: "totalAmount", headerName: "Total Amount", width: 150 },
    { field: "date", headerName: "Date", width: 200 },
  ];

  return (
    <DataTable
      rows={invoices}
      columns={columns}
      getRowId={(row) => row.id} // Ensure every invoice has a unique 'id'
    />
  );
};

export default Invoices;
