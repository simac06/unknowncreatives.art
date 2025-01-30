"use client";

import { Button } from "@nextui-org/react";

import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center min-h-page">
        <section className=" h-page flex flex-col items-center sm:gap-6">
          {/* main herosection */}
          <div className="flex h-2/3 justify-center relative flex-col  pt-6 pb-32 px-4  rounded-b-3xl gap-6">
            <div className="flex flex-col gap-2 text-center px-12">
              <h2 className="text-[clamp(1px,10vw,28px)] font-normal leading-[1.2] tracking-normal sm:text-5xl ">
                Get
                <span className="text-primary font-semibold sm:font-medium">
                  {" "}
                  Rewarded
                </span>
                <br />
                for{" "}
                <span className="text-secondary font-semibold sm:font-medium">
                  Supporting
                </span>{" "}
                Your Favourite
                <span className="text-primary font-semibold sm:font-medium">
                  {" "}
                  Artists
                </span>
              </h2>
              <p className="font-medium text-small  text-copy text-center sm:text-medium">
                Play a part in your favourite musician&apos;s success, and be
                rewarded with exclusive keepsakes and experiences
              </p>
            </div>
            <div className="flex items-center flex-col  w-full justify-center gap-6 sm:flex-row">
              <Button
                color=""
                size=""
                className="font-medium tracking-tight  text-medium  bg-secondary  text-secondary-foreground"
                radius="sm"
              >
                Explore Campaigns
              </Button>
            </div>
            {/* card */}
          </div>
          <div className="h-1/2 overflow-x-hidden -translate-x-[4px]  w-full items-center z-20 bottom-0  left-1 justify-center absolute  flex ">
            <HeroCarousel />
          </div>
        </section>
      </div>
    </>
  );
}
