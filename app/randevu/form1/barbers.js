const barber_list = [
  {
    id: "0",
    name: "Barber Name1",
    src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    imageAlt: "Barber Name",
    href: "#",
  },
  {
    id: "1",
    name: "Barber Name2",
    src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    imageAlt: "Barber Name2",
    href: "#",
  },
  {
    id: "2",
    name: "Barber Name3",
    src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    imageAlt: "Barber Name3",
    href: "#",
  },
];

export default function Barbers({ formData, setFormData }) {
  return (
    <div className="max-w-screen-lg  pb-8">
      <p className=" text-xl font-bold text-blue-900">Select a service</p>
      <form className="flex flex-row flex-wrap mt-4 justify-items-start gap-x-5 gap-y-5">
        {barber_list.map((barber) => (
          <div className="flex flex-row bg-gray-200 rounded-lg" key={barber.id}>
            <input
              key={barber.id}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  barber_name: e.target.value,
                });
              }}
              className="peer hidden"
              id={barber.id}
              type="radio"
              name="radio"
              value={barber.name}
            />
            <label
              className="flex flex-row cursor-pointer space-x-2 items-center rounded-lg p-4  shadow-lg shadow-slate-100 peer-checked:bg-indigo-600 peer-checked:text-white"
              htmlFor={barber.id}>
              <span className="">{barber.name}</span>
              <img
                className="h-8 w-8 rounded-full border-2 border-black"
                src={barber.src}
                alt={barber.alt}
              />
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}
