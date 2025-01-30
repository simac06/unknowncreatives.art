import { Button } from "@nextui-org/button";
import RewardImage from "./RewardImage";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import { useDisclosure } from "@nextui-org/react";

import RewardsFormModal from "./CheckoutForm/RewardsFormModal";

export default function RewardsCard() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const countries = [
    { key: "us", label: "United States" },
    { key: "ca", label: "Canada" },
    { key: "uk", label: "United Kingdom" },
    { key: "au", label: "Australia" },
  ];

  return (
    <>
      <Card className="relative overflow-visible">
        <CardHeader className=" flex items-center  justify-center relative w-full h-full p-4 ">
          <RewardImage></RewardImage>
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
          </div>
        </CardBody>
        <CardFooter>
          <Button
            onPress={onOpen}
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
      <RewardsFormModal
        countries={countries}
        onOpenChange={onOpenChange}
        isOpen={isOpen}
      />
    </>
  );
}
