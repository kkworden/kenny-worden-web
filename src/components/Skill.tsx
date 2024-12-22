import React from 'react';

interface SkillProps {
  skillName: string
}

export default function Skill({ skillName }: SkillProps) {
  return (<div className="p-3 mt-2 text-sm bg-amber-100">
    {skillName}
  </div>)
}