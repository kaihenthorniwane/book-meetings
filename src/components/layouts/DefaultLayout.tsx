import { ReactNode } from "react";
import UserSessionsNavbar from "../user-sessions/UserSessionsNavbar";

export default function DefaultLayout(props: { children: ReactNode }) {
  return (
    <body className="text-xl font-body text-brandBlack">
      <main className="flex flex-col gap-4 items-center">
        <UserSessionsNavbar variant="fixed" />
        <div className="flex flex-col md:w-auto md:max-w-screen-xl md:my-16 md:mx-10 md:p-0 p-5 w-full">
          {props.children}
        </div>
      </main>
    </body>
  );
}
