"use client";

import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

/**
 * Enum to represent the state of the authentication process.
 */
export enum AuthState {
  UNAUTHENTICATED,
  WAITING_FOR_CHALLENGE,
  WAITING_FOR_CHALLENGE_RESPONSE,
  AUTHENTICATED,
  FAILED,
}

/**
 * Interface to represent the state of the authentication process.
 */
export interface AuthenticationState {
  authState: AuthState,
  phoneNumber: string,
  jwt: string,
}

/**
 * Initial state of the authentication process.
 */
const initialState: AuthenticationState = {
  authState: AuthState.UNAUTHENTICATED,
  phoneNumber: "",
  jwt: "",
}

/**
 * Async thunk to confirm the SMS code.
 */
export const confirmSmsCode = createAsyncThunk(
  'auth/confirmSmsCode',
  async (payload: { challenge: string; phoneNumber: string }, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/election/auth',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            challenge: payload.challenge,
            phoneNumber: payload.phoneNumber,
          })
        }
      );

      if (!response.ok) {
        return rejectWithValue('Challenge was incorrect.');
      }

      return response.json();
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      console.log("Setting phone number to", action.payload);
      state.phoneNumber = action.payload
    },
    waitForChallenge: (state) => {
      state.authState = AuthState.WAITING_FOR_CHALLENGE
    },
    unauthenticate: (state) => {
      state.authState = AuthState.UNAUTHENTICATED
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(confirmSmsCode.pending, (state) => {
        state.authState = AuthState.WAITING_FOR_CHALLENGE_RESPONSE;
      })
      .addCase(confirmSmsCode.fulfilled, (state, action) => {
        state.authState = AuthState.AUTHENTICATED;
        state.jwt = action.payload;
      })
      .addCase(confirmSmsCode.rejected, (state, action) => {
        state.authState = AuthState.FAILED;
        console.log("failed")
        console.log(action.error)
      })
  },
})

// Action creators are generated for each case reducer function
export const { setPhoneNumber, waitForChallenge, unauthenticate } = authSlice.actions

export default authSlice.reducer