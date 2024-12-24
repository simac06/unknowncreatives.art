import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import RewardImage from "./RewardImage";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Form } from "@nextui-org/form";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Input } from "@nextui-org/input";
import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
} from "@nextui-org/autocomplete";
import { useDisclosure } from "@nextui-org/react";

export default function RewardsCard() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const countries = [
    { key: "usa", label: "United States" },
    { key: "can", label: "Canada" },
    { key: "uk", label: "United Kingdom" },
    { key: "aus", label: "Australia" },
    { key: "fin", label: "Finland" },
  ];
  return (
    <>
      <Card className="relative overflow-visible">
        <CardHeader className=" flex items-center  justify-center relative w-full h-full p-4 ">
          <RewardImage></RewardImage>
        </CardHeader>
        <CardBody className="px-8 flex flex-col gap-4 pt-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold ">One of a kind Polaroid</h2>

            <p className="text-small text-copy ">
              A unique Polaroid taken just for you by Damn Drone. Whether
              it&apos;s a candid behind-the-scenes shot, or a glimpse into their
              creative process, no two are alike—making it a special treasure.
            </p>
          </div>
          <div className="grid w-full grid-cols-2  gap-2">
            <div className="flex flex-col gap-1">
              <span className="text-tiny text-default-500">SHIPS</span>
              <span className="text-small">Nov 3, 2025</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-tiny text-default-500">BACKERS</span>
              <span className="text-small">499</span>
            </div>
          </div>
        </CardBody>
        <CardFooter>
          <Button
            onPress={onOpen}
            className="font-semibold text-xl"
            color="primary"
            radius="sm"
            fullWidth
            size="lg"
          >
            Pledge $5
          </Button>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="p-4 bg-background">
          {(onClose) => (
            <>
              <ModalHeader className=" ">
                <div className=" grid grid-cols-3 bg-content1 p-3 w-full h-full rounded-2xl">
                  <div className=" flex aspect-square h-full w-full flex-col items-center p-1 justify-center rounded-medium bg-content2">
                    <Image
                      removeWrapper
                      src="/rewards-images/polaroid.png"
                      className="active:scale-105 shadow-sm rounded-small shadow-background object-contain object-center w-3/4 hover:scale-105 focus:scale-105 transition-transform duration-300"
                    ></Image>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <Form action="">
                  <Input
                    className="w-full"
                    label="Full Name"
                    type="name"
                    placeholder="john Doe"
                  />
                  <Autocomplete className="w-full" label="Choose your country">
                    {countries.map((country) => (
                      <AutocompleteItem className=" pr-0" key={country.key}>
                        <div className=" flex w-full justify-between">
                          <span>{country.label}</span>
                          <span>+$17</span>
                        </div>
                      </AutocompleteItem>
                    ))}
                  </Autocomplete>
                </Form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
