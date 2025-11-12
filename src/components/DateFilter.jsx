import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateField = ({ label, selected, onChange, minDate, maxDate, selectsStart, selectsEnd, startDate, endDate, borderRight }) => (
  <div
    className={`flex flex-col items-center justify-center p-3 ${
      borderRight ? "border-r border-secondary" : ""
    }`}
  >
    <label className="font-semibold mb-1">{label}</label>
    <DatePicker
      selected={selected}
      onChange={onChange}
      placeholderText="↓"
      className="w-32 text-center border-none focus:outline-none cursor-pointer"
      minDate={minDate}
      maxDate={maxDate}
      selectsStart={selectsStart}
      selectsEnd={selectsEnd}
      startDate={startDate}
      endDate={endDate}
    />
  </div>
);

const DateFilter = ({ onFilter }) => {
  const [start, setStart] = React.useState(null);
  const [end, setEnd] = React.useState(null);

  React.useEffect(() => {
    onFilter(start, end);
  }, [start, end]);

  return (
    <div className="w-full mt-5">
      <p className="font-semibold text-xl mb-1">Joined Twitter between</p>

      <div className="grid grid-cols-2 border border-secondary rounded-lg">
        <DateField
          label="Start Date"
          selected={start}
          onChange={(date) => {
            setStart(date);
            if (end && date > end) setEnd(null);
          }}
          maxDate={new Date()}
          selectsStart
          startDate={start}
          endDate={end}
          borderRight={true}
        />

        <DateField
          label="End Date"
          selected={end}
          onChange={(date) => setEnd(date)}
          minDate={start}
          maxDate={new Date()}
          selectsEnd
          startDate={start}
          endDate={end}
        />
      </div>
    </div>
  );
};

export default DateFilter;
