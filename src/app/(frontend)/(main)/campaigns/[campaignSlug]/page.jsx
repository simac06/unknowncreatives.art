import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Progress } from "@nextui-org/progress";

import { Divider } from "@nextui-org/divider";
import CampaignTabs from "@components/campaigns/individual/CampaignTabs";
import { User } from "@nextui-org/user";
import { getImageUrl } from "@utils";
import { FaPeopleGroup, FaCalendarDays } from "react-icons/fa6";

export default async function CampaignPage({ params }) {
  const { campaignSlug } = params;

  try {
    const payload = await getPayload({ config });
    const campaign = await payload.findByID({
      collection: "campaign",
      id: campaignSlug,
      depth: 2,
    });

    if (!campaign) {
      notFound();
    }

    const percentFunded = (campaign.amtFunded / campaign.goal) * 100;

    return (
      <section className="relative flex flex-col gap-4 mb-16">
        <Card
          radius="none"
          className="aspect-square w-full overflow-hidden relative"
        >
          <CardBody className="absolute bottom-0 z-20 px-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">{campaign.title}</h1>
              <div className="">
                <User
                  classNames={{
                    name: "text-medium",
                  }}
                  avatarProps={{
                    className: "w-8 h-8",
                  }}
                  name="Apostoli"
                />
              </div>
            </div>
          </CardBody>
          <Image
            radius="none"
            removeWrapper
            alt={campaign.title}
            className="z-10 w-full h-full"
            src={getImageUrl(campaign.hero_image?.url)}
          />
          <div className="absolute z-10 w-full h-full object-cover bg-gradient-to-t from-background to-transparent via-transparent"></div>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
          {/* progress card */}
          <Card className="px-4 py-2">
            <CardBody className="flex flex-col gap-4">
              <Progress
                size="md"
                radius="sm"
                classNames={{
                  base: "max-w-md",
                  track: "drop-shadow-md",
                  label: "w-full",
                }}
                value={percentFunded}
                showValueLabel={false}
                label={
                  <div className="flex w-full justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-default-500 uppercase text-tiny leading-none">
                        PLEDGED
                      </span>
                      <span className="text-xl">$500</span>
                    </div>{" "}
                    <div className="flex flex-col gap-1 text-end">
                      <span className="text-default-500 uppercase text-tiny leading-none">
                        GOAL
                      </span>
                      <span className="text-xl">$1000</span>
                    </div>
                  </div>
                }
              />
              <div className="flex w-full items-center h-fit justify-around">
                <div className="flex w-1/2 items-center justify-center  gap-2">
                  <span className="text-default-500">
                    <FaPeopleGroup></FaPeopleGroup>
                  </span>
                  <p>
                    <span className="font-bold">6000</span>
                    &nbsp;
                    <span className="text-default-500">Backers</span>
                  </p>
                </div>
                <Divider orientation="vertical" />
                <div className="flex w-1/2 items-center justify-center gap-2 ">
                  <span className=" text-default-500">
                    <FaCalendarDays></FaCalendarDays>
                  </span>
                  <p>
                    <span className="font-bold">30</span>
                    &nbsp;
                    <span className="text-default-500">Days Left</span>
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* end progress card */}
          {/* tabs */}
          <CampaignTabs campaign={campaign}></CampaignTabs>
          {/* end tabs */}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching campaign:", error);
    notFound();
  }
}
