import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function RewardsCard() {
  return (
    <>
      <Card className="relative overflow-visible">
        <div
          size="md"
          className="absolute text-3xl leading-none flex pt-4 items-center justify-center font-medium -top-3 -right-3 z-20 bg-primary text-primary-foreground rounded-full aspect-square p-3"
        >
          $5
        </div>
        <CardHeader className=" flex items-center justify-center relative w-full h-full p-4 ">
          <div className=" flex aspect-square h-full w-full flex-col items-center justify-center rounded-medium bg-content2">
            <Image
              removeWrapper
              src="/rewards-images/polaroid.png"
              className="active:scale-105 shadow-xl shadow-background object-contain object-center w-2/3 hover:scale-105 focus:scale-105 transition-transform duration-300"
            ></Image>
          </div>
          <div className=" absolute leading-none bottom-0 text-secondary-foreground font-medium rounded-xl z-20 text-large translate-y-1 bg-secondary px-6 pb-1 pt-2 flex flex-col items-center justify-center">
            <span>1/500</span>
            <span className="text-[0.7rem] font-normal"> LEFT</span>
          </div>
        </CardHeader>
        <CardBody className="px-8 flex flex-col gap-4 pt-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold ">One of a kind Polaroid</h2>

            <p className="text-small text-copy ">
              A unique Polaroid taken just for you by Damn Drone. Whether
              it&apos;s a candid behind-the-scenes shot, or a glimpse into their
              creative process, no two are alike—making it a special treasure.
            </p>
          </div>
          <div className="grid w-full grid-cols-2  gap-2">
            <div className="flex flex-col gap-1">
              <span className="text-tiny text-default-500">SHIPS</span>
              <span className="text-small">Nov 3, 2025</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-tiny text-default-500">BACKERS</span>
              <span className="text-small">499</span>
            </div>

            {/* <div className="flex flex-col gap-1">
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
            </div> */}
          </div>
        </CardBody>
        <CardFooter>
          <Button
            className="font-semibold text-xl"
            color="primary"
            radius="sm"
            fullWidth
            size="lg"
          >
            Pledge $5
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
