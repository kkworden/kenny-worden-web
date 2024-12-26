import { createContext } from "react";

interface VoteContext {
  electionCode: string
  setElectionCode: (electionCode: string) => void
}

export default createContext<VoteContext>({} as VoteContext);