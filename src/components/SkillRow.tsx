import React from 'react';
import Skill from "@/components/Skill";

interface SkillRowProps {
  skills: Array<string>
}

export default function SkillRow({ skills }: SkillRowProps) {
  return (<div className="flex flex-row flex-wrap mt-4 space-x-2">
    {skills.map((skill, i) => (
      <Skill key={i} skillName={skill}/>
    ))}
  </div>);
}