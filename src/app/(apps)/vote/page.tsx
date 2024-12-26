"use client";

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState} from "@/features/vote/store";
import UnauthenticatedView from "@/components/vote/UnauthenticatedView";
import CodeConfirmation from "@/components/vote/CodeConfirmation";
import {AuthState} from "@/features/vote/authSlice";
import React, {useEffect} from "react";

export default function VoteAuthenticationView() {

  const router = useRouter();
  const authState = useSelector((state: RootState) => state.auth.authState);

  useEffect(() => {
    if (authState === AuthState.AUTHENTICATED) {
      router.push("/vote/find");
    }
  }, [router, authState]);

  let view = <UnauthenticatedView />;
  if (authState !== AuthState.UNAUTHENTICATED) {
    view = <CodeConfirmation />;
  }

  // TODO: Handle failure case, actually implement the challenge on the backend

  return (<div className="flex flex-col gap-4">
    {view}
  </div>);
}
