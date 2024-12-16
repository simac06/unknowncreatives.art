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

import HeroCarousel from "./HeroCarousel";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const percentFunded = 97;
  return (
    <>
      <div className="flex flex-col items-center min-h-page">
        <section className=" h-page flex flex-col items-center sm:gap-6">
          {/* main herosection */}
          <div className="flex h-2/3 justify-center relative flex-col  pt-6 pb-32 px-4  rounded-b-3xl gap-4">
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-[clamp(1px,10vw,36px)] font-semibold leading-[1.2] tracking-tight sm:text-[64px] ">
                Get
                <span className="text-primary"> Rewarded</span>
                <br />
                for <span className="text-secondary">Supporting</span> Your
                Favourite
                <span className="text-primary"> Artists</span>
              </h2>
              <p className="font-medium text-large leading-7 text-default sm:w-[466px] sm:text-[18px]">
                Play a part in your favourite musician's success, and be
                rewarded with exclusive keepsakes and experiences
              </p>
            </div>
            <div className="flex items-center flex-col  w-full justify-center gap-6 sm:flex-row">
              <Button
                color=""
                size="md"
                className="font-medium tracking-tight  text-xl  bg-secondary  text-secondary-foreground"
                radius="sm"
              >
                Explore Campaigns
              </Button>
            </div>
            {/* card */}
            <div className="w-full items-center z-20 bottom-0 translate-y-[58%] left-1 justify-center absolute  flex ">
              <HeroCarousel />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
