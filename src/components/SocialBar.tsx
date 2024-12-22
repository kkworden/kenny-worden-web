import React from 'react';
import Image from "next/image";

const socialSize: number = 35;

export default function SocialBar() {
  return (<div className="flex space-x-4">
    <a href="https://linkedin.com/in/kenneth-worden">
      <Image src="/linkedin_social.svg" height={socialSize} width={socialSize} alt="LinkedIn"/>
    </a>
    <a href="https://github.com/kkworden">
      <Image src="/github_social.svg" height={socialSize} width={socialSize} alt="Github"/>
    </a>
    <a href="https://medium.com/@kkworden">
      <Image src="/medium_social.svg" height={socialSize} width={socialSize} alt="Medium"/>
    </a>
  </div>)
}