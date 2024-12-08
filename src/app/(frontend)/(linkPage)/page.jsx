"use client";
import { FaArrowRight } from "react-icons/fa6";
import { FaSpotify, FaApple, FaYoutube, FaSoundcloud } from "react-icons/fa6";
import { songData } from "@data/songData";
import { Card, CardHeader, Chip } from "@nextui-org/react";
import Countdown from "@components/presave/Countdown.jsx";

const song = songData;

const prettyPlatforms = [
  {
    name: "Spotify",
    link: song.song.platforms.spotify,
    Icon: FaSpotify,
    color: "#1DB954",
  },
  {
    name: "Apple Music",
    link: song.song.platforms.appleMusic,
    Icon: FaApple,
    color: "#f94c57",
  },
  {
    name: "YouTube",
    link: song.song.platforms.youtube,
    Icon: FaYoutube,
    color: "#FF0000",
  },
  {
    name: "SoundCloud",
    link: song.song.platforms.soundCloud,
    Icon: FaSoundcloud,
    color: "#FF5500",
  },
];

// Add this helper function
const isPresave = (releaseDate) => {
  if (!releaseDate) return false;
  const release = new Date(releaseDate);
  const now = new Date();
  return release > now;
};

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row font-inter min-h-svh relative w-screen ">
      <section
        id="songInfo"
        className="h-1/2 pt-12 md:p-0 md:h-screen md:w-1/2 w-full md:pt-0 md:px-6"
      >
        {" "}
        {/* Added pt-16 for mobile */}
        <div className="flex gap-4 flex-col items-center h-full md:justify-center lg:items-center md:items-start justify-start pb-4">
          {" "}
          {/* Changed justify-end to justify-start */}
          <div className="w-64 lg:w-2/3 md:w-full aspect-square mt-4 md:mt-0">
            {" "}
            {/* Added mt-4 for mobile */}
            <img
              className="object-cover rounded-lg drop-shadow-2xl"
              src="https://utfs.io/f/5gHXXxrkMq9CZb5s4O7vEFYcKU8W3T2wbzNsVJ6Ql5xAHXnt"
              alt=""
            />
          </div>
          <div className="flex flex-col md:hidden md:gap-1 text-center">
            <h1 className="text-2xl md:text-3xl font-bold">
              {song.song.title}
            </h1>
            <h2 className="text-small uppercase md:text-large">
              {song.artist.name}
            </h2>
          </div>
        </div>
      </section>

      <section className="h-1/2 md:h-screen px-6 md:px-0 flex md:pr-6 md:items-center flex-col gap-5  md:w-1/2 w-full z-10">
        <div className="flex justify-center md:hidden">
          {/* I personally think ts ugly but idk */}
          <Countdown date={song.song.releaseDate}></Countdown>
        </div>

        <div
          id="songLinks"
          className="flex z-50 w-full  flex-col md:justify-center h-full items-center  gap-4 "
        >
          <div className="md:flex hidden flex-col md:gap-1 text-center">
            <h1 className="text-2xl md:text-3xl font-bold">
              {song.song.title}
            </h1>
            <h2 className="text-small uppercase md:text-large">
              {song.artist.name}
            </h2>
          </div>
          <div className="flex flex-col md:justify-center gap-4 w-full lg:w-3/4 md:w-full">
            {prettyPlatforms.map((platform) => {
              const { name, Icon, color } = platform;
              return (
                <Card isPressable key={name} className="px-2 py-2 w-full">
                  <CardHeader className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <div className=" flex justify-center">
                        <Icon className="text-3xl" style={{ color: color }} />
                      </div>
                      <span className="text-medium uppercase font-semibold">
                        {name}
                      </span>
                    </div>
                    <Chip
                      variant="light"
                      size="sm"
                      endContent={<FaArrowRight />}
                      className="text-tiny uppercase text-white/70 font-medium"
                    >
                      {isPresave(song.song.releaseDate)
                        ? "Presave Now"
                        : "Listen Now"}
                    </Chip>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <div className=" md:h-screen h-full overflow-hidden w-screen absolute z-[-1] top-0">
        <div id="background" className="relative h-full w-full">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background to-transparent via-transparent"></div>

          <img
            className="absolute inset-0 brightness-75 h-full w-full blur-2xl scale-150 object-cover object-center"
            src="https://utfs.io/f/5gHXXxrkMq9CZb5s4O7vEFYcKU8W3T2wbzNsVJ6Ql5xAHXnt"
            alt=""
          />
        </div>
      </div>
      <div className="flex md:absolute md:bottom-0 h-12 w-full items-center justify-center text-tiny">
        <span>POWERED BY ACME</span>
      </div>
    </div>
  );
}
