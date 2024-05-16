import React from "react";
import DataTable, {TableColumn} from "react-data-table-component";
import {Sale} from "../types";
import {format, parseISO} from "date-fns";

interface SalesTableProps {
  data: Sale[];
}

const SalesTable: React.FC<SalesTableProps> = ({data}) => {
  const columns: TableColumn<Sale>[] = [
    {
      name: "Week Ending",
      selector: (row) => format(parseISO(row.weekEnding), "yyyy-MM-dd"),
      sortable: true,
    },
    {
      name: "Retail Sales",
      selector: (row) => row.retailSales.toString(),
      sortable: true,
      right: true,
    },
    {
      name: "Wholesale Sales",
      selector: (row) => row.wholesaleSales.toString(),
      sortable: true,
      right: true,
    },
    {
      name: "Units Sold",
      selector: (row) => row.unitsSold.toString(),
      sortable: true,
      right: true,
    },
    {
      name: "Retailer Margin",
      selector: (row) => row.retailerMargin.toString(),
      sortable: true,
      right: true,
    },
  ];

  return (
      <DataTable
          title="Sales Data"
          columns={columns}
          data={data}
          pagination
          highlightOnHover
          striped
      />
  );
};

export default SalesTable;
