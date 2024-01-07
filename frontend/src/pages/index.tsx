import Stats from "@/components/dashboard/stats";
import { DataTable } from "@/components/data-table/data-table";
import Layout from "@/components/layout";
// import transactions from "../data/transactions.json";
import { columns } from "@/components/dashboard/columns";
import { useGetUserTransactions } from "@/lib/transaction.lib";

export default function Dashboard() {
  const { data, isLoading } = useGetUserTransactions();
  console.log("data", data);
  return (
    <>
      <Layout>
        <main className="-mt-24 pb-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* stats */}
            <Stats />
            <h1 className="sr-only">Dashboard</h1>
            {/* Main 3 column grid */}

            <section aria-labelledby="transaction-list">
              <h2 className="sr-only" id="transaction-list">
                Transaction list
              </h2>
              <div className="overflow-hidden rounded-lg bg-white shadow min-h-[50vh]">
                <div className="p-4 md:p-6">
                  <DataTable
                    data={data?.transacrions || []}
                    columns={columns}
                    isLoading={isLoading}
                  />
                </div>
              </div>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}
