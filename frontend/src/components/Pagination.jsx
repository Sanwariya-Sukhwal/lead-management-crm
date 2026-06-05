function Pagination({
  page,
  totalPages,
  setPage,
}) {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">

      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        Previous
      </button>

      <span className="font-bold">
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;