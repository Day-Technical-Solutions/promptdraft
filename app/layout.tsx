/** @format */

import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/AuthProvider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@utils/AuthOptions";
import AuthProvider from "@components/AuthProvider";

export const metadata = {
  title: "Prompt Draft",
  description: "The greatest prompt generator in the world.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
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
        </AuthProvider>
      </body>
    </html>
  );
}
