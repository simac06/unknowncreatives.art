import React from "react";
import CampaignTable from "@components/campaigns/CampaignTable";

import { columns, campaigns } from "@data/campaignData.js";

export default function Campaigns() {
  return (
    <div className="flex flex-col w-full px-6 items-center justify-center">
      <CampaignTable columns={columns} campaigns={campaigns} />
    </div>
  );
}
