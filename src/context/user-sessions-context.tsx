"use client";

import { createContext, useContext, useReducer, type ReactNode } from "react";

export type EventTime = {
  id: string;
  start: Date;
  end: Date;
  isBooked: boolean;
};

export type EventInfo = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  date: Date;
  times: EventTime[];
};

export type BookedEventReference = {
  eventID: string;
  timeID: string;
};

type UserEventsContextState = {
  eventReferences: BookedEventReference[];
};

type UserEventsContextValue = UserEventsContextState & {
  addEventByID: (eventReference: BookedEventReference) => void;
  removeEventByID: (eventReference: BookedEventReference) => void;
};

type UserEventsContextProviderProps = {
  children: ReactNode;
};

type ActionAddEventByID = {
  mode: "ADD_EVENT";
  payload?: BookedEventReference;
};

type ActionRemoveByID = {
  mode: "REMOVE_EVENT";
  payload?: BookedEventReference;
};

type Action = ActionAddEventByID | ActionRemoveByID;

const UserEventsContext = createContext<UserEventsContextValue | null>(null);

const initialState: UserEventsContextState = {
  eventReferences: [],
};

function reducer(
  state: UserEventsContextState,
  action: Action
): UserEventsContextState {
  if (action.mode === "ADD_EVENT" && action.payload) {
    const eventReferenceToAdd: BookedEventReference = action.payload;
    return {
      ...state,
      eventReferences: [...state.eventReferences, eventReferenceToAdd],
    };
  }
  if (action.mode === "REMOVE_EVENT" && action.payload) {
    const eventReferenceToCheck: BookedEventReference = action.payload;
    const filteredEvents: BookedEventReference[] = state.eventReferences.filter(
      (eventReference) =>
        !(
          eventReference.eventID === eventReferenceToCheck.eventID &&
          eventReference.timeID === eventReferenceToCheck.timeID
        )
    );
    return { ...state, eventReferences: filteredEvents };
  }
  return state;
}

export default function UserEventsContextProvider(
  props: UserEventsContextProviderProps
) {
  const [eventsState, dispatch] = useReducer(reducer, initialState);

  const userEventsContextProviderInput: UserEventsContextValue = {
    eventReferences: eventsState.eventReferences,
    addEventByID: (eventReference: BookedEventReference) => {
      dispatch({ mode: "ADD_EVENT", payload: eventReference });
    },
    removeEventByID: (eventReference: BookedEventReference) => {
      dispatch({ mode: "REMOVE_EVENT", payload: eventReference });
    },
  };

  return (
    <UserEventsContext.Provider value={userEventsContextProviderInput}>
      {props.children}
    </UserEventsContext.Provider>
  );
}

export function useUserSessionsContext() {
  const context = useContext(UserEventsContext);

  if (context === null) {
    throw new Error("Context is null");
  }

  return context;
}
