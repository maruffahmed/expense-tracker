import { useGetUserBalance } from "@/lib/user.lib";

export default function Stats() {
  const { data, isLoading } = useGetUserBalance();
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow mb-8">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {isLoading ? (
          <>
            {/* <AiOutlineLoading3Quarters
            className="animate-spin mx-auto"
            size="1.5rem"
          /> */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 bg-white/5">
              {Array.from({ length: 3 }).map((_, i) => (
                <div className="animate-pulse flex space-x-4" key={i}>
                  <div className="flex-1 space-y-9 py-1">
                    <div className="h-4 bg-slate-200 rounded"></div>
                    <div className="space-y-3">
                      <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/5">
            <div className="bg-white ">
              <p className="text-xs sm:text-sm font-medium leading-6 text-gray-900">
                Total income
              </p>
              <p className="mt-2 flex items-baseline gap-x-2">
                <span className="text-2xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                  ${data?.total_income?._sum?.amount || 0}
                </span>
              </p>
            </div>
            <div className="bg-white ">
              <p className="text-xs sm:text-sm font-medium leading-6 text-gray-900">
                Total expense
              </p>
              <p className="mt-2 flex items-baseline gap-x-2">
                <span className="text-2xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                  ${data?.total_expense?._sum?.amount || 0}
                </span>
              </p>
            </div>
            <div className="bg-white ">
              <p className="text-xs sm:text-sm font-medium leading-6 text-gray-900">
                Current balance
              </p>
              <p className="mt-2 flex items-baseline gap-x-2">
                <span className="text-2xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                  ${data?.balance}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
