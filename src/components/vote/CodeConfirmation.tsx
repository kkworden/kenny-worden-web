import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { store, RootState} from "@/features/vote/store";
import { confirmSmsCode, unauthenticate } from "@/features/vote/authSlice";

export default function CodeConfirmation() {

  const phoneNumber = useSelector((state: RootState) => state.auth.phoneNumber);
  const [smsCode, setSmsCode] = useState("");

  const submitChallenge = () => {
    store.dispatch(confirmSmsCode({ challenge: smsCode, phoneNumber: phoneNumber}))
  }

  return (<>
    <p>A code was sent to {phoneNumber}</p>
    <input type="text" placeholder="Code" onChange={(e) => setSmsCode(e.target.value)} />
    <div>
      <button onClick={() => store.dispatch(unauthenticate())}>Go back</button>
      <button onClick={submitChallenge}>Submit</button>
    </div>
  </>);
}