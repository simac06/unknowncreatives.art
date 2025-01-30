"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

const tabsInfo = [
  { key: "basic", title: "Basic", content: "basic" },
  { key: "funding", title: "Funding", content: "funding" },
  { key: "rewards", title: "Rewards", content: null },
  { key: "story", title: "Story", content: null },
  { key: "payment", title: "Payment", content: null },
  { key: "promotion", title: "Promotion", content: null },
];

export default function Layout({ basic, funding }) {
  const getTabProps = (tabInfo) => {
    switch (tabInfo.key) {
      case "basic":
        return {
          title: tabInfo.title,
          children: basic,
        };
      case "funding":
        return {
          title: tabInfo.title,
          children: funding,
        };
      default:
        return {
          title: tabInfo.title,
          children: null,
        };
    }
  };

  return (
    <div>
      <Tabs variant="underlined" size="lg" fullWidth>
        {tabsInfo.map((tabInfo) => (
          <Tab key={tabInfo.key} {...getTabProps(tabInfo)}>
            <div className="m-4 ">{getTabProps(tabInfo).children}</div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
