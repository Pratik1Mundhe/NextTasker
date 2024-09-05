"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { useState, createContext, useContext } from "react";
import { twMerge } from "tailwind-merge";

const LoggedInContext = createContext<any>(undefined);
const MonthContext = createContext<any>(undefined);

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loggedIn, setLoggedIn] = useState(true);
  const [month, setMonth] = useState(9);
  return (
    <html lang="en">
      
      <body className={twMerge(inter.className,"h-full flex flex-col")}>
        <LoggedInContext.Provider value={{loggedIn, setLoggedIn}} >
          <MonthContext.Provider value={{month, setMonth}} >
            <div className="p-4 h-1/12 border-b">
              <Header />
            </div>
            <div className="h-11/12">
              {children}
            </div>
          </MonthContext.Provider>
        </LoggedInContext.Provider>
        </body>
    </html>
  );
}


export const useAppContext = () => {
  const context = useContext(LoggedInContext);

  return context;
}

export const useMonthContext = () => {
  const context = useContext(MonthContext);

  return context;
}