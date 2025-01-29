import React from 'react';
import Experience from "@/components/Experience";
import SectionHeader from "@/components/SectionHeader";

interface Position {
  title: string,
  startDate: string,
  endDate: string,
  description?: string,
}

interface ExperienceInformation {
  imageSrc: string,
  companyName: string,
  positions: Array<Position>,
}

const EXPERIENCES: Array<ExperienceInformation> = [
  {
    imageSrc: "/duolingo.png",
    companyName: "Duolingo",
    positions: [{
      title: "Senior Software Engineer",
      startDate: "February 2024",
      endDate: "(current)",
      description: "Tech leading the Video Call with Lily team as a backend product engineer. Set up an online LLM evaluation " +
        "system for Video Call, collaborated with product and design teams to launch post-session transcript, increasing session " +
        "completions by +0.5%."
    },
    {
      title: "Software Engineer II",
      startDate: "April 2022",
      endDate: "February 2024",
      description: "Worked on multiple Learning Area infrastructure teams. Created a course change simulator, drastically " +
        "improved Duolingo's course API performance on older Android devices, which led to a -10% drop in app open latency " +
        "and reduced client crashes by -2.5%. Helped in incident recovery, and wrote the playbook for user progress incident " +
        "recovery."
    }],
  },
  {
    imageSrc: "/capsule.png",
    companyName: "Capsule",
    positions: [{
      title: "Site Reliability Engineer II",
      startDate: "September 2021",
      endDate: "April 2022",
      description: "Took a short stint as an SRE. Learned how to operate an EKS cluster. Wrote custom Terraform modules. " +
        "Despite the short tenure, created an AWS permissioning CLI for the entire engineering organization!"
    }],
  },
  {
    imageSrc: "/aws.png",
    companyName: "Amazon Web Services (AWS)",
    positions: [{
      title: "Software Development Engineer II",
      startDate: "October 2020",
      endDate: "September 2021",
      description: "Wrote a custom policy-based authorization system for controlling access to AWS' internal billing application."
    }, {
      title: "Software Development Engineer I",
      startDate: "July 2019",
      endDate: "October 2020",
      description: "Supported internal teams in migrating service infrastructure and data to China for data soverignity compliance."
    }],
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="p-6 bg-slate-50">
      <SectionHeader title="Experience" />
      <div className="flex flex-col items-center justify-center text-center">
        {EXPERIENCES.map(({ imageSrc, companyName, positions }, i) => (
          <Experience
            key={i}
            reverse={true}
            imageSrc={imageSrc}
            companyName={companyName}
            positions={positions}
          />
        ))}
      </div>
    </section>
  );
}