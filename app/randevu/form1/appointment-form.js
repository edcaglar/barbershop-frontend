import Barbers from "./barbers.js";
import Dates from "./dates.js";
import Times from "./times.js";

export default function AppointmentForm({ formData, setFormData }) {
  return (
    <div className="max-w-screen-lg ">
      <Barbers formData={formData} setFormData={setFormData} />
      <Dates formData={formData} setFormData={setFormData} />
      <Times formData={formData} setFormData={setFormData} />
    </div>
  );
}
