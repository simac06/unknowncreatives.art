import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";

import { Chip } from "@nextui-org/chip";

export default function RewardsCard() {
  return (
    <>
      <Card className="relative overflow-visible">
        <div
          size="md"
          className="absolute text-2xl font-bold -top-3 -right-3 z-20 bg-secondary-500 rounded-full aspect-square p-3"
        >
          $5
        </div>
        <CardHeader className=" flex items-center justify-center w-full h-full p-4 ">
          <div className=" flex aspect-square h-full w-full flex-col items-center justify-center rounded-medium bg-content2">
            <Image
              removeWrapper
              src="/rewards-images/polaroid.png"
              className="active:scale-105 shadow-xl shadow-background object-contain object-center w-2/3 hover:scale-105 focus:scale-105 transition-transform duration-300"
            ></Image>
          </div>
        </CardHeader>
        <CardBody className="px-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center w-full">
              <h2 className="text-xl ">One of a kind Polaroid</h2>
              <Chip color="default" size="md" className="text-medium font-bold">
                1/500 Left
              </Chip>
            </div>
            <p className="text-small text-default-500">
              A unique Polaroid taken just for you by Damn Drone. Whether
              it&apos;s a candid behind-the-scenes shot, or a glimpse into their
              creative process, no two are alike—making it a special treasure.
            </p>
          </div>
          <div className="grid w-full grid-cols-2 grid-rows-2 gap-2">
            <div className="flex flex-col gap-1">
              <span className="text-tiny text-default-500">SHIPS</span>
              <span className="text-small text-white">Nov 3, 2025</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-tiny text-default-500">LIMITED</span>
              <span className="text-small text-white">1/500 Left</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-tiny text-default-500">BACKERS</span>
              <AvatarGroup
                className="[&>span]:w-6 [&>span]:h-6 text-tiny"
                isBordered
                max={3}
                renderCount={(count) => (
                  <p className="text-small text-foreground font-medium ms-2">
                    {count}
                  </p>
                )}
                total={499}
              >
                <Avatar name="Jim" />
                <Avatar name="Jim" />
                <Avatar name="Jim" />
                <Avatar name="Jim" />
                <Avatar name="Jim" />
              </AvatarGroup>
            </div>
          </div>
        </CardBody>
        <CardFooter>
          <Button color="primary" radius="sm" fullWidth size="lg">
            Pledge $5
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
