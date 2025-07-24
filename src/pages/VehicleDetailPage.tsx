import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useVehicleStore } from "../store/vehicleStore";
import VehicleDetail from "../components/VehicleDetail";
import { Button } from "../components/ui/Button";

export default function VehicleDetailPage() {
  const { id } = useParams();
  const { vehicleDetail, loading, error, fetchVehicleDetail } = useVehicleStore();

  useEffect(() => {
    if (id) fetchVehicleDetail(Number(id));
  }, [id, fetchVehicleDetail]);

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Vehicle Detail</h2>
      {loading && <Button variant="ghost" disabled>Loading...</Button>}
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <VehicleDetail detail={vehicleDetail} loading={loading} error={error} />
    </div>
  );
}
