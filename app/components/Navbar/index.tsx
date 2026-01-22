import type { JSX } from "react";

import Logo from "./logo.png";
import { NavLink } from "react-router";

export default function (): JSX.Element {
  return (
    <>
      <nav className="h-navbar z-40 bg-fg-2 flex flex-row items-center justify-between px-20 shadow-black shadow-xl/20 fixed top-0 w-full rounded-b-4xl">
        <div className="py-2.5 shrink-0">
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex flex-row justify-center gap-12 text-bg-1 font-bold">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "bg-red-500" : "bg-fg-2")}
          >
            Home
          </NavLink>
          <NavLink
            to={"about-us"}
            className={({ isActive }) => (isActive ? "bg-red-500" : "bg-fg-2")}
          >
            About us
          </NavLink>
          <NavLink
            to={"media"}
            className={({ isActive }) => (isActive ? "bg-red-500" : "bg-fg-2")}
          >
            Media
          </NavLink>
          <NavLink
            to={"donation"}
            className={({ isActive }) => (isActive ? "bg-red-500" : "bg-fg-2")}
          >
            Donation
          </NavLink>
          <NavLink
            to={"contact"}
            className={({ isActive }) => (isActive ? "bg-red-500" : "bg-fg-2")}
          >
            Contact
          </NavLink>
          <NavLink
            to={"contact"}
            className={({ isActive }) => (isActive ? "bg-red-500" : "bg-fg-2")}
          >
            Contact
          </NavLink>

          <NavLink
            to={"donate"}
            className={({ isActive }) => {
              return `text-bg-2 ${isActive ? "bg-red-500" : "bg-fg-2"}`;
            }}
          >
            Donate
          </NavLink>
        </div>
      </nav>
      <div className="w-full h-navbar"></div>
    </>
  );
}
