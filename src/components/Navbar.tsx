'use client';
import React from 'react';
import Link from "next/link";

interface NavItem {
  label: string,
  route: string,
}

const PAGES: Array<NavItem> = [
  {
    label: "home",
    route: "home",
  },
  {
    label: "experience",
    route: "experience",
  },
  {
    label: "skills",
    route: "skills",
  },
  {
    label: "resume",
    route: "resume",
  },
  {
    label: "my story",
    route: "my-story",
  },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element === null) {
    window.location.href = "/";
    return;
  }
  const yOffset = -55;
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({top: y, behavior: 'smooth'});
};

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  function getMenuClasses() {
    let menuClasses: string[] = [];
    if (isOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "items-center",
        "top-[64px]",
        "bg-amber-100",
        "w-full",
        "left-0",
        "flex-col",
        "text-center",
        "justify-center",
      ];
    } else {
      menuClasses = ["hidden", "md:flex"];
    }
    return menuClasses.join(" ");
  }

  function getLinkClasses() {
    const linkClasses: string[] = [
      "text-lg",
      "md:text-sm",
      "hover:text-amber-600",
      "p-8",
      "md:p-0",
      "md:hover:bg-none"
    ];
    if (isOpen) {
      linkClasses.push("w-full")
      linkClasses.push("hover:bg-amber-200")
    }
    return linkClasses.join(" ");
  }

  function goToSectionAndClose(route: string) {
    if (isOpen) {
      setIsOpen(false);
    }
    scrollToSection(route);
  }

  return (
    <header className="w-full h-16 bg-slate-100 shadow fixed z-10">
      <nav className="justify-between items-center flex h-full w-full p-2">
        <div className="p-4 space-x-6">
          <Link href="/">kennyworden.dev</Link>
        </div>
        <div className={`${getMenuClasses()} md:p-4 md:space-x-6`}>
          {PAGES.map(({ label, route }, i) =>
            <button
              key={i}
              className={getLinkClasses()}
              onClick={()=> goToSectionAndClose(route)}>
              {label.toUpperCase()}
            </button>
          )}
        </div>
        <div className="md:hidden flex">
          <button className="p-3 bg-amber-100" style={{border: "1px solid black"}} onClick={()=> setIsOpen(!isOpen)}>
            Menu
          </button>
        </div>
      </nav>
    </header>
  );
}