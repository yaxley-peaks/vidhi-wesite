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
            className={({ isActive }) =>
              isActive
                ? "navbar-item navbar-active"
                : "navbar-item navbar-inactive"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"about-us"}
            className={({ isActive }) =>
              isActive
                ? "navbar-item navbar-active"
                : "navbar-item navbar-inactive"
            }
          >
            About us
          </NavLink>
          <NavLink
            to={"yagna"}
            className={({ isActive }) =>
              isActive
                ? "navbar-item navbar-active"
                : "navbar-item navbar-inactive"
            }
          >
            Yagna
          </NavLink>
          <NavLink
            to={"donation"}
            className={({ isActive }) =>
              isActive
                ? "navbar-item navbar-active"
                : "navbar-item navbar-inactive"
            }
          >
            Donation
          </NavLink>
          <NavLink
            to={"contact"}
            className={({ isActive }) =>
              isActive
                ? "navbar-item navbar-active"
                : "navbar-item navbar-inactive"
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
      <div className="w-full h-navbar"></div>
    </>
  );
}
