import { working_hours } from "@/app/constants";
import { useState } from "react";

export default function Times({ formData, setFormData, busyHours }) {
  return (
    <div className="max-w-screen-lg pb-8 ">
      <p className=" text-xl font-bold text-blue-900">Select a time</p>
      <div className="flex  flex-wrap max-w-sm gap-x-2 gap-y-4 mt-4">
        {working_hours.map((hour, index) => {
          let isBusy = [];
          if (busyHours) {
            isBusy = busyHours.includes(hour);
          }

          return (
            <div className="" key={index}>
              <input
                key={index}
                className="peer hidden"
                id={hour}
                type="radio"
                name="radioid"
                value={hour}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    appointment_time: e.target.value,
                  });
                }}
                disabled={isBusy}
              />
              <label
                className={`${
                  isBusy ? "bg-gray-300 pointer-events-none" : "bg-green-200"
                } cursor-pointer rounded-lg shadow-lg px-2 py-1 shadow-slate-100 ${
                  isBusy
                    ? "peer-checked:bg-gray-200"
                    : "peer-checked:bg-indigo-600 peer-checked:text-white"
                }`}
                htmlFor={hour}
              >
                <span className="">{hour}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
