"use client";

import { useEffect, useState } from "react";
import { useMonthContext } from "./layout";
import { createContext } from "react";
import Selector from "./components/Selector";
import MonthYearSelector from "./components/MonthYearSelector";
import Radio from "./components/Radio";
import Grid from "./components/Grid";

export const SelectorContext = createContext<any>(undefined);
export const MonthYearSelectorContext = createContext<any>(undefined);
export const RadioContext = createContext<any>(undefined);
export const GridContext = createContext<any>(undefined);

// Function to calculate the number of days in a month
const getDaysInMonth = (month: any, year: any) => {
  return new Date(year, month, 0).getDate();
};

// Function to get the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const getFirstDayOfMonth = (month: any, year: any) => {
  return new Date(year, month - 1, 1).getDay();
};

export default function Home() {
  const [date, setDate] = useState(4);
  const { month, setMonth } = useMonthContext();
  const [year, setYear] = useState(2024);
  const [recurrence, setRecurrence] = useState("none");
  const [showMonth, setShowMonth] = useState(month);
  const [showYear, setShowYear] = useState(year);
  const monthMap = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const daysInMonth = getDaysInMonth(showMonth, showYear);
  const firstDayOfMonth = getFirstDayOfMonth(showMonth, showYear);
  const emptyCellsAfterMonth = Math.max(0, 35 - (firstDayOfMonth + daysInMonth));

  
  const handleRecurrenceChange = (e: any) => {
    setRecurrence(e.target.value);
  };

  const shouldHighlight = (day: number) => {
    if (recurrence === "none") return day === date && showMonth=== month && showYear===year;

    if(recurrence === "daily") {
      // const selectedDateOfWeek = new Date(showYear, showMonth - 1, date).getDate();
      // const currentDateOfWeek = new Date(showYear, showMonth - 1, day).getDate();
      if(showMonth>month)
        return true;

      return showMonth>=month && day >= date;
    }
    if (recurrence === "weekly") {
      const selectedDayOfWeek = new Date(showYear, showMonth - 1, date).getDay();
      const currentDayOfWeek = new Date(showYear, showMonth - 1, day).getDay();
      return currentDayOfWeek === selectedDayOfWeek;
    }
    if (recurrence === "monthly") {
      // const selectedDayOfWeek = new Date(showYear, showMonth - 1, date).getDate();
      // const currentDayOfWeek = new Date(showYear, showMonth - 1, day).getDate();
      if(showMonth==month)
        return day==date;
      return showMonth>=month && day==date && showYear>=year;
    }
    if (recurrence === "yearly") {
      // Highlight all dates with the same day of the week
  
      return showMonth==month && day==date && showYear>=year;
    }

    // For other recurrence types, highlight specific dates (e.g., every month, every year)
    return day === date;
  };
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="text-xl text-gray-400">Date Picker</h1>
        <h1 className="text-xl text-gray-400">Show Month/Year</h1>
      </div>

      <div className="flex justify-between">
        <SelectorContext.Provider value={{date, setDate, daysInMonth, month, setMonth,year, setYear}} >
          <Selector />
        </SelectorContext.Provider>

        <MonthYearSelectorContext.Provider value={{showMonth, setShowMonth, showYear, setShowYear}}>
          <MonthYearSelector />
        </MonthYearSelectorContext.Provider>
      </div>

      {/* Recurrence Options */}
      <RadioContext.Provider value={{recurrence, handleRecurrenceChange}}>
        <Radio />
      </RadioContext.Provider>

      {/* Days of Week*/}
      <GridContext.Provider value={{firstDayOfMonth, daysInMonth, shouldHighlight, showMonth, monthMap,emptyCellsAfterMonth} }>
        <Grid />
      </GridContext.Provider>
    </div>
  );
}
