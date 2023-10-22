"use client";
import Barbers from "./barbers.js";
import Dates from "./dates.js";
import Times from "./times.js";
import { useEffect, useState } from "react";

export default function AppointmentForm({ formData, setFormData }) {
  const [busyHours, setBusyHours] = useState(null);

  useEffect(() => {
    if (formData.appointment_date != "" && formData.barber_id != "")
      getBusyHours();
  }, [formData.appointment_date, formData.barber_id]);

  async function getBusyHours() {
    try {
      const times = [];
      let path =
        "/appointments/" + formData.barber_id + "/" + formData.appointment_date;
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + path, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());

      response.forEach((randevu) => {
        times.push(randevu.appointment_time);
      });

      setBusyHours(times);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="max-w-screen-lg ">
      <Barbers formData={formData} setFormData={setFormData} />
      <Dates formData={formData} setFormData={setFormData} />
      <Times
        formData={formData}
        setFormData={setFormData}
        busyHours={busyHours}
      />
    </div>
  );
}
