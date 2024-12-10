"use client";

import ArtistData from "../../../data/artistData";
import PageTitle from "../../components/header/PageTitle";

import { Card, Chip, Image, CardFooter } from "@nextui-org/react";

export default function Artists() {
  const ArtistCard = ({ artist }) => {
    return (
      <Card isPressable className="">
        <div class="relative ">
          <Image
            width={200}
            alt="Card background"
            className="z-0  w-full h-full object-cover"
            src={artist.image}
          />
          <div class="absolute z-10 top-0 bg-gradient-to-t from-background via-transparent via-50%  to-transparent h-full w-full" />
        </div>
        <CardFooter className="absolute bottom-0 z-10 ">
          <div className="flex gap-1 flex-col items-start">
            <p className="text-white font-bold text-large">{artist.name}</p>
            <div className="flex gap-1">
              {artist.genres.map((genre) => (
                <Chip size="sm" key={genre} className="text-white">
                  {genre}
                </Chip>
              ))}
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  };

  return (
    <>
      <PageTitle title="Artists" />

      <div className="grid grid-cols-2 gap-4">
        {ArtistData.map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </div>
    </>
  );
}
