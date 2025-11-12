import React from "react";

const FollowerCard = ({ data, onRemove }) => {
  const { uid, fullname, twubric, join_date } = data;
  const joinDate = new Date(join_date * 1000).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }); 
   const stats = [
    { label: "Friends", value: twubric.friends },
    { label: "Influence", value: twubric.influence },
    { label: "Chirpiness", value: twubric.chirpiness },
  ];

  return (
    <div className="border border-secondary rounded-md text-sm w-full">
      <div className="flex justify-between border-b border-secondary px-2 py-2 font-semibold">
        <span>{fullname}</span>
        <span>{twubric.total}</span>
      </div>

      <div className="grid grid-cols-3 text-center border-b border-secondary">
      {stats.map((stat, index) => (
        <div key={index} className={`p-2 ${
            index !== stats.length - 1 ? "border-r border-secondary" : ""
          } `}>
        <p className="font-medium">{stat.value}</p>
        <p>{stat.label}</p>
      </div>
      ))}
       
      </div>

      <div className="flex justify-between items-center p-2">
        <p>{joinDate}</p>
        <button
          onClick={() => onRemove(uid)}
          className="text-primary  hover:underline font-semibold"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FollowerCard;
