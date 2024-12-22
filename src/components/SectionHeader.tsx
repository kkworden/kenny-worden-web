import React from 'react';
import Break from "@/components/Break";

interface SectionHeaderProps {
  title: string,
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (<div className="justify-items-center">
    <h1 className="section-header font-bold text-3xl p-2 text-center">{title}</h1>
    <Break />
  </div>)
}