import { useEffect } from "react";
import { useVehicleStore } from "../store/vehicleStore";
import VehicleList from "../components/VehicleList";

export default function VehicleListPage() {
  const { vehicles, loading, error, fetchVehicles } = useVehicleStore();

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  return (
    <div className="w-full min-h-screen bg-gray-100 px-16 py-8">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Vehicle List</h2>

      <VehicleList
        vehicles={Array.isArray(vehicles) ? vehicles : []}
        loading={loading}
        error={error}
      />
    </div>
  );
}
