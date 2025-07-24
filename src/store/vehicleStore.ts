import { create } from 'zustand';
import type { Vehicle } from '../components/VehicleList';
import type { VehicleDetail } from '../components/VehicleDetail';

interface State {
  vehicles: Vehicle[];
  vehicleDetail: VehicleDetail | null;
  loading: boolean;
  error: string | null;
  fetchVehicles: () => Promise<void>;
  fetchVehicleDetail: (id: number) => Promise<void>;
}

export const useVehicleStore = create<State>((set) => ({
  vehicles: [
    { id: 1, name: 'Toyota Avanza', status: 'ACTIVE', speed: 60, updated_at: '2025-07-23T10:00:00Z' },
    { id: 2, name: 'Honda Jazz', status: 'INACTIVE', speed: 0, updated_at: '2025-07-23T09:30:00Z' },
    { id: 3, name: 'Suzuki Ertiga', status: 'ACTIVE', speed: 45, updated_at: '2025-07-23T09:45:00Z' },
    { id: 4, name: 'Daihatsu Xenia', status: 'ACTIVE', speed: 50, updated_at: '2025-07-23T09:50:00Z' },
    { id: 5, name: 'Mitsubishi Pajero', status: 'INACTIVE', speed: 0, updated_at: '2025-07-23T09:55:00Z' },
    { id: 6, name: 'Toyota Fortuner', status: 'ACTIVE', speed: 70, updated_at: '2025-07-23T10:05:00Z' },
    { id: 7, name: 'Honda CRV', status: 'ACTIVE', speed: 65, updated_at: '2025-07-23T10:10:00Z' },
    { id: 8, name: 'Nissan Livina', status: 'INACTIVE', speed: 0, updated_at: '2025-07-23T10:15:00Z' },
    { id: 9, name: 'Hyundai Stargazer', status: 'ACTIVE', speed: 55, updated_at: '2025-07-23T10:20:00Z' },
    { id: 10, name: 'Kia Seltos', status: 'ACTIVE', speed: 60, updated_at: '2025-07-23T10:25:00Z' },
    { id: 11, name: 'Mazda CX-5', status: 'ACTIVE', speed: 62, updated_at: '2025-07-23T10:30:00Z' },
    { id: 12, name: 'Toyota Yaris', status: 'INACTIVE', speed: 0, updated_at: '2025-07-23T10:35:00Z' },
    { id: 13, name: 'Honda Brio', status: 'ACTIVE', speed: 48, updated_at: '2025-07-23T10:40:00Z' },
    { id: 14, name: 'Datsun Go', status: 'INACTIVE', speed: 0, updated_at: '2025-07-23T10:45:00Z' },
    { id: 15, name: 'Toyota Innova', status: 'ACTIVE', speed: 58, updated_at: '2025-07-23T10:50:00Z' },
    { id: 16, name: 'Honda Mobilio', status: 'ACTIVE', speed: 53, updated_at: '2025-07-23T10:55:00Z' },
    { id: 17, name: 'Suzuki XL7', status: 'INACTIVE', speed: 0, updated_at: '2025-07-23T11:00:00Z' },
    { id: 18, name: 'Mitsubishi Xpander', status: 'ACTIVE', speed: 67, updated_at: '2025-07-23T11:05:00Z' },
    { id: 19, name: 'Wuling Almaz', status: 'ACTIVE', speed: 64, updated_at: '2025-07-23T11:10:00Z' },
    { id: 20, name: 'Renault Triber', status: 'INACTIVE', speed: 0, updated_at: '2025-07-23T11:15:00Z' },
  ],
  vehicleDetail: null,
  loading: false,
  error: null,
  fetchVehicles: async () => {
    set({ loading: false });
  },
  fetchVehicleDetail: async (id: number) => {
    set({ loading: true, error: null });
    set({
      vehicleDetail: {
        vehicleId: id,
        odometer: 123456.78,
        fuel_level: 70.2,
        timestamp: '2025-07-23T10:00:00Z',
        latitude: -6.12,
        longitude: 106.85,
        speed: 60,
      },
      loading: false,
      error: null,
    });
  },
}));
