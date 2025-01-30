"use client";

import React, { useState } from "react";

export default function Funding() {
  const [fundingGoal, setFundingGoal] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle campaign creation goes here
    console.log({ fundingGoal, duration });
  };

  return (
    <div className="main">
      <h1>Funding</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fundingGoal">Funding Goal:</label>
          <input
            type="number"
            id="fundingGoal"
            value={fundingGoal}
            onChange={(e) => setFundingGoal(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="duration">Duration (days):</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
