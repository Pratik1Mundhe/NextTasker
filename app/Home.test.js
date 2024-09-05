import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home'; 
import { SelectorContext, MonthYearSelectorContext, RadioContext, GridContext } from '../page';


const mockSetDate = jest.fn();
const mockSetMonth = jest.fn();
const mockSetYear = jest.fn();
const mockHandleRecurrenceChange = jest.fn();

const mockShouldHighlight = jest.fn((day) => day % 2 === 0);
const mockMonthMap = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const renderHome = () => {
  return render(
    <Home />
  );
};

describe('Home Component Integration Test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all components and handles interactions correctly', () => {
    renderHome();

    expect(screen.getByText('Date Picker')).toBeInTheDocument();
    expect(screen.getByText('Show Month/Year')).toBeInTheDocument();
    
    expect(screen.getByRole('combobox', { name: /date/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /month/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /year/i })).toBeInTheDocument();
    
    expect(screen.getByRole('combobox', { name: /month/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /year/i })).toBeInTheDocument();

    expect(screen.getByLabelText(/none/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/daily/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/weekly/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/monthly/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/yearly/i)).toBeInTheDocument();
    
    expect(screen.getByText('Sun')).toBeInTheDocument();
    expect(screen.getByText('Mon')).toBeInTheDocument();
    expect(screen.getByText('Tue')).toBeInTheDocument();
    expect(screen.getByText('Wed')).toBeInTheDocument();
    expect(screen.getByText('Thu')).toBeInTheDocument();
    expect(screen.getByText('Fri')).toBeInTheDocument();
    expect(screen.getByText('Sat')).toBeInTheDocument();

    fireEvent.change(screen.getByRole('combobox', { name: /date/i }), { target: { value: '15' } });
    expect(mockSetDate).toHaveBeenCalledWith(15);

    fireEvent.change(screen.getByRole('combobox', { name: /month/i }), { target: { value: '5' } });
    expect(mockSetShowMonth).toHaveBeenCalledWith(5);

    fireEvent.change(screen.getByRole('combobox', { name: /year/i }), { target: { value: '2025' } });
    expect(mockSetShowYear).toHaveBeenCalledWith(2025);

    fireEvent.click(screen.getByLabelText(/daily/i));
    expect(mockHandleRecurrenceChange).toHaveBeenCalledWith('daily');
  });
});
