import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-xl font-body">
        <main className="flex flex-col gap-4 items-center">
          <div className="flex flex-col w-full max-w-screen-sm p-5">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
