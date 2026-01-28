import { type JSX, useState } from "react";

import Logo from "../assets/logo.png";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function (): JSX.Element {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "navbar-item navbar-active" : "navbar-item navbar-inactive";

  return (
    <>
      <nav
        className={`h-navbar z-40 bg-fg-2 flex items-center justify-between px-6 lg:px-20 ${open ? "border-b border-black" : "shadow-black shadow-xl/20 rounded-b-4xl"} fixed top-0 w-full `}
      >
        {/* Logo */}
        <div className="py-2.5 shrink-0">
          <img src={Logo} alt="logo" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-row justify-center gap-12 text-bg-1 font-bold">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="about-us" className={navLinkClass}>
            About us
          </NavLink>
          <NavLink to="yagna" className={navLinkClass}>
            Yagna
          </NavLink>
          <NavLink to="donation" className={navLinkClass}>
            Donation
          </NavLink>
          <NavLink to="contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-bg-1 text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
          {/*<i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />*/}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed top-navbar left-0 w-full bg-fg-2 z-30 lg:hidden flex flex-col items-center gap-6 py-8 text-bg-1 font-bold shadow-xl">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            Home
          </NavLink>
          <NavLink
            to="about-us"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            About us
          </NavLink>
          <NavLink
            to="yagna"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            Yagna
          </NavLink>
          <NavLink
            to="donation"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            Donation
          </NavLink>
          <NavLink
            to="contact"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            Contact
          </NavLink>
        </div>
      )}

      {/* Spacer */}
      <div className={`w-full h-navbar ${open ? "hidden" : "block"}`} />
    </>
  );
}
