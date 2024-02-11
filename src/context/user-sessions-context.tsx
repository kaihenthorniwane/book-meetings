import { createContext, useReducer, type ReactNode } from "react";

type EventTime = {
  start: Date;
  end: Date;
  isBooked: boolean;
};

export type Event = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  date: Date;
  times: EventTime[];
};

type UserEventsContextState = {
  events: Event[];
};

type UserEventsContextValue = UserEventsContextState & {
  getEvents: () => void;
};

type UserEventsContextProviderProps = {
  children: ReactNode;
};

type ActionRefreshEvents = {
  mode: "REFRESH_EVENTS";
};

type ActionAddEventByID = {
  mode: "ADD_EVENT";
};

type ActionRemoveByID = {
  mode: "REFRESH_EVENTS";
};

type Action = ActionRefreshEvents;

const UserEventsContext = createContext<UserEventsContextValue | null>(null);

const initialState: UserEventsContextState = {
  events: [],
};

function reducer(
  state: UserEventsContextState,
  action: Action
): UserEventsContextState {
  return state;
}

export default function UserEventsContextProvider(
  props: UserEventsContextProviderProps
) {
  const [eventsState, dispatch] = useReducer(reducer, initialState);

  const userEventsContextProviderInput: UserEventsContextValue = {
    events: eventsState.events,
    getEvents: () => {},
  };

  return (
    <UserEventsContext.Provider value={userEventsContextProviderInput}>
      {props.children}
    </UserEventsContext.Provider>
  );
}
