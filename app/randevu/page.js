"use client";
import { useState } from "react";

import Layout from "../../components/layout";
import Hero from "./hero.js";
import AppointmentForm from "./form1/appointment-form";
import CredentialsForm from "./form2/credentials-form";
import AppointmentInfo from "./form3/appointment-info";

export default function Home() {
  const [appointment, setAppointment] = useState();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_surname: "",
    customer_phone: "",
    appointment_date: "",
    appointment_time: "",
    barber_id: "",
  });

  async function createAppointment() {
    try {
      let path = "/appointments";
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json());
      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return (
          <AppointmentForm formData={formData} setFormData={setFormData} />
        );
      case 1:
        return (
          <CredentialsForm formData={formData} setFormData={setFormData} />
        );
      case 2:
        return <AppointmentInfo appointment={appointment} />;
      default:
        return (
          <AppointmentForm formData={formData} setFormData={setFormData} />
        );
    }
  };

  async function handleSubmit() {
    if (page === 0) {
      if (formData.barber_id === "") {
        return alert("Please select barber");
      } else if (formData.appointment_time === "") {
        return alert("Please select time");
      } else if (formData.appointment_date === "") {
        return alert("Please select time");
      } else {
        setPage(page + 1);
      }
    } else if (page === 1) {
      if (formData.customer_name === "") {
        return alert("Lütfen isminizi girin.");
      } else if (formData.customer_surname === "") {
        return alert("Lütfen soyadınızı girin.");
      } else if (formData.customer_phone.length != 10) {
        return alert(
          "Lütfen geçerli bir telefon numarası girin. Telefon numaranızı başına 0 koymadan girmelisiniz."
        );
      } else {
        const deneme = await createAppointment();
        setAppointment(deneme);
        setPage(page + 1);
      }
    }
  }

  return (
    <Layout>
      <Hero />
      <div className="mx-auto max-w-screen-lg px-6 py-8 rounded-lg shadow-md shadow-gray-600">
        {conditionalComponent()}
        {page < 2 && (
          <button
            className=" rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSubmit}
          >
            {page === 0 ? "İleri" : "Onayla"}
          </button>
        )}
      </div>
    </Layout>
  );
}
