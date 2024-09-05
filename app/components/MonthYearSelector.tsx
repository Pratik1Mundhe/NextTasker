import React, { useContext } from 'react';
import { MonthYearSelectorContext } from "../page"

const MonthYearSelector = () => {
    const {showMonth, setShowMonth, showYear, setShowYear} = useContext(MonthYearSelectorContext)
  return (
    <div className="flex space-x-4 mb-4">

        {/* Month Selector */}
        <select
          className="border p-2 rounded-lg"
          value={showMonth}
          onChange={(e) => setShowMonth(parseInt(e.target.value))}
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
          value={showYear}
          onChange={(e) => setShowYear(parseInt(e.target.value))}
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

export default MonthYearSelector