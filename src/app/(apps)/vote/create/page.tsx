"use client";

import React, {FormEvent, useState} from "react";
import TimeSelector from "@/components/vote/TimeSelector";
import ElectionCreationResponse from "@/model/ElectionCreationResponse";
import {useRouter} from "next/navigation";
import ElectionCreationRequest from "@/model/ElectionCreationRequest";

export default function FindElection() {

  const router = useRouter();

  const defaultName = "Ranked choice vote";
  const [name, setName] = useState(defaultName);

  const defaultTime = 10;
  const [nominationTime, setNominationTime] = useState(defaultTime);
  const [votingTime, setVotingTime] = useState(defaultTime);

  const defaultUnit = "minute";
  const [nominationTimeUnit, setNominationTimeUnit] = useState(defaultUnit);
  const [votingTimeUnit, setVotingTimeUnit] = useState(defaultUnit);

  const formattedNominationTimeUnit = (nominationTime === 1) ? nominationTimeUnit : nominationTimeUnit + "s";
  const formattedVotingTimeUnit = (votingTime === 1) ? votingTimeUnit : votingTimeUnit + "s";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body: ElectionCreationRequest = {
      name,
      nominationTime,
      nominationTimeUnit,
      votingTime,
      votingTimeUnit,
    }

    fetch("/api/election/create", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed to create election");
    }).then((response: ElectionCreationResponse) => {
      router.replace(`/vote/${response.id}`);
    }).catch((error) => {
      console.error(error);
    })
  }

  return (<div className="flex flex-col gap-4">
    <h1>Create a new ranked choice election</h1>
    <form
      className="flex flex-col"
      action="/api/election/create"
      method="POST"
      onSubmit={handleSubmit}>
      <label htmlFor="name">Election name</label>
      <input
        type="text"
        name="name"
        defaultValue={defaultName}
        onChange={(e) => setName(e.target.value)} />

      <TimeSelector
        title={"Nomination window"}
        prefix={"nomination"}
        time={nominationTime}
        setTime={setNominationTime}
        timeUnit={nominationTimeUnit}
        setTimeUnit={setNominationTimeUnit} />

      <TimeSelector
        title={"Voting time"}
        prefix={"voting"}
        time={votingTime}
        setTime={setVotingTime}
        timeUnit={votingTimeUnit}
        setTimeUnit={setVotingTimeUnit} />

      <p>You are creating an election named <strong>&quot;{name}&quot;</strong> with a nomination window
        of <strong>{nominationTime} {formattedNominationTimeUnit}</strong>.</p>
      <p>The voting will be open for <strong>{votingTime} {formattedVotingTimeUnit}</strong>.</p>
      <div className="flex flex-row">
        <button>Go back</button>
        <button>Create new election</button>
      </div>
    </form>
  </div>
);
}
