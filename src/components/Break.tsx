import React from 'react';

interface BreakProps {
  relaxCenter?: boolean;
}

export default function Break({ relaxCenter }: BreakProps) {
  function getBreakClasses() {
    const classes = [
      "w-16",
      "h-1",
      "mt-2",
      "mb-6",
      "bg-amber-600",
    ]

    // For a browser compat issue. Can be disabled.
    if (!relaxCenter) {
      classes.push("ml-auto");
      classes.push("mr-auto");
    }

    return classes.join(" ")
  }
  return (
    <div className={getBreakClasses()} style={{borderRadius: "1em"}}></div>
  )
}