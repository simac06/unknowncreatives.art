import { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import {
  Button,
  Input,
  Form,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";
import { Image } from "@nextui-org/image";

import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";

const Step1 = ({ countries }) => {
  const { register, setValue, watch } = useFormContext();

  const selectedCountry = watch("country");

  const handleSelect = (key) => {
    const country = countries.find((country) => country.key === key);
    if (country) {
      setValue("country", country.label);
    }
  };

  return (
    <>
      <Input
        className="w-full"
        label="Full Name"
        size="md"
        labelPlacement="outside"
        type="text"
        placeholder="John Doe"
        {...register("fullName", { required: true })}
      />
      <Input
        className="w-full"
        label="Email"
        size="md"
        labelPlacement="outside"
        type="email"
        placeholder="johnathandoeberman@gmail.com"
        {...register("email", { required: true })}
      />
      <Autocomplete
        size="md"
        className="w-full"
        label="What country should we ship to?"
        placeholder="Choose your country"
        labelPlacement="outside"
        value={selectedCountry}
        onSelect={handleSelect}
        {...register("country", { required: true })}
      >
        {countries.map((country) => (
          <AutocompleteItem
            className="pr-0"
            key={country.key}
            value={country.key}
            textValue={country.label}
          >
            <div className="flex w-full justify-between">
              <span>{country.label}</span>
              <span>+$17</span>
            </div>
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </>
  );
};

const Step2 = () => {
  const { register, watch } = useFormContext();
  const fullName = watch("fullName");
  const country = watch("country");

  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
          <p>Hello,&nbsp;</p>
          <p className="font-semibold">{fullName}!</p>
        </div>
        <p className="text-copy">Where should we send your reward?</p>
      </div>
      <div className="w-full flex gap-2">
        <Input
          className="w-1/2"
          label="Address"
          size="md"
          labelPlacement="outside"
          type="text"
          placeholder="123 Main St"
          {...register("address1", { required: true })}
        />
        <Input
          className="w-1/2"
          label="Apt, Suite, etc."
          size="md"
          labelPlacement="outside"
          type="text"
          placeholder="Unit 2"
          {...register("address2")}
        />
      </div>
      <div className="w-full flex gap-2">
        <Input
          className="w-1/2"
          label="City"
          size="md"
          labelPlacement="outside"
          placeholder="Columbus"
          type="text"
          {...register("city", { required: true })}
        />
        <Input
          className="w-1/2"
          label="Province / State"
          size="md"
          labelPlacement="outside"
          type="text"
          placeholder="OH"
          {...register("province", { required: true })}
        />
      </div>
      <div className="flex w-full gap-2">
        <Input
          className="w-1/2"
          label="Country"
          isReadOnly
          defaultValue={country}
          size="md"
          labelPlacement="outside"
          type="text"
          {...register("country", { required: true })}
        />
        <Input
          className="w-1/2"
          label="Postal / Zip Code"
          placeholder="43215"
          size="md"
          labelPlacement="outside"
          type="text"
          {...register("postalCode", { required: true })}
        />
      </div>
      <div className="w-full flex">
        <Input
          className="w-full"
          label="Phone Number"
          placeholder="43215"
          size="md"
          labelPlacement="outside"
          type="text"
          {...register("phoneNumber", { required: true })}
        />
      </div>
    </>
  );
};

const Step3 = () => {
  const { register, watch } = useFormContext();
  const fullName = watch("fullName");
  const country = watch("country");

  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
          <p>Hello,&nbsp;</p>
          <p className="font-semibold">{fullName}!</p>
        </div>
        <p className="text-copy">What is your billing information?</p>
      </div>
      <div className="w-full flex gap-2">
        <Input
          className="w-1/2"
          label="Address"
          size="md"
          labelPlacement="outside"
          type="text"
          placeholder="123 Main St"
          {...register("address1", { required: true })}
        />
        <Input
          className="w-1/2"
          label="Apt, Suite, etc."
          size="md"
          labelPlacement="outside"
          type="text"
          placeholder="Unit 2"
          {...register("address2")}
        />
      </div>
      <div className="w-full flex gap-2">
        <Input
          className="w-1/2"
          label="City"
          size="md"
          labelPlacement="outside"
          placeholder="Columbus"
          type="text"
          {...register("city", { required: true })}
        />
        <Input
          className="w-1/2"
          label="Province / State"
          size="md"
          labelPlacement="outside"
          type="text"
          placeholder="OH"
          {...register("province", { required: true })}
        />
      </div>
      <div className="flex w-full gap-2">
        <Input
          className="w-1/2"
          label="Country"
          isReadOnly
          defaultValue={country}
          size="md"
          labelPlacement="outside"
          type="text"
          {...register("country", { required: true })}
        />
        <Input
          className="w-1/2"
          label="Postal / Zip Code"
          placeholder="43215"
          size="md"
          labelPlacement="outside"
          type="text"
          {...register("postalCode", { required: true })}
        />
      </div>
      <div className="w-full flex">
        <Input
          className="w-full"
          label="Phone Number"
          placeholder="43215"
          size="md"
          labelPlacement="outside"
          type="text"
          {...register("phoneNumber", { required: true })}
        />
      </div>
    </>
  );
};

export default function RewardsFormModal({ isOpen, onOpenChange, countries }) {
  const [step, setStep] = useState(1);
  const methods = useForm();

  const onSubmit = (data) => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log(data);
      // Handle form submission
    }
  };

  return (
    <Modal className="" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="pt-4 pb-8 bg-background">
        <ModalHeader className="relative">
          <div className="grid grid-cols-3 gap-4 bg-content1 p-3 w-full h-full rounded-2xl">
            <div className="flex aspect-square h-full w-full flex-col items-center p-1 justify-center rounded-medium bg-content2">
              <Image
                removeWrapper
                src="/rewards-images/polaroid.png"
                className="active:scale-105 shadow-sm rounded-small shadow-background object-contain object-center w-3/4 hover:scale-105 focus:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-2 w-full py-3">
              <p className="text-large font-medium">One of a kind Polaroid</p>
              <p className="text-small font-normal">Ships Nov. 3 2025</p>
              <div className="flex gap-2 items-center">
                <p className="text-large font-medium">$5</p>
                <p className="text-small font-light text-copy">+$17 shipping</p>
              </div>
            </div>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormProvider {...methods}>
            <Form className="gap-5" onSubmit={methods.handleSubmit(onSubmit)}>
              {step === 1 && <Step1 countries={countries} />}
              {step === 2 && <Step2 />}
              {step === 3 && <Step3 />}
              <Button
                fullWidth
                type="submit"
                className="font-semibold text-xl"
                color="primary"
                radius="sm"
                size="lg"
              >
                {step < 2
                  ? "Continue to Shipping"
                  : step < 3
                    ? "Continue to Billing"
                    : "Submit"}
              </Button>
            </Form>
          </FormProvider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
