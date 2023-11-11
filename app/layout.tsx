/** @format */

import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Prompt Draft",
  description: "High Quality Prompts Made Easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider session={null}>
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
