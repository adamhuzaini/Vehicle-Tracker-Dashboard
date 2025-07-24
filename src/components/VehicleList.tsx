import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import * as React from "react";
import HeroSection from "./HeroSection";

export type Vehicle = {
  id: number;
  name: string;
  status: string;
  speed: number;
  updated_at: string;
};

interface VehicleListProps {
  vehicles: Vehicle[];
  loading: boolean;
  error: string | null;
}

export default function VehicleList({ vehicles, loading, error }: VehicleListProps) {
  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<string>("");
  const [sortBy, setSortBy] = React.useState<string>("name");
  const [page, setPage] = React.useState(1);
  const pageSize = 10;

  // Filter & search logic
  let filteredVehicles = vehicles.filter(v => {
    const matchSearch = v.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter ? v.status === statusFilter : true;
    return matchSearch && matchStatus;
  });
  // Sort logic
  filteredVehicles = [...filteredVehicles].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "status") {
      return a.status.localeCompare(b.status);
    } else if (sortBy === "speed") {
      return b.speed - a.speed;
    }
    return 0;
  });
  const totalPages = Math.ceil(filteredVehicles.length / pageSize);
  const pagedVehicles = filteredVehicles.slice((page - 1) * pageSize, page * pageSize);

  // Header & branding
  // Export CSV logic
  const handleExportCSV = (data: Vehicle[]) => {
    const header = ["ID", "Nama", "Status", "Kecepatan", "Updated At"];
    const rows = data.map(v => [v.id, v.name, v.status, v.speed, v.updated_at]);
    let csvContent = "data:text/csv;charset=utf-8," + header.join(",") + "\n" + rows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "vehicles.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const Header = (
    <header className="bg-blue-600 text-white py-4 px-6 flex flex-col sm:flex-row items-center justify-between rounded-t-lg shadow">
      <div className="flex items-center gap-2">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13l2-2m0 0l7-7 7 7M13 5v6h6" /></svg>
        <span className="font-bold text-xl tracking-wide">Vehicle Tracker</span>
      </div>
      <div className="mt-2 sm:mt-0 flex gap-2 items-center">
        <input
          type="text"
          placeholder="Cari kendaraan..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-3 py-1 rounded border border-gray-300 text-black focus:outline-none focus:ring focus:ring-blue-300"
        />
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
          className="px-3 py-1 rounded border border-gray-300 text-black focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">Semua Status</option>
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="px-3 py-1 rounded border border-gray-300 text-black focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="name">Sortir Nama</option>
          <option value="status">Sortir Status</option>
          <option value="speed">Sortir Kecepatan</option>
        </select>
        <Button type="button" onClick={() => handleExportCSV(filteredVehicles)} className="bg-green-500 text-white px-3 py-1 rounded">Export CSV</Button>
      </div>
    </header>
  );

  const Footer = (
    <footer className="bg-gray-100 text-gray-500 py-4 px-6 text-center rounded-b-lg mt-8">
      &copy; {new Date().getFullYear()} Vehicle Tracker Dashboard &mdash; Powered by React, Zustand, TailwindCSS, ShadCN UI
    </footer>
  );

  if (loading) return (
    <div className="p-4 text-center animate-pulse">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4">
        {[...Array(pageSize)].map((_, i) => (
          <div key={i} className="bg-white rounded shadow p-4 flex flex-col md:flex-row md:items-center justify-between w-full">
            <div className="flex-1 min-w-0">
              <div className="font-bold text-lg flex items-center gap-2 break-words">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="h-3 bg-gray-200 rounded w-1/3 mt-2"></div>
              <div className="h-2 bg-gray-200 rounded w-1/4 mt-1"></div>
            </div>
            <div className="w-20 h-8 bg-gray-200 rounded mt-2 md:mt-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
  if (error) return <div className="p-4 text-center text-red-500">{error}</div>;
  if (!Array.isArray(vehicles) || vehicles.length === 0)
    return (
      <div>
        {Header}
        <div className="p-8 text-center text-gray-400 flex flex-col items-center">
          <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mb-4 text-blue-200"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13l2-2m0 0l7-7 7 7M13 5v6h6" /></svg>
          <div>Tidak ada kendaraan ditemukan</div>
        </div>
        {Footer}
      </div>
    );
  return (
    <div className="flex flex-col min-h-screen px-2 sm:px-4 md:px-0">
      {Header}
      <HeroSection />
      <div className="flex-1">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4">
          {pagedVehicles.length === 0 ? (
            <div className="col-span-full p-8 text-center text-gray-400 flex flex-col items-center">
              <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mb-4 text-blue-200"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13l2-2m0 0l7-7 7 7M13 5v6h6" /></svg>
              <div>Tidak ada kendaraan sesuai filter/pencarian</div>
            </div>
          ) : (
            pagedVehicles.map(vehicle => (
              <div
                key={vehicle.id}
                className="bg-white rounded shadow p-4 flex flex-col md:flex-row md:items-center justify-between transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg w-full"
                style={{ minWidth: 0 }}
              >
                <div className="flex items-center gap-3">
                  {/* Avatar/icon kendaraan */}
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <rect x="7" y="10" width="10" height="5" rx="2" fill="currentColor" />
                      <circle cx="9" cy="16" r="1" fill="white" />
                      <circle cx="15" cy="16" r="1" fill="white" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-lg flex items-center gap-2 break-words">
                      {vehicle.name}
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-semibold ${vehicle.status === "ACTIVE" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                      >
                        {vehicle.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">Speed: {vehicle.speed} km/h</div>
                    <div className="text-xs text-gray-400">Updated: {new Date(vehicle.updated_at).toLocaleString()}</div>
                  </div>
                </div>
                <Link to={`/vehicles/${vehicle.id}`} className="mt-2 md:mt-0 w-full md:w-auto">
                  <Button type="button" className="w-full md:w-auto">Detail</Button>
                </Link>
              </div>
            ))
          )}
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            <Button type="button" onClick={() => setPage(page - 1)} disabled={page === 1}>
              Prev
            </Button>
            <span className="px-2 text-sm text-gray-600">Page {page} of {totalPages}</span>
            <Button type="button" onClick={() => setPage(page + 1)} disabled={page === totalPages}>
              Next
            </Button>
          </div>
        )}
      </div>
      {Footer}
    </div>
  );
}
