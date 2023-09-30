"use client";

import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import tr from "date-fns/locale/tr";
import format from "date-fns/format";
export default function Dates({ formData, setFormData }) {
  const [value, setValue] = useState(Date.now());

  function handleChange(newValue) {
    const date = format(newValue, "dd MMMMMMMM yyyy", { locale: tr });
    setValue(date);
    setFormData({
      ...formData,
      date: date,
    });
  }
  return (
    <div className="max-w-screen-lg  pb-8">
      <p className=" text-xl font-bold text-blue-900">Select a date</p>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={tr}>
        <DatePicker
          label="Date picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
          className="mt-4 "
        />
      </LocalizationProvider>
    </div>
  );
}
