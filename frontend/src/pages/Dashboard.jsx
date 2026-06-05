import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import LeadTable from "../components/LeadTable";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import StatsCards from "../components/StatsCards";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

import {
  getLeads,
  deleteLead,
  getStats,
} from "../services/leadService";

function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchLeads = async () => {
    try {
      setLoading(true);

      const response = await getLeads({
        page,
        limit: 5,
        search,
        status,
      });

      setLeads(response.data.data);
      setTotalPages(response.data.pages || 1);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await getStats();

      setStats(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLeads();
    fetchStats();
  }, [search, status, page]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this lead?"
    );

    if (!confirmDelete) return;

    try {
      await deleteLead(id);

      fetchLeads();
      fetchStats();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="p-6">

        <StatsCards stats={stats} />

        <div className="grid md:grid-cols-2 gap-4 mb-4">

          <SearchBar
            search={search}
            setSearch={(value) => {
              setSearch(value);
              setPage(1);
            }}
          />

          <FilterBar
            status={status}
            setStatus={(value) => {
              setStatus(value);
              setPage(1);
            }}
          />

        </div>

        {loading ? (
          <Loader />
        ) : (
          <>
            <LeadTable
              leads={leads}
              onDelete={handleDelete}
            />

            <Pagination
              page={page}
              totalPages={totalPages}
              setPage={setPage}
            />
          </>
        )}

      </div>
    </>
  );
}

export default Dashboard;