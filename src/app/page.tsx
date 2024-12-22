import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import MyStorySection from "@/components/sections/MyStorySection";
import ResumeSection from "@/components/sections/ResumeSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ResumeSection />
      <MyStorySection />
    </div>
  );
}
