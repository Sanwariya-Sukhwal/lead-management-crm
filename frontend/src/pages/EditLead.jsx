import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import LeadForm from "../components/LeadForm";

import {
  getLeadById,
  updateLead,
} from "../services/leadService";

function EditLead() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [lead, setLead] = useState(null);

  useEffect(() => {
    fetchLead();
  }, []);

  const fetchLead = async () => {
    try {
      const response =
        await getLeadById(id);

      setLead(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (data) => {
    try {
      await updateLead(id, data);

      alert("Lead Updated Successfully");

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Update Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          Edit Lead
        </h2>

        {lead && (
          <LeadForm
            initialData={lead}
            onSubmit={handleUpdate}
            buttonText="Update Lead"
          />
        )}
      </div>
    </>
  );
}

export default EditLead;