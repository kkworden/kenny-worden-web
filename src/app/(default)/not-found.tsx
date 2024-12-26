import Break from "@/components/Break";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="justify-items-center p-12">
      <h1 className="font-bold text-5xl mb-4 mt-8">404 - Not found</h1>
      <Break/>
      <p>
        Whoops! You may want to go <Link className="underline" href="/public">back to the home page</Link>.
      </p>
    </div>
  );
}
