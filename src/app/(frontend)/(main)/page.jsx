"use client";

import Hero from "@components/home/Hero";
import Feature from "@components/home/Feature";

export default function Home() {
  return (
    <>
      <div className=" gap-16 flex flex-col items-center">
        <Hero />
        <section className="flex flex-col gap-6 px-6 lg:w-3/4">
          <h2 className="text-2xl text-center font-bold">How it works</h2>
          <div className="grid grid-cols-2  gap-3 sm:gap-6">
            <Feature
              classNames={{
                card: "col-span-2 sm:flex-row-reverse sm:gap-0 sm:px-4 sm:py-10",
                titles: " text-center  sm:w-1/2 sm:pr-4 sm:pr-10",
                imageWrapper: "sm:w-1/4 flex items-center justify-center",
                image: "sm:w-1/2 w-1/3 object-cover",
              }}
              orientation="vertical"
              icon="/feature-icons/heart.png"
              heading="Discover Musicians You Love"
              subheading="Independent artists often lack the funding required to make music. Discover campaigns for exciting projects like albums, music videos, and tours."
            />
            <Feature
              classNames={{
                card: "sm:col-span-1 col-span-2  sm:px-8",
                titles: "  text-center sm:pt-6",
                imageWrapper: " flex items-center sm:p-0 justify-center",
                image: "sm:w-1/2 w-1/3 object-cover",
              }}
              orientation="horizontal"
              icon="/feature-icons/target.png"
              heading="Back Their Vision"
              subheading="Choose a campaign that inspires you and pledge your support. Your contribution helps turn their creative dreams into reality."
            />
            <Feature
              classNames={{
                card: "sm:col-span-1 col-span-2  sm:px-8",
                titles: "  text-center sm:pt-6",
                imageWrapper: " flex items-center sm:p-0 justify-center",
                image: "sm:w-1/2 w-1/3 object-cover",
              }}
              orientation="horizontal"
              icon="/feature-icons/headphones.png"
              heading="See Your Impact"
              subheading="Watch your favorite artists grow and thrive, knowing you played a role in bringing their projects to life."
            />
            <Feature
              classNames={{
                card: "col-span-2 sm:flex-row-reverse sm:gap-0 sm:px-4 sm:py-10",
                titles: " text-center  sm:w-1/2 sm:pr-4 sm:pr-10",
                imageWrapper: "sm:w-1/4 flex items-center justify-center",
                image: "sm:w-1/2 w-1/3 object-cover",
              }}
              orientation="vertical"
              icon="/feature-icons/reward.png"
              heading="Get Exclusive Rewards"
              subheading="Receive unique perks like limited-edition merch, behind-the-scenes content, or personal shoutouts as thanks for your support."
            />
          </div>
        </section>
      </div>
    </>
  );
}
