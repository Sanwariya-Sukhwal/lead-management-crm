function StatsCards({ stats }) {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">

      <div className="bg-white shadow rounded p-4">
        <h3 className="text-gray-500">
          Total Leads
        </h3>

        <p className="text-2xl font-bold">
          {stats.totalLeads || 0}
        </p>
      </div>

      {stats.statusStats?.map((item) => (
        <div
          key={item.status}
          className="bg-white shadow rounded p-4"
        >
          <h3 className="text-gray-500">
            {item.status}
          </h3>

          <p className="text-2xl font-bold">
            {item.count}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;