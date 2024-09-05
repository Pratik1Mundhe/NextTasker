import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Selector from './Selector'; 
import { SelectorContext } from '../page'; 

const mockSetDate = jest.fn();
const mockSetMonth = jest.fn();
const mockSetYear = jest.fn();

const renderWithContext = (contextValue) => {
  return render(
    <SelectorContext.Provider value={contextValue}>
      <Selector />
    </SelectorContext.Provider>
  );
};

describe('Selector', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders date, month, and year selectors', () => {
    renderWithContext({
      date: 1,
      setDate: mockSetDate,
      daysInMonth: 31,
      month: 1,
      setMonth: mockSetMonth,
      year: 2024,
      setYear: mockSetYear,
    });

    expect(screen.getByRole('combobox', { name: /date/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /month/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /year/i })).toBeInTheDocument();
  });

  it('calls setDate when date is changed', () => {
    renderWithContext({
      date: 1,
      setDate: mockSetDate,
      daysInMonth: 31,
      month: 1,
      setMonth: mockSetMonth,
      year: 2024,
      setYear: mockSetYear,
    });

    fireEvent.change(screen.getByRole('combobox', { name: /date/i }), {
      target: { value: '15' },
    });

    expect(mockSetDate).toHaveBeenCalledWith(15);
  });

  it('calls setMonth when month is changed', () => {
    renderWithContext({
      date: 1,
      setDate: mockSetDate,
      daysInMonth: 31,
      month: 1,
      setMonth: mockSetMonth,
      year: 2024,
      setYear: mockSetYear,
    });

    fireEvent.change(screen.getByRole('combobox', { name: /month/i }), {
      target: { value: '5' },
    });

    expect(mockSetMonth).toHaveBeenCalledWith(5);
  });

  it('calls setYear when year is changed', () => {
    renderWithContext({
      date: 1,
      setDate: mockSetDate,
      daysInMonth: 31,
      month: 1,
      setMonth: mockSetMonth,
      year: 2024,
      setYear: mockSetYear,
    });

    fireEvent.change(screen.getByRole('combobox', { name: /year/i }), {
      target: { value: '2030' },
    });

    expect(mockSetYear).toHaveBeenCalledWith(2030);
  });
});
