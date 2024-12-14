import { getPayload } from "payload";
import config from "@payload-config";
import PageTitle from "@components/header/PageTitle";
import CampaignCard from "@components/campaigns/CampaignCard";

export default async function Campaigns() {
  const payload = await getPayload({ config });
  const { docs: campaigns } = await payload.find({
    collection: "campaign",
    depth: 1,
  });

  return (
    <div className="px-6">
      <PageTitle title="Campaigns" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
}
