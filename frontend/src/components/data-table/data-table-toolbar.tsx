"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { payment_methods, transaction_types } from "../dashboard/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import AddExpenseDialog from "../dashboard/add-expense-dialog";
import AddIncomeDialog from "../dashboard/add-income-dialog";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:space-x-2">
        <Input
          placeholder="Filter expense..."
          value={
            (table.getColumn("description")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("description")?.setFilterValue(event.target.value)
          }
          className="h-8 w-full md:w-[150px] lg:w-[250px]"
        />
        <div className="flex gap-2">
          {table.getColumn("payment_method") && (
            <DataTableFacetedFilter
              column={table.getColumn("payment_method")}
              title="Payment Method"
              options={payment_methods}
            />
          )}
          {table.getColumn("type") && (
            <DataTableFacetedFilter
              column={table.getColumn("type")}
              title="Type"
              options={transaction_types}
            />
          )}
          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 lg:px-3"
            >
              Reset
              <Cross2Icon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <AddIncomeDialog />
        <AddExpenseDialog />
      </div>
    </div>
  );
}
