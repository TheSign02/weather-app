import days from "../data/days";

export default function MainContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-600 flex flex-col items-center p-4">
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
        <div className="flex flex-col overflow-auto h-50">
          {Array.from({ length: 24 }).map((_, i) => (
            <p key={i} className="text-blue-800">{i}:00</p>
          ))}
        </div>
      {/* Daily Forecast */}
      {days.map(day => {
        return (
          <h3 key={day} className="text-blue-800">{day}</h3>
        )
      })}
      </div>
    </div>
  );
}
