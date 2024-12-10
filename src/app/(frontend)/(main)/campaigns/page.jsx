// Mark as server component
import { getPayload } from "payload";
import config from "@payload-config";
import PageTitle from "@components/header/PageTitle";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Progress } from "@nextui-org/progress";
import { User } from "@nextui-org/user";

import { getImageUrl } from "@utils";

const CampaignCard = ({ campaign }) => {
  const { hero_image, title, amtFunded, goal } = campaign;
  console.log(campaign);
  return (
    <Card radius="xl" isPressable className="">
      <CardHeader radius="" className="w-full p-0 overflow-hidden">
        <div className="aspect-[3/2] ring-1 ring-content2 shadow-xl overflow-hidden w-full h-full">
          <Image
            alt="Campaign image"
            radius="lg"
            className="z-0 w-full h-full object-cover overflow-hidden"
            src={getImageUrl(hero_image?.url)}
          />
        </div>
      </CardHeader>
      <CardBody className="pb-8 flex flex-col gap-4 pt-6 px-6">
        <div className="flex flex-col gap-[0.33rem] items-start">
          <p className="text-white text-xl">{title}</p>
          <User
            classNames={{
              name: "text-medium",
            }}
            avatarProps={{
              className: "w-6 h-6",
            }}
            name="Apostoli"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Progress
            aria-label="Percentage of goal"
            className="max-w-md"
            color="success"
            showValueLabel={true}
            size="md"
            value={(amtFunded / goal) * 100}
          />
          <div></div>
        </div>
      </CardBody>
    </Card>
  );
};

export default async function Campaigns() {
  const payload = await getPayload({ config });
  const { docs: campaigns } = await payload.find({
    collection: "campaign",
    depth: 1,
  });

  return (
    <>
      <PageTitle title="Campaigns" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </>
  );
}
