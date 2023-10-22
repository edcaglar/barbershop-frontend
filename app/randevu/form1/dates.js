"use client";

import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import tr from "dayjs/locale/tr";

export default function Dates({ formData, setFormData }) {
  const [value, setValue] = useState("");

  function handleChange(newValue) {
    setValue(newValue);
    newValue = newValue.format("YYYY-MM-DD");
    setFormData({
      ...formData,
      appointment_date: newValue,
    });
  }
  return (
    <div className="max-w-screen-lg  pb-8">
      <p className=" text-xl font-bold text-blue-900">Select a date</p>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
        <DatePicker
          defaultValue={value}
          label="Date picker"
          value={value}
          onChange={(newValue) => handleChange(newValue)}
          className="mt-4 "
        />
      </LocalizationProvider>
    </div>
  );
}
