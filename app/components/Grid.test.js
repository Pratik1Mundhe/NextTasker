import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from './Grid'; 
import { GridContext } from '../page';

const mockShouldHighlight = jest.fn((day) => day % 2 === 0);
const mockMonthMap = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderWithContext = (contextValue) => {
  return render(
    <GridContext.Provider value={contextValue}>
      <Grid />
    </GridContext.Provider>
  );
};

describe('Grid', () => {
  it('renders day headers correctly', () => {
    renderWithContext({
      firstDayOfMonth: 0,
      daysInMonth: 31,
      shouldHighlight: mockShouldHighlight,
      showMonth: 1,
      monthMap: mockMonthMap,
      emptyCellsAfterMonth: 0
    });

    expect(screen.getByText('Sun')).toBeInTheDocument();
    expect(screen.getByText('Mon')).toBeInTheDocument();
    expect(screen.getByText('Tue')).toBeInTheDocument();
    expect(screen.getByText('Wed')).toBeInTheDocument();
    expect(screen.getByText('Thu')).toBeInTheDocument();
    expect(screen.getByText('Fri')).toBeInTheDocument();
    expect(screen.getByText('Sat')).toBeInTheDocument();
  });

  it('renders empty cells before the first day of the month', () => {
    renderWithContext({
      firstDayOfMonth: 3,
      daysInMonth: 31,
      shouldHighlight: mockShouldHighlight,
      showMonth: 1,
      monthMap: mockMonthMap,
      emptyCellsAfterMonth: 0
    });

    const emptyCells = screen.getAllByRole('gridcell', { name: /empty/i });
    expect(emptyCells).toHaveLength(3);
  });

  it('renders days of the month correctly', () => {
    renderWithContext({
      firstDayOfMonth: 0,
      daysInMonth: 31,
      shouldHighlight: mockShouldHighlight,
      showMonth: 1,
      monthMap: mockMonthMap,
      emptyCellsAfterMonth: 0
    });

    for (let day = 1; day <= 31; day++) {
      expect(screen.getByText(day.toString())).toBeInTheDocument();
    }
  });

  it('renders empty cells after the days of the month', () => {
    renderWithContext({
      firstDayOfMonth: 0,
      daysInMonth: 31,
      shouldHighlight: mockShouldHighlight,
      showMonth: 1,
      monthMap: mockMonthMap,
      emptyCellsAfterMonth: 5
    });

    const emptyCells = screen.getAllByRole('gridcell', { name: /empty/i });
    expect(emptyCells).toHaveLength(5);
  });

  it('highlights days based on shouldHighlight function', () => {
    renderWithContext({
      firstDayOfMonth: 0,
      daysInMonth: 10,
      shouldHighlight: mockShouldHighlight,
      showMonth: 1,
      monthMap: mockMonthMap,
      emptyCellsAfterMonth: 0
    });

    for (let day = 1; day <= 10; day++) {
      const dayElement = screen.getByText(day.toString());
      if (day % 2 === 0) {
        expect(dayElement).toHaveClass('bg-blue-400 text-white rounded-3xl');
      } else {
        expect(dayElement).not.toHaveClass('bg-blue-400 text-white rounded-3xl');
      }
    }
  });
});
