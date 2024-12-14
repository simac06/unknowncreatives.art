"use client";

import { Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center h-[50vh]">
        <section className=" h-full flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <Button
            className="h-9 overflow-hidden border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-default-500"
            endContent={
              <FaArrowRight
                className="flex-none outline-none [&>path]:stroke-[2]"
                width={20}
              />
            }
            radius="full"
            variant="bordered"
          >
            New onboarding experience
          </Button>
          <div className="text-center text-[clamp(1px,10vw,26px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
            <div className=" text-white">
              Support Your Favorite Artists,
              <br />
              Unlock Exclusive Rewards
            </div>
          </div>
          <p className="text-center font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]">
            Connect with the artists you love and play a part in their success.
            Your support fuels their creativity, and you&apos;ll be rewarded
            with exclusive items and experiences
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              className="h-10 w-[163px] bg-default-foreground px-[16px] py-[10px] text-small font-medium leading-5 text-background"
              radius="full"
            >
              Get Started
            </Button>
            <Button
              className="h-10 w-[163px] border-1 border-default-100 px-[16px] py-[10px] text-small font-medium leading-5"
              endContent={
                <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
                  <FaArrowRight
                    className="text-default-500 [&>path]:stroke-[1.5]"
                    width={16}
                  />
                </span>
              }
              radius="full"
              variant="bordered"
            >
              See our plans
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
