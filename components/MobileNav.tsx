import Link from "next/link";
import React from "react";

const navs = [
  { name: "home", href: "/" },
  { name: "features", href: "/features" },
  { name: "about", href: "/about" },
  { name: "contact", href: "/contact" },
];
export default function MobileNav() {
  return (
    <div className="md:hidden absolute top-16 left-0 w-full">
      <ul className="space-y-1 border-t bg-white px-2 pt-2 pb-3 sm:px-3">
        {navs.map((nav) => (
          <li key={nav.name}>
            <Link
              href={nav.href}
              className="block capitalize cursor-pointer px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600"
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
