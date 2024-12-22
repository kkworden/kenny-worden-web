import React from 'react';
import SectionHeader from "@/components/SectionHeader";

export default function MyStorySection() {
  return (
    <section id="my-story" className="p-6">
      <SectionHeader title="My Story"/>
      <div className="flex">
        <div className="w-0 lg:w-1/5"></div>
        <div className="w-full lg:w-3/5 p-6 bg-white" style={{border: "1px solid black"}}>
          <p>
            I started programming back in middle school. I was big into Minecraft and
            ran a few servers over many years. To support my Minecraft community, I created
            a custom web forum in PHP, running on a LAMP stack
            on <a className="text-amber-500 font-bold hover:underline" href="https://www.hostgator.com/">Hostgator</a>.
            From this experience, I learned how to secure my application from SQL injection
            attacks, to hash and salt user passwords, and in general, what making a full
            end-to-end web application involved. My web forum, <a className="text-amber-500 font-bold hover:underline" href="https://www.hostgator.com/">kapip.com</a>, had around
            20 DAUs at its peak. Not many users, but I enjoyed building a community and positively
            impacting my community&apos;s players, which is a goal that keeps me going even today.
          </p>
          <br/>
          <p>
            As time went on, I learned how to modify my Minecraft server using
            the <a className="text-amber-500 font-bold hover:underline" href="https://bukkit.org">Bukkit</a> API, which taught me Java. This
            was my first introduction to systems administration. I made many custom game
            modes, including Hunger Games, Prison, Riot, and Team Deathmatch mods. One
            fateful night, my server was getting a lot of attention on a Twitch stream, and
            the server, which was running from my parents&apos; basement, was DDoS&apos;d! That
            taught me about site reliability and security early on, as well as the benefits
            of cloud computing providers.
          </p>
          <br/>
          <p>
            In college, I gave up Minecraft and decided to pursue The Next Big Thing.
            Despite my lack of experience, I was determined to make <em>something</em>.
          </p>
          <br/>
          <p>
            None of my projects ever took off, but I did make a weightlifting tracker
            Android app, which has since been removed from the Play store, and a dry-cleaning delivery
            service. Neither ever gained any traction. These projects honed my
            full-stack skills, but as I became a professional, I focused more on backend
            and infrastructure.
          </p>
          <br />
          <p>
            I worked at a few companies typically in backend and infrastructure, and I did go to
            the start-up, Capsule, to try my hand as an SRE. I eventually ended up at Duolingo,
            where I currently work on the LLM application, <a className="text-amber-500 font-bold hover:underline" href="https://blog.duolingo.com/video-call/">Video Call with Lily</a>.
            If you haven&apos;t checked out Video Call, definitely do! It is an amazing feature, and I
            have definitely improved my Spanish skills just by having to debug the experience!
          </p>
          <br/>
          <p>
            I am a mission-driven engineer, so there is nothing that I won&apos;t work on. My personal
            experience in web and mobile application development, along with my infrastructure/SRE
            professional experience, means that I can solve any problem. Although I am a backend
            engineer by trade, my understanding is rooted in the web and mobile apps. I have
            dealt with attacks, recovered from data breaches (R.I.P. Capsule), ran user-impacting
            incidents, but I have also prototyped new technology (Video Call) and built out
            awesome user experiences. Really, the only thing I don&apos;t know at this point is
            iOS, but I&apos;m willing to learn anything!
          </p>
        </div>
        <div className="w-0 lg:w-1/5"></div>
      </div>
    </section>
  );
}