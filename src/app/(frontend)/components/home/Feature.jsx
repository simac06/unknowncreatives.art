"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Feature({
  icon,
  heading,
  subheading,
  classNames = {},
}) {
  const {
    card = "", // Class names for the Card component
    titles = "", // Class names for the text content wrapper
    imageWrapper = "", // Class names for the image wrapper
    image = "", // Class names for the image
  } = classNames;

  return (
    <Card className={`flex flex-col items-center justify-center py-4 ${card}`}>
      <CardBody className={`p-0 flex items-center ${imageWrapper} `}>
        <div className=" flex items-center justify-center">
          <Image removeWrapper src={icon} alt="Heart icon" className={image} />
        </div>
      </CardBody>

      <CardFooter className={`flex flex-col gap-2 ${titles}`}>
        <h3 className="text-xl font-bold">{heading}</h3>
        <p className="text-small">{subheading}</p>
      </CardFooter>
    </Card>
  );
}
