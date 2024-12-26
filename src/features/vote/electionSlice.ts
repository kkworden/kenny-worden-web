"use client";

import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

export enum ElectionPhase {
  NOMINATION,
  VOTING,
  COMPLETE,
}

export interface ElectionState {
  id: string,
  name: string,
  electionPhase: ElectionPhase,
  options: string[],
  until: Date,
  haveVoted: boolean,
  myNomination?: string,
}

const initialState: ElectionState = {
  id: "",
  name: "",
  electionPhase: ElectionPhase.NOMINATION,
  options: [],
  until: new Date(),
  haveVoted: false,
}

/**
 * Async thunk to update election state.
 *
 * TODO: Needs authentication.
 */
export const refreshElectionState = createAsyncThunk(
  'election/refresh',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/election/${id}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
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

export const addNomination = createAsyncThunk(
  'election/addNomination',
  async (payload: { id: string, nomination: string, }, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`/api/election/${payload.id}/nomination`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nomination: payload.nomination,
          }),
        }
      );

      if (!response.ok) {
        return rejectWithValue('Challenge was incorrect.');
      }

      // Refresh the election state after adding a nomination.
      dispatch(refreshElectionState(payload.id))
      return response.json();
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

export const getNomination = createAsyncThunk(
  'election/getNomination',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/election/${id}/nomination`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
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

function convertToState(json: any): ElectionState {
  return {
    id: json.id,
    name: json.name,
    electionPhase: json.electionPhase,
    options: json.options,
    until: new Date(json.until),
    haveVoted: false,
  }
}

export const electionSlice = createSlice({
  name: 'election',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(refreshElectionState.fulfilled, (_state, action) => {
        return convertToState(action.payload)
      })
      .addCase(refreshElectionState.rejected, (_state, action) => {
        console.log("failed to refresh")
        console.log(action.error)
      })
      .addCase(addNomination.rejected, (_state, action) => {
        console.log("failed to add nomination")
        console.log(action.error)
      })
  },
})

export default electionSlice.reducer