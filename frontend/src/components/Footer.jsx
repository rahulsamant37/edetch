import * as React from "react";
import { NavigationLink } from "./NavigationLink";
import { Divider } from "./Divider";

export function Footer() {
  const navigationItems = [
    "FAQ",
    "Privacy Policy",
    "Terms of Service",
    "Contact Us"
  ];

  return (
    <div className="flex overflow-hidden flex-wrap gap-10 px-16 py-7 font-light text-center bg-white  text-zinc-900 max-md:px-5 mt-[12vh]">
      <div className="flex gap-2 items-center my-auto text-[10px]">
        {navigationItems.map((item, index) => (
          <React.Fragment key={item}>
            <NavigationLink text={item} />
            {index < navigationItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
     
    </div>
  );
}