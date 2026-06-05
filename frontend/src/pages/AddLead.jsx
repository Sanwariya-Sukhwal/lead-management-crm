import Navbar from "../components/Navbar";
import LeadForm from "../components/LeadForm";

import { createLead } from "../services/leadService";
import { useNavigate } from "react-router-dom";

function AddLead() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      await createLead(data);

      alert("Lead Created Successfully");

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed To Create Lead");
    }
  };

  return (
    <>
      <Navbar />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          Add Lead
        </h2>

        <LeadForm onSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default AddLead;