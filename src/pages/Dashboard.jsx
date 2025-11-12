import React, { useEffect, useState } from "react";
import SortBar from "../components/SortBar";
import DateFilter from "../components/DateFilter";
import FollowerCard from "../components/FollowerCard";
import twubricData from "../data/twubric.json";
import ChartView from "../components/ChartView";

const Dashboard = () => {
  const [followers, setFollowers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [chartMode, setChartMode] = useState(false);

  useEffect(() => {
    setFollowers(twubricData);
    setFiltered(twubricData);
  }, []);

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);

    const sorted = [...filtered].sort((a, b) => {
      const valA = a.twubric[field];
      const valB = b.twubric[field];
      return order === "asc" ? valA - valB : valB - valA;
    });
    setFiltered(sorted);
  };

  const handleDateFilter = (start, end) => {
    if (!start || !end) {
      setFiltered(followers);
      return;
    }
    const filteredData = followers.filter((f) => {
      const joinDate = new Date(f.join_date);
      return joinDate >= start && joinDate <= end;
    });
    setFiltered(filteredData);
  };

  const handleRemove = (uid) => {
    const updated = filtered.filter((f) => f.uid !== uid);
    setFiltered(updated);
    setFollowers(updated);
  };

  return (
    <div className="max-w-7xl px-4 py-8 lg:p-8 mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center pb-3 border-b border-secondary">
        Twubric Dashboard
      </h1>

      <div className="mb-6">
        <SortBar
          onSort={handleSort}
          sortField={sortField}
          sortOrder={sortOrder}
        />
        <DateFilter onFilter={handleDateFilter} />
      </div>

      <div className="flex flex-col items-center md:flex-row justify-between mb-4">
        <h1 className="text-xl font-semibold">
          {chartMode ? "Twubric Score Chart" : "Follower List"}
        </h1>
        <button
          onClick={() => setChartMode(!chartMode)}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition"
        >
          {chartMode ? "Show Grid View" : "Show Chart View"}
        </button>
      </div>

      {chartMode ? (
        <ChartView followers={filtered} />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((f) => (
              <FollowerCard key={f.uid} data={f} onRemove={handleRemove} />
            ))
          ) : (
            <p className="text-center text-xl mt-10 col-span-full">
              No followers found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
