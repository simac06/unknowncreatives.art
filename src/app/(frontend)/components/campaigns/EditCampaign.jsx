"use client";

import { useState } from "react";

const EditCampaign = ({
  campaign = {
    title: "Sample Campaign",
    description: "This is a sample campaign.",
    fundingGoal: 1000,
    duration: 30,
  },
  onUpdate,
}) => {
  const [title, setTitle] = useState(campaign.title);
  const [description, setDescription] = useState(campaign.description);
  const [fundingGoal, setFundingGoal] = useState(campaign.fundingGoal);
  const [duration, setDuration] = useState(campaign.duration);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCampaign = {
      ...campaign,
      title,
      description,
      fundingGoal,
      duration,
    };
    onUpdate(updatedCampaign);
  };

  return (
    <div className="edit-campaign">
      <h2>Edit Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Funding Goal:</label>
          <input
            type="number"
            value={fundingGoal}
            onChange={(e) => setFundingGoal(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Duration (days):</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Campaign</button>
      </form>
    </div>
  );
};

export default EditCampaign;
