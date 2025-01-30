"use client";

import { useState, useEffect } from "react";
import CampaignTabs from "./CampaignTabs";
import StickyPledge from "./StickyPledge";

export default function CampaignContent({ campaign }) {
  const [activeTab, setActiveTab] = useState("campaign");

  const handleTabSelected = (tab) => {
    console.log("Tab changed to:", tab);
  };

  useEffect(() => {
    if (activeTab === "rewards") {
      setTimeout(() => {
        const campaignTabs = document.getElementById("campaignTabs");
        if (rewardsContent) {
          const elementPosition = campaignTabs.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 80; // 64px = 4rem

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [activeTab]);

  const handlePledgeClick = () => {
    setActiveTab("rewards");
  };

  return (
    <>
      <CampaignTabs
        campaign={campaign}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onTabSelected={handleTabSelected}
      />
      <StickyPledge
        onPledgeClick={handlePledgeClick}
        isRewardsTab={activeTab === "rewards"}
      />
    </>
  );
}
