export default function CredentialsForm({ formData, setFormData }) {
  return (
    <form>
      <div className="">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Profile
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>
      <div className="mb-6 sm:w-full md:w-80 ">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Ad
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
          onChange={(e) => {
            setFormData({
              ...formData,
              customer_name: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-6 sm:w-full md:w-80">
        <label
          htmlFor="surname"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Soyad
        </label>
        <input
          type="text"
          id="surname"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
          onChange={(e) => {
            setFormData({
              ...formData,
              customer_surname: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-6 sm:w-full md:w-80">
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Telefon Numarasi
        </label>
        <input
          type="tel"
          id="phone"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="505-999-99-99"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          required
          onChange={(e) => {
            setFormData({
              ...formData,
              customer_phone: e.target.value,
            });
          }}
        />
      </div>
    </form>
  );
}
