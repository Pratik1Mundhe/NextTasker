import React, { useContext } from 'react';
import { RadioContext } from "../page"

const Radio = () => {
    const {recurrence, handleRecurrenceChange} = useContext(RadioContext);
  return (
    <div className="flex space-x-4 mb-4 text-gray-600">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="none"
            checked={recurrence === "none"}
            onChange={handleRecurrenceChange}
          />
          <span>No Recurrence</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="daily"
            checked={recurrence === "daily"}
            onChange={handleRecurrenceChange}
          />
          <span>Daily</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="weekly"
            checked={recurrence === "weekly"}
            onChange={handleRecurrenceChange}
          />
          <span>Weekly</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="monthly"
            checked={recurrence === "monthly"}
            onChange={handleRecurrenceChange}
          />
          <span>Monthly</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="yearly"
            checked={recurrence === "yearly"}
            onChange={handleRecurrenceChange}
          />
          <span>Yearly</span>
        </label>
      </div>
  )
}

export default Radio