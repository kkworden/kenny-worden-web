import { createContext } from "react";

export enum AuthenticationState {
  UNAUTHENTICATED,
  AUTHENTICATING,
  AUTHENTICATED,
}

interface VoteAuthNContext {
  authenticationState: AuthenticationState
  setAuthenticationState: (state: AuthenticationState) => void

  phoneNumber: string
  setPhoneNumber: (phoneNumber: string) => void
}

export default createContext<VoteAuthNContext>({} as VoteAuthNContext);