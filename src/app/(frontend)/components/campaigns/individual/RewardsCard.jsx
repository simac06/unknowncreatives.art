import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

export default function RewardsCard({}) {
  return (
    <div className="flex flex-col gap-2 px-4">
      <div className="">
        <Image src="/rewards-images/polaroid.png"></Image>
      </div>
      <div>
        <h2 className="text-lg font-bold">Unique Polaroid</h2>
      </div>
      <Button size="lg">Pledge $5</Button>
    </div>
  );
}
