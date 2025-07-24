import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-6 py-6 px-4 bg-blue-50 rounded-lg shadow mb-6">
      <div className="flex-1 flex flex-col items-start justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
          Pantau Kendaraan Anda Secara Real-Time
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-4">
          Dashboard ini membantu Anda memantau status, lokasi, dan kecepatan
          kendaraan dengan mudah dan cepat. Data selalu update dan siap diekspor!
        </p>
      </div>
      <div className="flex-1 flex justify-end">
        <img
          src="/hero.jpg"
          alt="Hero Banner"
          className="rounded-lg shadow-lg max-w-full h-auto object-cover"
          style={{ maxHeight: 320, minWidth: 220 }}
        />
      </div>
    </div>
  );
}
