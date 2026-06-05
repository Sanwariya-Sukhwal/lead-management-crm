import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AddLead from "./pages/AddLead";
import EditLead from "./pages/EditLead";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-lead" element={<AddLead />} />
      <Route path="/edit-lead/:id" element={<EditLead />} />
    </Routes>
  );
}

export default App;