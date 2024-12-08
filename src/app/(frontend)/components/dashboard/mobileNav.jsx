"use client";

import { Tabs, Tab } from "@nextui-org/react";
import { FaBullhorn } from "react-icons/fa";

export default function MobileNav() {
  return (
    <Tabs className="hidden">
      <Tab
        title={
          <div>
            <FaBullhorn />
          </div>
        }
      />
      <Tab
        title={
          <div>
            <FaBullhorn />
          </div>
        }
      />
    </Tabs>
  );
}
