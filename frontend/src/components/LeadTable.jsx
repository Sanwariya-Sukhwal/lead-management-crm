import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

function LeadTable({ leads, onDelete }) {
  return (
    <div className="overflow-x-auto bg-white shadow rounded-lg">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Company</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Created Date</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b">
              <td className="p-3">{lead.name}</td>
              <td className="p-3">{lead.email}</td>
              <td className="p-3">{lead.phone}</td>
              <td className="p-3">{lead.company}</td>

              <td className="p-3">
                <StatusBadge status={lead.status} />
              </td>

              <td className="p-3">
                {new Date(
                  lead.created_date
                ).toLocaleDateString()}
              </td>

              <td className="p-3 flex gap-2">
                <Link
                  to={`/edit-lead/${lead.id}`}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </Link>

                <button
                  onClick={() => onDelete(lead.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadTable;