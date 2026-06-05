function FilterBar({ status, setStatus }) {
  return (
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="border p-2 rounded mb-4"
    >
      <option value="">All Status</option>
      <option value="New">New</option>
      <option value="Contacted">Contacted</option>
      <option value="Qualified">Qualified</option>
      <option value="Converted">Converted</option>
      <option value="Lost">Lost</option>
    </select>
  );
}

export default FilterBar;