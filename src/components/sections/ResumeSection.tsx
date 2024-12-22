import React from 'react';
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

export default function ResumeSection() {
  return (
    <section id="resume" className="p-6 bg-slate-50">
      <SectionHeader title="Resume" />
      <div className="flex flex-col items-center justify-center text-center">
        <p>
          Click the below image to download a copy of my resume! Opens in a new tab.
        </p>
        <br />
        <br />
        <a href="https://kfabna29za5t.s3.us-east-1.amazonaws.com/Resume_2025.pdf" target="_blank">
          <Image
            src="/pdf.svg"
            alt="Click to download my resume!"
            width={150}
            height={150} />
        </a>
      </div>
    </section>
  );
}