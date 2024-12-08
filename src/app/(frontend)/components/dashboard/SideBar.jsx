import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  extendVariants,
  ModalHeader,
} from "@nextui-org/react";

const Sidebar = extendVariants(Modal, {
  variants: {
    height: {
      "half-full": {
        base: "h-[50%] max-h-full",
      },
      half: {
        base: "h-[50%] max-h-[50%]",
      },
      full: {
        base: "h-full max-h-full",
      },
    },
    placement: {
      left: {
        wrapper: [
          "fixed",
          "top-0",
          "left-0",
          "bottom-0",
          "items-start",
          "sm:items-start",
          "[--scale-enter:100%]",
          "[--scale-exit:100%]",
          "[--opacity-enter:100%]",
          "[--opacity-exit:0%]",
          "[--slide-y-enter:0px]",
          "[--slide-y-exit:0px]",
          "[--slide-x-enter:0px]",
          "[--slide-x-exit:-200px]",
          "sm:[--scale-enter:100%]",
          "sm:[--scale-exit:100%]",
          "justify-start",
        ],
        base: ["m-0", "w-2/3", "sm:m-0", "rounded-none"],
        closeButton: ["right-3", "top-3"],
        header: ["pr-12"],
      },
    },
  },
  defaultVariants: {
    size: "md",
    height: "full",
    shadow: "sm",
    placement: "left",
    backdrop: "opaque",
    scrollBehavior: "inside",
  },
});

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  const placements = ["left", "right"];

  const handleOpen = (placement) => {
    setPlacement(placement);
    onOpen();
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-3">
        {placements.map((b) => (
          <Button
            key={b}
            variant="flat"
            color="warning"
            onPress={() => handleOpen(b)}
            className="capitalize"
          >
            {b}
          </Button>
        ))}
      </div>
      <Sidebar
        placement={placement}
        isOpen={isOpen}
        height={"full"}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              x: "var(--slide-x-enter)",
              opacity: "var(--opacity-enter)",
              scale: "var(--scale-enter)",
              y: "var(--slide-y-enter)",
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              x: "var(--slide-x-exit)",
              opacity: "var(--opacity-exit)",
              scale: "var(--scale-exit)",
              y: "var(--slide-y-exit)",
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody></ModalBody>
            </>
          )}
        </ModalContent>
      </Sidebar>
    </div>
  );
}
