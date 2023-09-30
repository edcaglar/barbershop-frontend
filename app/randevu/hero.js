export default function Hero() {
  return (
    <div className="relative mx-auto mt-20 mb-20 max-w-screen-lg overflow-hidden rounded-t-xl bg-indigo-600/30 py-32 text-center shadow-xl shadow-gray-600">
      <h1 className="mt-2 px-8 text-3xl font-bold text-white md:text-5xl">
        Book an appointment
      </h1>
      <p className="mt-6 text-lg text-white">
        Get an appointment with our experienced accountants
      </p>
      <img
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
    </div>
  );
}
