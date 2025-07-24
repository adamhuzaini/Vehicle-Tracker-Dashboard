import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-4 py-3 flex items-center justify-between shadow">
      <div className="flex items-center gap-2">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13l2-2m0 0l7-7 7 7M13 5v6h6" /></svg>
        <span className="font-bold text-lg tracking-wide">Vehicle Tracker</span>
      </div>
      <div className="flex gap-4">
        <Link to="/" className="text-white font-semibold hover:underline hover:text-blue-200 transition">Home</Link>
        <Link to="/about" className="text-white font-semibold hover:underline hover:text-blue-200 transition">About</Link>
      </div>
    </nav>
  );
}
