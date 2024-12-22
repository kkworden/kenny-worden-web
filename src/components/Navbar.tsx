'use client';
import React from 'react';

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
  return (
    <header className="w-full h-16 bg-slate-100 shadow fixed">
      <nav className="justify-between items-center flex h-full w-full p-2">
        <div className="p-4 space-x-6">
          kennyworden.dev
        </div>
        <div className="p-4 space-x-6">
          {PAGES.map(({ label, route }, i) =>
            <button className="text-sm" key={i} onClick={()=> scrollToSection(route)}>{label.toUpperCase()}</button>
          )}
        </div>
      </nav>
    </header>
  );
}