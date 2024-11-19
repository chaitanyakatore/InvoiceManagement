import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface DataTableProps<T> {
  rows: T[];
  columns: GridColDef[]; // Allow columns to be passed dynamically
  getRowId: (row: T) => string | number; // Function to get a unique row ID
}

const DataTable = <T,>({
  rows,
  columns,
  getRowId,
}: DataTableProps<T>): JSX.Element => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} getRowId={getRowId} />
    </div>
  );
};

export default DataTable;
