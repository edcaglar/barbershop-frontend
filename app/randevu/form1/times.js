const hours = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];

export default function Times({ formData, setFormData }) {
  return (
    <div className="max-w-screen-lg pb-8 ">
      <p className=" text-xl font-bold text-blue-900">Select a time</p>
      <div className="flex  flex-wrap max-w-sm gap-x-2 gap-y-4 mt-4">
        {hours.map((hour, index) => (
          <div className="" key={index}>
            <input
              key={index}
              className="peer hidden"
              id={hour}
              type="radio"
              name="radioid"
              value={hour}
              onChange={(e) => {
                console.log(e.target.value);
                setFormData({
                  ...formData,
                  time: e.target.value,
                });
              }}
            />
            <label
              className="bg-gray-200 cursor-pointer rounded-lg shadow-lg px-2 py-1 shadow-slate-100 peer-checked:bg-indigo-600 peer-checked:text-white"
              htmlFor={hour}>
              <span className="">{hour}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
