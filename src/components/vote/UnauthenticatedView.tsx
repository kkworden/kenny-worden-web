"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { store, RootState} from "@/features/vote/store";
import { setPhoneNumber, waitForChallenge } from "@/features/vote/authSlice";

export default function UnauthenticatedView() {

  const phoneNumber = useSelector((state: RootState) => state.auth.phoneNumber);

  const getConfirmationCode = () => {
    alert('Sending SMS...');
    store.dispatch(waitForChallenge());
  }

  return (<>
    <p>Enter your phone number to confirm your identity.</p>
    <input
      type="text"
      placeholder="Phone number"
      value={phoneNumber}
      onChange={(e) => store.dispatch(setPhoneNumber(e.target.value))}
      />
    <button onClick={() => getConfirmationCode()}>Submit</button>
  </>);
}