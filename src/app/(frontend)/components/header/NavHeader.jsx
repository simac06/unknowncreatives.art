import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

export default function NavHeader({ position }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navBarPosition =
    position === "absolute" ? "absolute top-0 bg-transparent" : "";

  const menuItems = [
    { name: "Explore Campaigns", path: "/campaigns" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Link page", path: "/" },
  ];

  // Animation variants for menu items
  const menuAnimations = {
    hidden: (i) => ({
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.2,
        delay: i * 0.1, // Stagger effect
      },
    }),
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.15, // Stagger effect
      },
    }),
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      className={navBarPosition}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link color="foreground" href="/" className="font-bold text-xl">
            acme
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
      </NavbarContent>
      <NavbarMenu className="">
        <div className="h-2/3 flex flex-col justify-evenly">
          {menuItems.map((item, index) => (
            <motion.div
              key={`${item}-${index}`}
              className=""
              custom={index}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              variants={menuAnimations}
            >
              <NavbarMenuItem>
                <Link
                  href={item.path}
                  color={
                    index === 2
                      ? "primary"
                      : index === menuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  className="w-full text-3xl"
                  size="lg"
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
            </motion.div>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
