import React from 'react';
import Image from "next/image";
import Break from "@/components/Break";
import SkillRow from "@/components/SkillRow";
import SocialBar from "@/components/SocialBar";

export default function HeroSection() {
  return (
    <section id="home" className="p-6">
      <div className="flex flex-col items-center justify-center text-center md:flex-row md:justify-start md:text-left md:space-x-6">
        <div className="flex justify-center items-center md:w-1/2">
          <Image
            src="/me_big.jpg"
            alt="Kenny Worden"
            style={{border: "1px solid black", borderRadius: '50%'}}
            width={270}
            height={270}
            />
        </div>
        <div className="justify-items-center mt-4 md:mt-0 md:w-3/5 md:justify-items-start">
          <h1 className="font-bold text-5xl mb-4 mt-4">Kenny Worden</h1>
          <Break relaxCenter={true} />
          <p>
            Hi! My name is Kenny Worden. I am a <strong>senior software engineer</strong> with a strong
            background in web and mobile application development. This is my site where
            you can learn a little more about who I am as a developer.
          </p>
          <br />
          <p>
            This site is hand-designed by me using Next.js, React, and Tailwind CSS :^)
          </p>
          <br />
          <p>
            You can view the site&apos;s source code <a className="text-amber-500 font-bold hover:underline" href="https://github.com/kkworden/kenny-worden-web">here</a>.
          </p>
          <br />
          <SocialBar />
          <SkillRow skills={["6+ YoE", "Backend", "Infra", "SRE", "Full-Stack", "Web", "Android"]} />
        </div>
      </div>
    </section>
  );
}