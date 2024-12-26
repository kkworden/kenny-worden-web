"use client";

import React from "react";
import {useRouter} from "next/navigation";

// TODO: Need to implement the find function
export default function FindElection() {

  const router = useRouter();

  return (<div className="flex flex-col gap-4">
    <h1>Enter your election code</h1>
    <input type="text" />
    <button>Find election</button>
    <h2>OR</h2>
    <button onClick={() => router.push("/vote/create")}>Create new election</button>
  </div>);
}
