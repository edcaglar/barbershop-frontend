import { useState, useEffect } from "react";
import { tempBarberList } from "@/app/constants";
export default function Barbers({ formData, setFormData }) {
  const [barberList, setBarberList] = useState([]);

  useEffect(() => {
    const getBarbers = async () => {
      try {
        let path = "/barbers";
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + path, {
          cache: "default",
        }).then((response) => response.json());
        setBarberList(response);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getBarbers();
  }, []); // Boş dizi, sadece bir kere çalışmasını sağlar.

  return (
    <div className="max-w-screen-lg  pb-8">
      <p className=" text-xl font-bold text-blue-900">Select a service</p>
      <form className="flex flex-row flex-wrap mt-4 justify-items-start gap-x-5 gap-y-5">
        {barberList.map((barber) => (
          <div className="flex flex-row bg-gray-200 rounded-lg" key={barber.id}>
            <input
              key={barber.id}
              className="peer hidden"
              id={barber.id}
              type="radio"
              name="radio"
              value={barber.id}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  barber_id: e.target.value,
                });
              }}
            />
            <label
              className="flex flex-row cursor-pointer space-x-2 items-center rounded-lg p-4  shadow-lg shadow-slate-100 peer-checked:bg-indigo-600 peer-checked:text-white"
              htmlFor={barber.id}
            >
              <span className="">{barber.name + " " + barber.surname}</span>
              <img
                className="h-8 w-8 rounded-full border-2 border-black"
                src={barber.img}
                alt={barber.alt}
              />
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}
