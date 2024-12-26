"use client";

import React from "react";
import {useParams} from "next/navigation";

// TODO: Need to implement everything
export default function FindElection() {

  const {id} = useParams();

  return (<div className="flex flex-col gap-4">
    <h1>Election ID: {id}</h1>
  </div>);
}
