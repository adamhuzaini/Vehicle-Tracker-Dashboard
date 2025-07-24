export default function About() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">About Vehicle Tracker</h2>
      <p className="mb-2">A simple dashboard to monitor vehicle telemetry, built with React, Zustand, TailwindCSS, and ShadCN UI.</p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>List & detail kendaraan</li>
        <li>Search, filter, dan responsif</li>
        <li>State global dengan Zustand</li>
        <li>UI modern dan clean</li>
      </ul>
      <p className="mt-4 text-gray-500">Created for frontend take-home assignment &mdash; {new Date().getFullYear()}</p>
    </div>
  );
}
