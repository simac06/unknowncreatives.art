import React from "react";

const QuickAnalytics = ({ totalFunds, numberOfBackers, successRate }) => {
  return (
    <div className="quick-analytics">
      <h2>Quick Analytics</h2>
      <div className="analytics-item">
        <span>Total Funds Raised:</span>
        <span>${totalFunds}</span>
      </div>
      <div className="analytics-item">
        <span>Number of Backers:</span>
        <span>{numberOfBackers}</span>
      </div>
      <div className="analytics-item">
        <span>Campaign Success Rate:</span>
        <span>{successRate}%</span>
      </div>
    </div>
  );
};

export default QuickAnalytics;
