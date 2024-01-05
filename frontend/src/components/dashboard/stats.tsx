const stats = [
  { name: "Total income", value: "$405" },
  { name: "Total expense", value: "$3.65" },
  { name: "Current balance", value: "$3" },
];

export default function Stats() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow mb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/5">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white px-4 py-6 sm:px-6 lg:px-8">
              <p className="text-xs sm:text-sm font-medium leading-6 text-gray-900">
                {stat.name}
              </p>
              <p className="mt-2 flex items-baseline gap-x-2">
                <span className="text-2xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
