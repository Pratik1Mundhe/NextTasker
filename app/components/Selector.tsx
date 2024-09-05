import React, { useContext } from 'react';
import { SelectorContext } from "../page";



const Selector = () => {
    const {date, setDate, daysInMonth, month, setMonth,year, setYear} = useContext(SelectorContext);
  return (
    <div className="flex space-x-4 mb-4">
        {/* Date Selector */}
        
        <select
          className="border p-2 rounded-lg"
          value={date}
          onChange={(e) => setDate(parseInt(e.target.value))}
        >
          {[...Array(daysInMonth)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        {/* Month Selector */}
        <select
          className="border p-2 rounded-lg"
          value={month}
          onChange={(e) => setMonth(parseInt(e.target.value))}
        >
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        {/* Year Selector */}
        <select
          className="border p-2 rounded-lg"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
        >
          {[...Array(101)].map((_, i) => (
            <option key={i + 2020} value={i + 2020}>
              {i + 2020}
            </option>
          ))}
        </select>
      </div>
  )
}

export default Selector