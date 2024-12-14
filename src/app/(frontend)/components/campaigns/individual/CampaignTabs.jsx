"use client";

import { Tabs, Tab } from "@nextui-org/tabs";
import RewardsCard from "./RewardsCard";
import { useEffect } from "react";

export default function CampaignTabs({
  campaign,
  activeTab,
  onTabChange,
  onTabSelected,
}) {
  useEffect(() => {
    if (onTabSelected) {
      onTabSelected(activeTab);
    }
  }, [activeTab, onTabSelected]);
  return (
    <Tabs
      id="campaignTabs"
      variant="underlined"
      fullWidth
      selectedKey={activeTab}
      onSelectionChange={onTabChange}
    >
      <Tab key="campaign" title="Campaign">
        <div className="px-4">
          <p className="whitespace-pre-wrap">{campaign.description}</p>
        </div>
      </Tab>
      <Tab key="rewards" title="Rewards">
        <div id="rewardsContent" className="px-4 flex flex-col gap-6">
          <RewardsCard />
          <RewardsCard />
        </div>
      </Tab>
      <Tab key="updates" title="Updates">
        Rewards
      </Tab>
      <Tab key="questions" title="Questions">
        Rewards
      </Tab>
    </Tabs>
  );
}
