import React from 'react';
import Image from "next/image";
import Break from "@/components/Break";

interface CompanyLogoProps {
  reverse: boolean
  imageSrc: string,
  companyName: string,
}

interface CompanyInfoProps {
  companyName: string,
  positions: Array<Position>,
}

interface Position {
  title: string,
  description?: string,
  startDate: string,
  endDate: string,
}

interface ExperienceProps extends CompanyLogoProps, CompanyInfoProps {
  reverse: boolean,
}

/**
 * Map of classes for child components
 */
const classes = {
  logo: (reverse: boolean): string =>  {
    return reverse ? "m-6 w-full justify-items-center md:w-2/5 md:justify-items-center" :
      "m-6 w-full justify-items-center md:w-2/5 md:justify-items-center"
  },
  info: "m-6 w-full md:w-3/5 lg:w-2/5 p-6 align-center bg-white justify-items-center",
  experience: (reverse: boolean): string => {
    return reverse ? "flex flex-col-reverse md:flex-row place-items-center text-center w-full" :
      "flex flex-col md:flex-row place-items-center text-center w-full"
  }
};

function CompanyLogo({ reverse, imageSrc, companyName }: CompanyLogoProps)  {
  return (<div className={classes.logo(reverse)}>
    <Image
      className="p-6 bg-white"
      style={{border: "1px solid black"}}
      src={imageSrc}
      alt={companyName}
      width={180}
      height={180}
    />
  </div>);
}

function CompanyInfo({ companyName, positions }: CompanyInfoProps)  {
  return (<div className={classes.info} style={{border: "1px solid black"}}>
    <h2 className="font-bold text-xl">{companyName}</h2>
    <Break />
    {positions.map((position: Position, i: number) => (
      <div key={i} className="mt-6 text-left w-full">
        <h3 className="text-lg">{position.title}</h3>
        <em className="text-sm">{position.startDate} - {position.endDate}</em>
        <p className="text-sm mt-2">{position.description}</p>
      </div>
    ))}

  </div>);
}

export default function Experience({reverse, imageSrc, companyName, positions}: ExperienceProps) {
  const children: React.JSX.Element = reverse ? (
    <>
      <div className="w-0 lg:w-1/5"></div>
      <CompanyInfo companyName={companyName} positions={positions} />
      <CompanyLogo reverse={reverse} imageSrc={imageSrc} companyName={companyName} />
    </>
  ) : (
    <>
      <CompanyLogo reverse={reverse} imageSrc={imageSrc} companyName={companyName}/>
      <CompanyInfo companyName={companyName} positions={positions}/>
      <div className="w-0 lg:w-1/5"></div>
    </>
  );

  return (
    <div className={classes.experience(reverse)}>
      {children}
    </div>
  )
}