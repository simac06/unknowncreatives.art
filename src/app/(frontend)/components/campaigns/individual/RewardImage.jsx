import { Image } from "@nextui-org/image";

export default function RewardImage() {
  return (
    <>
      <div className="relative grid">
        <div className="absolute  top left h-16 w-16 bg-content1  pr-2  border-content1 shadow-none   z-20    rounded-br-[33%]     ">
          <span className="leading-none font-bold  text-3xl bg-primary  text-primary-foreground rounded-lg rounded-br-[28%] aspect-square  flex flex-col items-center justify-center ">
            $5
          </span>
        </div>
        <div className=" flex aspect-square h-full w-full flex-col items-center justify-center rounded-medium bg-content2">
          <Image
            removeWrapper
            src="/rewards-images/polaroid.png"
            className="active:scale-105 shadow-xl shadow-background object-contain object-center w-3/5 hover:scale-105 focus:scale-105 transition-transform duration-300"
          ></Image>
        </div>
        <div className="justify-self-center absolute leading-none -bottom-2 text-secondary-foreground font-medium rounded-xl z-20 space-x-1 text-medium translate-y-1 bg-secondary px-6 pb-1 pt-2 flex  items-center justify-center">
          <span>1/500</span>

          <span className=" font-normal">LEFT</span>
        </div>
      </div>
    </>
  );
}
