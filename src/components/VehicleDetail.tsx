export type VehicleDetail = {
  vehicleId: number;
  odometer: number;
  fuel_level: number;
  timestamp: string;
  latitude: number;
  longitude: number;
  speed: number;
};

interface VehicleDetailProps {
  detail: VehicleDetail | null;
  loading: boolean;
  error: string | null;
}

export default function VehicleDetail({ detail, loading, error }: VehicleDetailProps) {
  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (error) return <div className="p-4 text-center text-red-500">{error}</div>;
  if (!detail) return null;
  return (
    <div className="bg-white rounded shadow p-6 max-w-md mx-auto">
      <div className="font-bold text-lg mb-2">Vehicle ID: {detail.vehicleId}</div>
      <div className="mb-1">Odometer: {detail.odometer} km</div>
      <div className="mb-1">Fuel Level: {detail.fuel_level}%</div>
      <div className="mb-1">Speed: {detail.speed} km/h</div>
      <div className="mb-1">Timestamp: {new Date(detail.timestamp).toLocaleString()}</div>
      <div className="mb-1">Location: {detail.latitude}, {detail.longitude}</div>
    </div>
  );
}
