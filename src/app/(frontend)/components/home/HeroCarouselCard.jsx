"use client";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Chip,
  Progress,
} from "@nextui-org/react";

export default function HeroCarouselCard() {
  const percentFunded = 97;
  return (
    <Card className="w-full ">
      <div className="aspect-[3/4] h-full relative overflow-hidden">
        <Image
          removeWrapper
          src="/hero-card-images/random-dude.jpg"
          className="object-cover h-full overflow-hidden"
        ></Image>
      </div>
      <div className="absolute w-full h-full bg-gradient-to-t from-background to-transparent  z-10"></div>
      <div className="absolute w-full h-full bg-gradient-to-bl from-background opacity-30 via-transparent to-transparent  z-10"></div>

      <CardBody className="absolute z-20 flex flex-col gap-2  bottom-0">
        <div className="flex flex-col w-full leading-snug">
          <span className="text-medium font-normal text-copy">Kataem</span>
          <span className="text-large font-medium leading-snug">
            Believe It - Music Video
          </span>
        </div>
        <div className="flex items-center justify-between">
          <Progress
            size="sm"
            radius="sm"
            classNames={{
              base: "max-w-md",
              track: "drop-shadow-md bg-default",
              label: "w-full",
            }}
            value={percentFunded}
            showValueLabel={false}
            label={
              <div className="flex w-full justify-between relative">
                <div className="flex flex-col gap-1">
                  <span className="text-copy uppercase text-[0.6rem] leading-none">
                    PLEDGED
                  </span>
                  <span className="text-xl">$500</span>
                </div>
                <div>
                  <span className="absolute bottom-0 -translate-x-1/2">
                    96%
                  </span>
                </div>
                <div className="flex flex-col gap-1 text-end">
                  <span className="text-copy uppercase text-[0.6rem] leading-none">
                    GOAL
                  </span>
                  <span className="text-xl">$1000</span>
                </div>
              </div>
            }
          />
        </div>
      </CardBody>
      <Chip
        size="sm"
        className="absolute top-2 pt-1 right-2 z-10 bg-secondary  text-tiny leading-none tracking-tigher text-secondary-foreground"
      >
        ALMOST THERE
      </Chip>
    </Card>
  );
}
