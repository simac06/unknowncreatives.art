"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import SideBar from "../../components/dashboard/SideBar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <section>{children}</section>
    </div>
  );
};

export default Layout;
