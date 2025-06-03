export default function MainContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center p-4">
      {/* Location */}
      <h1 className="text-3xl font-bold mt-8 mb-2 text-blue-800">
        Weather in Budapest
      </h1>
      {/* Current Temperature */}
      <div className="text-6xl font-semibold text-blue-600 mb-6">
        23°C
      </div>
      {/* 24-Hour Forecast */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4 text-blue-700">
          24-Hour Forecast
        </h2>
        <div className="flex overflow-x-auto space-x-4">
          
        </div>
      </div>
    </div>
  );
}
