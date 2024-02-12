type EventTime = {
  start: Date;
  end: Date;
  isBooked: boolean;
};

type Event = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  date: Date;
  times: EventTime[];
};

let events: Event[] = [
  {
    id: "event-0",
    name: "Kickstart with React: Personal Intro",
    tagline: "Tailored guidance for total beginners in React.",
    description:
      "Starting with React can be daunting.\n\nYet, with the right guidance, it can be an exhilarating journey.\n\nIn this session, we will begin by demystifying React's core philosophy.\n\nWhy was React created?\n\nWhat problems does it solve in the world of web development?\n\nTogether, we'll delve into the virtual DOM, JSX, and component-based architecture.\n\nNo need to worry about the jargon; I'll break everything down step by step.\n\nWe'll touch on the importance of unidirectional data flow and the component lifecycle.\n\nWe'll set up a new React project together.\n\nBy the end of our session, you will have a clear understanding and a roadmap tailored just for you, to aid your React journey.",
    image:
      "https://cdn.midjourney.com/62a61d6f-41c8-491b-89e7-502ad76b1b43/0_0.webp",
    date: new Date("2023-10-31"),
    times: [
      {
        start: new Date("2023-10-31T09:00:00"),
        end: new Date("2023-10-31T10:00:00"),
        isBooked: false,
      },
    ],
  },
  {
    id: "event-2",
    name: "Diving Deeper into React: State & Props",
    tagline: "Understanding the core components of React.",
    description:
      "React's power lies in its simplicity and flexibility.\n\nIn this session, we explore two fundamental concepts: state and props.\n\nHow do these concepts help manage data and UI consistency?\n\nWe'll dive deep into stateful vs. stateless components and how props facilitate parent-child communication.\n\nPractical examples will guide us through effective data handling.\n\nBy the end, you'll grasp how to create dynamic, interactive web applications with React.",
    image:
      "https://cdn.midjourney.com/62a61d6f-41c8-491b-89e7-502ad76b1b43/0_0.webp",
    date: new Date("2023-11-07"),
    times: [
      {
        start: new Date("2023-11-07T09:00:00"),
        end: new Date("2023-11-07T10:30:00"),
        isBooked: false,
      },
    ],
  },
  {
    id: "event-3",
    name: "Mastering TypeScript with React",
    tagline: "Leverage TypeScript for better development experience.",
    description:
      "TypeScript adds a powerful type system on top of JavaScript.\n\nIt enhances React development by ensuring type safety, reducing runtime errors.\n\nIn this session, we'll start with TypeScript basics: interfaces, types, and generics.\n\nHow can these features improve your React components and hooks?\n\nWe'll integrate TypeScript in a React project, highlighting best practices.\n\nExperience how TypeScript transforms the development process, making it more robust and maintainable.",
    image:
      "https://cdn.midjourney.com/62a61d6f-41c8-491b-89e7-502ad76b1b43/0_0.webp",
    date: new Date("2023-11-14"),
    times: [
      {
        start: new Date("2023-11-14T09:00:00"),
        end: new Date("2023-11-14T11:00:00"),
        isBooked: false,
      },
    ],
  },
  {
    id: "event-4",
    name: "React Hooks: The Modern Way",
    tagline: "Unlocking React's full potential with Hooks.",
    description:
      "React Hooks revolutionized how we work with React, making code more reusable and components more compact.\n\nThis session covers the basics: useState, useEffect, useContext, and more.\n\nHow do Hooks simplify state management and side effects?\n\nWe'll explore custom Hooks, showcasing their power in building your own abstractions.\n\nPractical exercises will help solidify your understanding, preparing you to use Hooks in your projects effectively.",
    image:
      "https://cdn.midjourney.com/62a61d6f-41c8-491b-89e7-502ad76b1b43/0_0.webp",
    date: new Date("2023-11-21"),
    times: [
      {
        start: new Date("2023-11-21T09:00:00"),
        end: new Date("2023-11-21T10:30:00"),
        isBooked: false,
      },
    ],
  },
];

let userEvents: Event[] = [];

// function to get events
export const getEvents = () => {
  return events;
};

export function getEventUsingID(id: string): Event | { error: string } {
  const foundEvent: Event | undefined = events.find((event) => event.id === id);
  if (foundEvent) {
    return foundEvent;
  } else {
    return { error: "No event has this id" };
  }
}

// function to get user events
export const getUserEvents = () => {
  return events;
};

export const getUserEventUsingID = (id: string): Event | { error: string } => {
  const foundEvent: Event | undefined = userEvents.find(
    (event) => event.id === id
  );
  if (foundEvent) {
    return foundEvent;
  } else {
    return { error: "No user event has this id" };
  }
};

export const addUserevent = (item: Event) => {
  events.push(item);
};
