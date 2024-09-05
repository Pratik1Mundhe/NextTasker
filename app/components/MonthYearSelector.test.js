import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { MonthYearSelectorContext } from "../page"; 
import MonthYearSelector from "./MonthYearSelector"; 

const mockSetShowMonth = jest.fn();
const mockSetShowYear = jest.fn();

const renderWithContext = (contextValue) => {
  return render(
    <MonthYearSelectorContext.Provider value={contextValue}>
      <MonthYearSelector />
    </MonthYearSelectorContext.Provider>
  );
};

describe("MonthYearSelector", () => {
  it("renders month and year selectors", () => {
    renderWithContext({
      showMonth: 1,
      setShowMonth: mockSetShowMonth,
      showYear: 2024,
      setShowYear: mockSetShowYear,
    });

    expect(screen.getByRole("combobox", { name: /month/i })).toBeInTheDocument();
    expect(screen.getByRole("combobox", { name: /year/i })).toBeInTheDocument();
  });

  it("calls setShowMonth when month is changed", () => {
    renderWithContext({
      showMonth: 1,
      setShowMonth: mockSetShowMonth,
      showYear: 2024,
      setShowYear: mockSetShowYear,
    });

    fireEvent.change(screen.getByRole("combobox", { name: /month/i }), {
      target: { value: "5" },
    });

    expect(mockSetShowMonth).toHaveBeenCalledWith(5);
  });

  it("calls setShowYear when year is changed", () => {
    renderWithContext({
      showMonth: 1,
      setShowMonth: mockSetShowMonth,
      showYear: 2024,
      setShowYear: mockSetShowYear,
    });

    fireEvent.change(screen.getByRole("combobox", { name: /year/i }), {
      target: { value: "2026" },
    });

    expect(mockSetShowYear).toHaveBeenCalledWith(2026);
  });
});
