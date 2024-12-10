"use client";

import { useState } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Spacer,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";

export default function Basic() {
  const [orgName, setOrgName] = useState("");

  const categories = [
    { key: "visualContent", label: "Video / Album Cover / Documentary" },
    { key: "event", label: "Performance / Live Event / Tour" },
    { key: "physicalItems", label: "Instruments / Microphones / Repairs" },
    { key: "recording", label: "Recording an Album / Song" },
    { key: "marketing", label: "Music Roll Out / Promotion" },
  ];
  return (
    <div className="flex flex-col">
      <div className="prose-invert prose prose-sm">
        <h2 className="">Basic Information</h2>
        <p className="">Let&apos;s start with some basic information</p>
      </div>
      <Spacer y={4} />
      <Card className="w-full px-2 py-2 max-w-[500px]">
        <CardHeader className="pb-0">
          <div className="flex flex-col items-start">
            <h3 className="text-large">Project Title</h3>
            <p className="text-small text-default-500">
              This is the title of your project, displayed to the public.
            </p>
          </div>
        </CardHeader>
        <Spacer y={2} />
        <CardBody className="">
          <Input
            isClearable
            label="Title"
            maxLength={50}
            value={orgName}
            onValueChange={setOrgName}
          />
          <Spacer y={3}></Spacer>
          <Input
            isClearable
            label="Subtitle"
            maxLength={50}
            value={orgName}
            onValueChange={setOrgName}
          />
        </CardBody>
      </Card>
      <Spacer y={4} />
      <Card className="w-full px-2 py-2 max-w-[500px]">
        <CardHeader className="pb-0">
          <div className="flex flex-col items-start">
            <h3 className="text-large">Category</h3>
            <p className="text-small text-default-500">
              What are you planning to fund?
            </p>
          </div>
        </CardHeader>
        <Spacer y={2} />
        <CardBody className="">
          <Select label="Select a category" className="s">
            {categories.map((category) => (
              <SelectItem key={category.key}>{category.label}</SelectItem>
            ))}
          </Select>
        </CardBody>
      </Card>
      <Spacer y={4} />
      <Card className="w-full px-2 py-2 max-w-[500px]">
        <CardHeader className="pb-0">
          <div className="flex flex-col items-start">
            <h3 className="text-large">Project Image</h3>
            <p className="text-small text-default-500">
              Provide an image that best represents your project.
            </p>
          </div>
        </CardHeader>
        <Spacer y={2} />
        <CardBody className="">
          <Select label="Select a category" className="s">
            {categories.map((category) => (
              <SelectItem key={category.key}>{category.label}</SelectItem>
            ))}
          </Select>
        </CardBody>
      </Card>
    </div>
  );
}
