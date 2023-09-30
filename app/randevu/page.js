"use client";
import Layout from "../components/layout";
import Hero from "./hero.js";
import AppointmentForm from "./form1/appointment-form";
import CredentialsForm from "./form2/credentials-form";
import AppointmentInfo from "./form3/appointment-info";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);
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
        return (
          <AppointmentInfo formData={formData} setFormData={setFormData} />
        );
      default:
        return (
          <AppointmentForm formData={formData} setFormData={setFormData} />
        );
    }
  };

  const [formData, setFormData] = useState({
    barber_name: "",
    date: Date,
    time: "",
    name: "",
    surname: "",
    phone: "",
  });

  function handleSubmit() {
    if (page === 0) {
      if (formData.barber_name === "") {
        return alert("Please select barber");
      } else if (formData.time === "") {
        return alert("Please select time");
      } else if (formData.date === "") {
        return alert("Please select time");
      } else {
        setPage(page + 1);
        console.log(formData);
      }
    } else if (page === 1) {
      if (formData.name === "") {
        return alert("Lütfen isminizi girin.");
      } else if (formData.surname === "") {
        return alert("Lütfen soyadınızı girin.");
      } else if (formData.phone.length != 10) {
        return alert(
          "Lütfen geçerli bir telefon numarası girin. Telefon numaranızı başına 0 koymadan girmelisiniz."
        );
      } else {
        setPage(page + 1);
        console.log(formData);
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
            onClick={handleSubmit}>
            {page === 0 ? "İleri" : "Onayla"}
          </button>
        )}
      </div>
    </Layout>
  );
}
