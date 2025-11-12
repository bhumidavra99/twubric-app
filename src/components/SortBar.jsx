import React from "react";

const SortBar = ({ onSort, sortField, sortOrder }) => {
  const criteria = [
    { key: "total", label: "Twubric Score" },
    { key: "friends", label: "Friends" },
    { key: "influence", label: "Influence" },
    { key: "chirpiness", label: "Chirpiness" },
  ];

  return (
    <div className="w-full">
      <p className="font-semibold text-xl mb-1">Sort By</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-secondary rounded-lg">
        {criteria.map((item, index) => (
          <button
            key={index}
            onClick={() => onSort(item.key)}
            className={`py-3 text-base font-medium lg:border-r border-secondary last:border-r-0
              ${
                sortField === item.key
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-primary/10"
              }`}
          >
            {item.label}
            {sortField === item.key ? (sortOrder === "asc" ? " ↑" : " ↓") : ""}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortBar;
