"use client";

import React from "react";
import { Button, Input, Checkbox, Link, Divider } from "@nextui-org/react";
import { FaEye, FaEyeSlash, FaGoogle, FaGithub } from "react-icons/fa";

export default function SignUpPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col min-h-page h-page w-full px-6  items-center justify-center">
      <div className="flex flex-col gap-4 justify-center h-1/3 items-center text-center">
        <span className="text-3xl font-bold">
          Fund your projects, reward your fans.
        </span>
        <span className="text-medium text-default-500">
          Create your free account below.
        </span>
      </div>

      <div className="flex w-full max-w-sm h-2/3 flex-col gap-4 ">
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input label="Email" name="email" type="email" variant="bordered" />

          <Button color="primary" size="lg" type="submit">
            Continue
          </Button>
        </form>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">OR</p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-2">
          <Button
            size="lg"
            startContent={<FaGoogle width={24} />}
            variant="bordered"
          >
            Continue with Google
          </Button>
          <Button
            size="lg"
            startContent={<FaGithub className="text-default-500" width={24} />}
            variant="bordered"
          >
            Continue with Github
          </Button>
        </div>
        <p className="text-center text-medium">
          Already have an account?&nbsp;
          <Link href="#" size="sm">
            Login
          </Link>
        </p>
        <p className="text-small text-center text-content4">
          By creating an account you agree to ACME's privacy policy, T&Cs and to
          receive offers, news and updates.
        </p>
      </div>
    </div>
  );
}
