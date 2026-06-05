import statusColors from "../utils/statusColors";

function StatusBadge({ status }) {
  return (
    <span
      className={`text-white px-3 py-1 rounded text-sm ${
        statusColors[status] || "bg-gray-500"
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;