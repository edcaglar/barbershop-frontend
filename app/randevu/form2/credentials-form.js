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
      <div class="mb-6 sm:w-full md:w-80 ">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Ad
        </label>
        <input
          type="text"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value,
            });
          }}
        />
      </div>
      <div class="mb-6 sm:w-full md:w-80">
        <label
          for="surname"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Soyad
        </label>
        <input
          type="text"
          id="surname"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
          onChange={(e) => {
            setFormData({
              ...formData,
              surname: e.target.value,
            });
          }}
        />
      </div>
      <div class="mb-6 sm:w-full md:w-80">
        <label
          for="phone"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Telefon Numarasi
        </label>
        <input
          type="tel"
          id="phone"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="505-999-99-99"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          required
          onChange={(e) => {
            setFormData({
              ...formData,
              phone: e.target.value,
            });
          }}
        />
      </div>
    </form>
  );
}
