/** @format */

import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@utils/AuthOptions";
import { Session } from "next-auth";

export const metadata = {
  title: "Prompt Draft",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = (await getServerSession(authOptions)) as Session;
  return (
    <html lang="en">
      <body>
        <Provider
          session={{
            user: {
              email: "",
              username: "",
              image: "",
              id: "",
              favorites: [],
            },
            expires: "",
          }}
        >
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
            <footer>
              <div className="w-screen  p-4 text-center  bg-gradient-to-r from-slate-600 to-transparent">
                © 2023 Powered By: Day Technical Solutions
              </div>
            </footer>
          </main>
        </Provider>
      </body>
    </html>
  );
}
