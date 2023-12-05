import React, { useState } from "react";
import quarterData from "./api/quarterData";

const Dashboard = () => {
  const [selectedQuarter, setSelectedQuarter] = useState("Q1");
  const data = quarterData[selectedQuarter];

  const handleQuarterChange = (event) => {
    setSelectedQuarter(event.target.value);
  };

  return (
    <div>
      <h1>SBI Financial Dashboard</h1>
      <label>Select Quarter:</label>
      <select value={selectedQuarter} onChange={handleQuarterChange}>
        <option value="Q1">Quarter 1(Dec 22)</option>
        <option value="Q2">Quarter 2(Mar 23)</option>
        <option value="Q3">Quarter 3(June 23)</option>
        <option value="Q4">Quarter 4(Sep 23)</option>
      </select>
      <div>
        <div>Revenue: {data.revenue}</div>
        <div>Net Income: {data.netIncome}</div>
        <div>Net Profit: {data.netProfit}</div>
        <div>Operating Income: {data.operatingIncome}</div>
      </div>
    </div>
  );
};

export default Dashboard;


