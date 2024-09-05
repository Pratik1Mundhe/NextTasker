import React, { useContext } from 'react';
import { GridContext } from "../page";

const Grid = () => {
    const {firstDayOfMonth, daysInMonth, shouldHighlight, showMonth, monthMap,emptyCellsAfterMonth} = useContext(GridContext);
  return (
    <>
    <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
          <div key={i} className="p-2 text-gray-400">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 grid-rows-5 ">
        {/* Render empty cells */}
        {[...Array(firstDayOfMonth)].map((_, i) => {
          
          return (
          <div key={`show-empty-${i}`} className="h-32 border bg-gray-200"></div>
        )})}

        {/* Render the days of the selected month */}
        {[...Array(daysInMonth)].map((_, i) => {
          
          return (
          <div className="relative h-32  flex items-center justify-center border font-bold">
            <div  
              key={i + 1}
              className={` absolute top-0 left-0 ml-1 mt-1 pl-4 pr-4 pt-2 pb-2 ${
                shouldHighlight(i + 1) ? "bg-blue-400 text-white rounded-3xl" : "text-black"
              }`}
            >
              {i + 1 === 1 ? `${monthMap[showMonth - 1]} ${i + 1}` : `${i + 1}`}
            </div>
          </div>
        )})}

        {/* Render remaining empty cell */}
        {[...Array(emptyCellsAfterMonth)].map((_, i) => {
          
          return (
          <div key={`show-empty-${i}`} className="h-32 border bg-gray-200"></div>
        )})}
      </div>
      </>
  )
}

export default Grid;