import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { RadioContext } from "../page"; 
import Radio from "./Radio"; 

const mockHandleRecurrenceChange = jest.fn();

const renderWithContext = (contextValue) => {
  return render(
    <RadioContext.Provider value={contextValue}>
      <Radio />
    </RadioContext.Provider>
  );
};

describe("Radio Component", () => {
  it("renders all recurrence options", () => {
    renderWithContext({
      recurrence: "none",
      handleRecurrenceChange: mockHandleRecurrenceChange,
    });

    expect(screen.getByLabelText(/no recurrence/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/daily/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/weekly/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/monthly/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/yearly/i)).toBeInTheDocument();
  });

  it("checks the correct radio button based on context value", () => {
    renderWithContext({
      recurrence: "weekly",
      handleRecurrenceChange: mockHandleRecurrenceChange,
    });

    expect(screen.getByLabelText(/weekly/i)).toBeChecked();
    expect(screen.getByLabelText(/daily/i)).not.toBeChecked();
    expect(screen.getByLabelText(/monthly/i)).not.toBeChecked();
  });

  it("calls handleRecurrenceChange when a radio button is clicked", () => {
    renderWithContext({
      recurrence: "none",
      handleRecurrenceChange: mockHandleRecurrenceChange,
    });

    fireEvent.click(screen.getByLabelText(/daily/i));

    expect(mockHandleRecurrenceChange).toHaveBeenCalledTimes(1);
  });
});
