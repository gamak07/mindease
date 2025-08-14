"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileNav from "./MobileNav";

const navs = [
  { name: "home", href: "/" },
  { name: "features", href: "/features" },
  { name: "about", href: "/about" },
  { name: "contact", href: "/contact" },
];

export default function Navbar() {
  const [currentNav, setCurrentNav] = useState<string>("home");
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const handleMobileNavToggle = () => {
    setShowMobileNav((prev) => !prev);
  };
  const handleCurrentNav = (name: string) => {
    setCurrentNav(name);
  };
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-600">MindEase</h1>
          </div>
          {/* navbar */}
          <nav className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-8">
              {navs.map((nav) => (
                <li key={nav.name}>
                  <Link
                    href={nav.href}
                    onClick={() => handleCurrentNav(nav.name)}
                    className={`cursor-pointer px-3 py-2 text-sm font-medium capitalize transition-colors duration-200 ${
                      currentNav === nav.name
                        ? "border-b-2 border-indigo-600 text-indigo-700"
                        : "text-gray-700 hover:text-indigo-600"
                    }`}
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* menu icon */}
          <div className="md:hidden relative">
            {showMobileNav ? (
              <Button
                className="inline-flex cursor-pointer items-center justify-center rounded-md bg-gray-100 p-2 text-gray-700 hover:text-indigo-600"
                onClick={() => setShowMobileNav(false)}
              >
                <FaTimes className="text-lg" />
              </Button>
            ) : (
              <Button
                className="inline-flex cursor-pointer items-center justify-center rounded-md bg-gray-100 p-2 text-gray-700 hover:text-indigo-600"
                onClick={handleMobileNavToggle}
              >
                <FaBars className="text-lg" />
              </Button>
            )}
          </div>

          {/* mobile nav */}
          {showMobileNav && <MobileNav />}
        </div>
      </div>
    </header>
  );
}
