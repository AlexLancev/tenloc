// Импортируем необходимые библиотеки и компоненты
import React, { useRef } from "react"; // Импортируем React и useRef для создания компонента
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"; // Импортируем LocalizationProvider и DatePicker из @mui/x-date-pickers
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; // Импортируем адаптер для использования dayjs с DatePicker
import TextField from "@mui/material/TextField"; // Импортируем компонент TextField из @mui/material для отображения поля ввода
import dayjs from "dayjs"; // Импортируем библиотеку dayjs для работы с датами

// Создаем функциональный компонент MyDatePicker
const MyDatePicker = ({ onChange }) => {
  // Определяем текущую дату с помощью dayjs
  const today = dayjs();
  // Определяем завтрашнюю дату, добавляя один день к текущей дате
  const tomorrow = today.add(1, "day");
  // Создаем реф для TextField
  const inputRef = useRef(null);

  return (
    // Оборачиваем DatePicker в LocalizationProvider для обеспечения поддержки локализации
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* Компонент DatePicker для выбора даты */}
      <DatePicker
        onChange={(newValue) => onChange(newValue)}
        defaultValue={tomorrow} // Устанавливаем завтрашнюю дату как значение по умолчанию
        label="Выберите дату" // Метка для поля выбора даты
        minDate={tomorrow} // Устанавливаем завтрашнюю дату как минимально возможную для выбора
        slots={{
          textField: (params) => <TextField {...params} inputRef={inputRef} />
        }} // Используем TextField для отображения поля ввода, передавая ему параметры из DatePicker и реф
      />
    </LocalizationProvider>
  );
};

// Экспортируем компонент MyDatePicker для использования в других частях приложения
export { MyDatePicker };
