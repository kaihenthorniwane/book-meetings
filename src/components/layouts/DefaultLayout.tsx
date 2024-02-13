import { ReactNode } from "react";

export default function DefaultLayout(props: { children: ReactNode }) {
  return (
    <body className="text-xl font-body text-brandBlack">
      <main className="flex flex-col gap-4 items-center">
        <div className="flex flex-col w-full max-w-screen-sm p-5">
          {props.children}
        </div>
      </main>
    </body>
  );
}
