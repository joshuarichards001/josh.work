"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = {
  "/": {
    name: "home",
  },
  "/work": {
    name: "work",
  },
  "/projects": {
    name: "projects",
  },
  // "/blog": {
  //   name: "blog",
  // },
  "/about": {
    name: "about",
  },
};

export default function Sidebar() {
  let pathname = usePathname() || "/";
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <p className="text-5xl">J</p>
        </div>
        <nav
          className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle ${
                    isActive ? "font-bold" : "text-neutral-500"
                  }`}
                >
                  <span className="relative py-[5px] px-[10px]">
                    {name}
                    {path === pathname ? (
                      <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]" />
                    ) : null}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
