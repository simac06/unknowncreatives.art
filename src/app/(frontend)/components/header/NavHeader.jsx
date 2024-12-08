// import { FaPersonWalking, FaArrowRightToBracket } from "react-icons/fa6";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
//   Link,
//   Button,
// } from "@nextui-org/react";

// export default function NavHeader({ isIndexPage }) {
//   console.log("Is index page:", isIndexPage);

//   return (
//     <Navbar
//       maxWidth="2xl"
//       className="bg-background absolute top-0"
//       isBlurred="false"
//     >
//       <NavbarBrand>
//         <p className="font-bold text-xl text-inherit">acme</p>
//       </NavbarBrand>

//       <NavbarContent justify="end">
//         <NavbarItem className="">
//           <Link
//             className="text-white flex justify-center items-center gap-1 text-tiny font-sans font-[600] tracking-wider"
//             href="#"
//           >
//             <span className="">SIGN IN</span>
//             <FaPersonWalking className=" " />
//             <FaArrowRightToBracket className=" " />
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// }

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NavHeader({ position }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navBarPosition =
    position === "absolute" ? "absolute top-0 bg-transparent" : "";

  const menuItems = [
    "Explore Campaigns",
    "Notifications",
    "Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      className={navBarPosition}
    >
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-xl">acme</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
