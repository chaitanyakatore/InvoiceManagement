import React from "react";
import DataTable from "../components/DataTable";
import { useAppSelector } from "../redux/hooks";
import { Product } from "../types";

const Products: React.FC = () => {
  const products = useAppSelector((state) => state.products.data);

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "quantity", headerName: "Quantity", width: 150 },
    { field: "unitPrice", headerName: "Unit Price", width: 150 },
    { field: "tax", headerName: "Tax", width: 100 },
    { field: "priceWithTax", headerName: "Price with Tax", width: 200 },
  ];

  // Assume "name" is unique for each product
  const getRowId = (row: Product) => row.name;

  return <DataTable rows={products} columns={columns} getRowId={getRowId} />;
};

export default Products;
