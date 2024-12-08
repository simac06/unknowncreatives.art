import React, { useState } from "react";

export default function CreateCampaign() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fundingGoal, setFundingGoal] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle campaign creation goes here
    console.log({ title, description, fundingGoal, duration });
  };

  return (
    <div className="create-campaign">
      <h2>Create New Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Create Campaign</button>
      </form>
    </div>
  );
}
