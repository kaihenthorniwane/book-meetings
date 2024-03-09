import { EventInfo } from "@/context/user-sessions-context";

let events: EventInfo[] = [
  {
    id: "event-0",
    name: "Kickstart with React: Personal Intro",
    tagline: "Tailored guidance for total beginners in React.",
    description:
      "Starting with React can be daunting.\n\nYet, with the right guidance, it can be an exhilarating journey.\n\nIn this session, we will begin by demystifying React's core philosophy.\n\nWhy was React created?\n\nWhat problems does it solve in the world of web development?\n\nTogether, we'll delve into the virtual DOM, JSX, and component-based architecture.\n\nBy the end of our session, you will have a clear understanding and a roadmap tailored just for you, to aid your React journey.",
    image:
      "https://uploads-ssl.webflow.com/61f4510e8113b1209cc00ab0/65cab5655af2fcdc235c879b_img2.webp",
    date: new Date("2023-10-31"),
    times: [
      {
        id: "event-time-0",
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
      "https://uploads-ssl.webflow.com/61f4510e8113b1209cc00ab0/65c99b1d22f62f56316f182e_0_0.webp",
    date: new Date("2023-11-07"),
    times: [
      {
        id: "event-time-1",
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
      "https://uploads-ssl.webflow.com/61f4510e8113b1209cc00ab0/65cacb6a5fb9dff97e3bebb7_img3.webp",
    date: new Date("2023-11-14"),
    times: [
      {
        id: "event-time-2",
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
      "https://uploads-ssl.webflow.com/61f4510e8113b1209cc00ab0/65cacb9f926d4ff600a8c6e4_img4.webp",
    date: new Date("2023-11-21"),
    times: [
      {
        id: "event-time-3",
        start: new Date("2023-11-21T09:00:00"),
        end: new Date("2023-11-21T10:30:00"),
        isBooked: false,
      },
    ],
  },
  {
    id: "event-5",
    name: "React Routing and SPA Development",
    tagline: "Crafting single-page applications with React Router.",
    description:
      "Dive into the essentials of single-page application (SPA) development with React Router.\n\nUnderstand the significance of routing in modern web applications.\n\nLearn to configure and use React Router for enabling navigational components and URLs.\n\nWe'll cover dynamic routing, nested routes, and route protection to build intuitive and efficient SPAs.\n\nBy the end of this session, you'll be adept at implementing seamless navigation in your React projects.",
    image:
      "https://uploads-ssl.webflow.com/61f4510e8113b1209cc00ab0/65d26b86026a4a0dd4b92bc3_cdnimage3.webp",
    date: new Date("2023-11-28"),
    times: [
      {
        id: "event-time-4",
        start: new Date("2023-11-28T09:00:00"),
        end: new Date("2023-11-28T10:30:00"),
        isBooked: false,
      },
    ],
  },
  {
    id: "event-6",
    name: "React and Redux: State Management",
    tagline: "Mastering global state management with Redux.",
    description:
      "Explore how Redux provides a solid foundation for managing global state in large-scale React applications.\n\nLearn the principles of actions, reducers, and the Redux store.\n\nWe'll integrate Redux with React, emphasizing patterns like the Context API for prop drilling avoidance.\n\nPractical examples will include using middleware for side effects and architecting a scalable state management solution.\n\nEquip yourself with the skills to maintain clean and predictable state across your React apps.",
    image:
      "https://uploads-ssl.webflow.com/61f4510e8113b1209cc00ab0/65d26b8672af01bb6f47f954_cdnimage6.webp",
    date: new Date("2023-12-05"),
    times: [
      {
        id: "event-time-5",
        start: new Date("2023-12-05T09:00:00"),
        end: new Date("2023-12-05T11:00:00"),
        isBooked: false,
      },
    ],
  },
  {
    id: "event-7",
    name: "Next.js for React Developers",
    tagline: "Enhancing React with Next.js for server-side rendering.",
    description:
      "Next.js takes React to the next level, enabling server-side rendering and static site generation.\n\nDiscover how Next.js improves SEO, performance, and user experience.\n\nWe'll walk through setup, routing, and pre-rendering, along with advanced features like API routes and image optimization.\n\nThis session is your gateway to building more performant and scalable React applications with Next.js.",
    image:
      "https://uploads-ssl.webflow.com/61f4510e8113b1209cc00ab0/65d26b86c71e84a616c57f5f_cdnimage1.webp",
    date: new Date("2023-12-12"),
    times: [
      {
        id: "event-time-6",
        start: new Date("2023-12-12T09:00:00"),
        end: new Date("2023-12-12T10:30:00"),
        isBooked: false,
      },
    ],
  },
  {
    id: "event-8",
    name: "React Performance Optimization",
    tagline: "Boosting your React app's performance.",
    description:
      "In-depth exploration of techniques to optimize React application performance.\n\nLearn about React's reconciliation algorithm, and how to use memoization, lazy loading, and code splitting to reduce load times.\n\nWe'll also cover the Profiler API and how to leverage it for diagnosing performance issues.\n\nPractical tips and strategies will be provided to ensure your React apps are as efficient and responsive as possible.",
    image:
      "https://uploads-ssl.webflow.com/61f4510e8113b1209cc00ab0/65d26b868a6e2bcbcee38a68_cdnimage5.webp",
    date: new Date("2023-12-19"),
    times: [
      {
        id: "event-time-8",
        start: new Date("2023-12-19T09:00:00"),
        end: new Date("2023-12-19T10:30:00"),
        isBooked: false,
      },
    ],
  },
  {
    id: "event-9",
    name: "Building Reusable React Components",
    tagline: "Creating a scalable React component library.",
    description:
      "Learn the art of building reusable React components to streamline your development process.\n\nDiscuss best practices for component design, prop types, and composition.\n\nExplore strategies for creating a scalable component library that can be shared across projects.\n\nThis session will include hands-on examples and tips for maintaining consistency and flexibility in your component architecture.",
    image:
      "https://uploads-ssl.webflow.com/61f4510e8113b1209cc00ab0/65d26b8608466597e0867aad_cdnimage4.webp",
    date: new Date("2024-01-09"),
    times: [
      {
        id: "event-time-9",
        start: new Date("2024-01-09T09:00:00"),
        end: new Date("2024-01-09T10:30:00"),
        isBooked: false,
      },
    ],
  },
  {
    id: "event-10",
    name: "Advanced React Patterns",
    tagline: "Elevate your React skills with advanced patterns.",
    description:
      "Dive into advanced React patterns to solve complex design challenges in your applications.\n\nCovering patterns like Compound Components, Render Props, Higher-Order Components, and Hooks, this session will provide deep insights into their use cases and benefits.\n\nThrough practical examples, learn how these patterns can enhance flexibility, reusability, and simplicity in your React codebase.",
    image:
      "https://uploads-ssl.webflow.com/61f4510e8113b1209cc00ab0/65d26b86981519f7edd2331f_cdnimage2.webp",
    date: new Date("2024-01-16"),
    times: [
      {
        id: "event-time-10",
        start: new Date("2024-01-16T09:00:00"),
        end: new Date("2024-01-16T10:30:00"),
        isBooked: false,
      },
    ],
  },
];

events = events.map((event) => ({
  ...event,
  times: [
    ...event.times,
    {
      id: `${event.times[0].id}-1`,
      start: new Date(
        new Date(event.times[0].start).setHours(
          event.times[0].start.getHours() + 1
        )
      ),
      end: new Date(
        new Date(event.times[0].end).setHours(event.times[0].end.getHours() + 1)
      ),
      isBooked: false,
    },
    {
      id: `${event.times[0].id}-2`,
      start: new Date(
        new Date(event.times[0].start).setHours(
          event.times[0].start.getHours() + 2
        )
      ),
      end: new Date(
        new Date(event.times[0].end).setHours(event.times[0].end.getHours() + 2)
      ),
      isBooked: false,
    },
  ],
}));

let userEvents: EventInfo[] = [];

// function to get events
export const getEvents = () => {
  return events;
};

export function getEventUsingID(id: string): EventInfo | { error: string } {
  const foundEvent: EventInfo | undefined = events.find(
    (event) => event.id === id
  );
  if (foundEvent) {
    return foundEvent;
  } else {
    return { error: "No event has this id" };
  }
}

export const getEventAfterTheOneWithID = (
  id: string
): EventInfo | { error: string } => {
  const index = events.findIndex((event) => event.id === id);

  // Check if the event with the given ID was found and is not the last in the array
  if (index !== -1 && index + 1 < events.length) {
    return events[index + 1];
  } else if (index === -1) {
    return { error: "No event has this id" };
  } else {
    return events[0];
  }
};

export const getEventBeforeTheOneWithID = (
  id: string
): EventInfo | { error: string } => {
  const index = events.findIndex((event) => event.id === id);

  // Check if the event with the given ID was found and is not the first in the array
  if (index > 0) {
    return events[index - 1];
  } else if (index === -1) {
    return { error: "No event has this id" };
  } else {
    // If it's the first event, return the last one in the array
    return events[events.length - 1];
  }
};

// function to get user events
export const getUserEvents = () => {
  return events;
};

export const getUserEventUsingID = (
  id: string
): EventInfo | { error: string } => {
  const foundEvent: EventInfo | undefined = userEvents.find(
    (event) => event.id === id
  );
  if (foundEvent) {
    return foundEvent;
  } else {
    return { error: "No user event has this id" };
  }
};

export const addUserevent = (item: EventInfo) => {
  events.push(item);
};
