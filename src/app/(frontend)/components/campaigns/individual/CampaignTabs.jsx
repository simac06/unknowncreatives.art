"use client";

import { Tabs, Tab } from "@nextui-org/tabs";
import RewardsCard from "./RewardsCard";

export default function CampaignTabs({ campaign }) {
  console.log(campaign);
  return (
    <Tabs variant="underlined" fullWidth>
      <Tab key="campaign" title="Campaign">
        <div className="px-4">
          <p className="whitespace-pre-wrap">{campaign.description}</p>
        </div>
      </Tab>
      <Tab key="rewards" title="Rewards">
        <RewardsCard />
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
