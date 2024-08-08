import React from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

const MyDatePicker = ({ onChange }) => {
  const today = dayjs();
  const tomorrow = today.add(1, 'day');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        onChange={(newValue) => onChange(newValue)}
        defaultValue={tomorrow}
        label='Выберите дату'
        minDate={tomorrow}
        slots={{ textField: TextField }}
      />
    </LocalizationProvider>
  );
};

export { MyDatePicker };
