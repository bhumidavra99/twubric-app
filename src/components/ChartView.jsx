import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

const ChartView = ({ followers }) => {
  const data = followers.map((f) => {
    const cleanName = f.fullname.replace(/^Sample\s+/i, "").trim();
    return {
      name: cleanName.length > 12 ? cleanName.slice(0, 12) + "…" : cleanName,
      fullname: cleanName,
      total: f.twubric.total,
    };
  });

  return (
    <div className="w-full h-96 border border-secondary rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-3 text-center">
        Twubric Score Visualization
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10 }}
            angle={-45}
            textAnchor="end"
            interval={0}
          />
          <YAxis />
          <Tooltip
            cursor={{ fill: "transparent" }} 
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #EB8844",
              borderRadius: "6px",
              fontSize: "13px",
            }}
            formatter={(value, key, props) => [
              value,
              "Twubric Score of " + props.payload.fullname,
            ]}
          />
          <Bar
            dataKey="total"
            fill="#EB8844"
            radius={[4, 4, 0, 0]}
            barSize={40}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} cursor="default" /> 
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartView;
