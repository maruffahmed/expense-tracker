import { ColumnDef } from "@tanstack/react-table";
import { Task } from "./schema";
import { DataTableColumnHeader } from "../data-table/data-table-column-header";
import { DataTableRowActions } from "../data-table/data-table-row-actions";
import dayjs from "dayjs";
import { Badge } from "../ui/badge";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "sl",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sl" />
    ),
    cell: ({ row }) => <div>{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="truncate font-medium">
            {dayjs(row.getValue("date")).format("DD-MM-YYYY")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span>${row.getValue("amount")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center capitalize">
          <span>{row.getValue("category")}</span>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => (
      <div className="w-[200px]">{row.getValue("description")}</div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "payment_method",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Method" />
    ),
    cell: ({ row }) => (
      <div className="w-[100px] capitalize">
        {(row.getValue("payment_method") as string).replace("_", " ")}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => {
      const type = row.getValue("type");
      return (
        <div className="w-[100px] capitalize">
          <Badge variant={type == "expense" ? "destructive" : "success"}>
            {(row.getValue("type") as string).replace("_", " ")}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
