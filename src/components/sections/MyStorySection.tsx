import React from 'react';
import SectionHeader from "@/components/SectionHeader";

export default function MyStorySection() {
  return (
    <section id="my-story" className="p-12 ">
      <SectionHeader title="My Story"/>
      <div className="flex">
        <div className="w-0 lg:w-1/5"></div>
        <div className="w-full lg:w-3/5 p-6 bg-white" style={{border: "1px solid black"}}>
          <p>
            I started programming back in middle school. I was big into Minecraft and
            ran a server. To support my Minecraft community, I created a custom web forum
            in PHP, running on a LAMP stack on <a href="https://www.hostgator.com/">Hostgator</a>.
            From this experience, I learned how to secure my application from SQL injection
            attacks, to hash and salt user passwords, and in general, what making a full
            end-to-end web application involved.
          </p>
          <br/>
          <p>
            As time went on, I learned how to modify my Minecraft server using the
            <a href="https://bukkit.org">Bukkit</a> API, which taught me Java. This
            was my first introduction to systems administration. I made many custom game
            modes, including a Hunger Games, Prison, Riot, and Team Deathmatch mod. One
            fateful night, my server was getting a lot of attention on a Twitch stream, and
            the server, which was running from my parents&apos; basement, was DDoS&apos;d! That was
            my first step into cloud computing.
          </p>
          <br/>
          <p>
            In college, I gave up Minecraft and decided to pursue making the next big app.
            Despite my lack of experience, I was determined to make <em>something</em>.
          </p>
          <br/>
          <p>
            Unfortunately, none of my projects ever took off, but I did make a weightlifting tracker
            Android app, which has since been removed from the store, and a dry-cleaning delivery
            service which also never gained any traction. These projects honed my full-stack skills,
            but as I became a professional, I turned into a backend software engineer.
          </p>
          <br/>
          <p>
            I am a mission-driven engineer, so there is nothing that I won&apos;t work on. My personal
            experience in web and mobile application development, along with my infrastructure/SRE
            professional experience, means that I can get any problem done.
          </p>
        </div>
        <div className="w-0 lg:w-1/5"></div>
      </div>
    </section>
  );
}