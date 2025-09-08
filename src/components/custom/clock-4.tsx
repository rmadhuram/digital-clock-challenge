import { useEffect, useState } from "react";
import "./clock-4.css";
import { Sun, Moon } from "lucide-react";
import WorldClockDisplay from "./SevenSegmentDisplay"; // ✅ reuse Level 3 component

function useTimeZone(timeZone: string) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return new Date(now.toLocaleString("en-US", { timeZone }));
}

const cities = [
  { name: "New York", tz: "America/New_York", flag: "🇺🇸" },
  { name: "London", tz: "Europe/London", flag: "🇬🇧" },
  { name: "Tokyo", tz: "Asia/Tokyo", flag: "🇯🇵" },
  { name: "Sydney", tz: "Australia/Sydney", flag: "🇦🇺" },
  { name: "Paris", tz: "Europe/Paris", flag: "🇫🇷" },
  { name: "Dubai", tz: "Asia/Dubai", flag: "🇦🇪" },
  { name: "India", tz: "Asia/Kolkata", flag: "🇮🇳" },   // ✅ Added India
  { name: "Toronto", tz: "America/Toronto", flag: "🇨🇦" } // ✅ Added Canada (Toronto)
];

function isDayTime(hour: number) {
  return hour >= 6 && hour < 18;
}

export default function Clock4() {
  return (
    <div className="world-clock">
      {cities.map((city) => {
        const cityTime = useTimeZone(city.tz);
        const hour = cityTime.getHours();
        const dayTime = isDayTime(hour);

        return (
          <div
            key={city.name}
            className={`city-card ${dayTime ? "day" : "night"}`}
          >
            <div className="city-header">
              <span className="city-flag">{city.flag}</span>
              {city.name}
              {dayTime ? (
                <Sun className="icon sun" />
              ) : (
                <Moon className="icon moon" />
              )}
            </div>

            {/* ✅ reuse component (make clock smaller) */}
            <div className="city-time small-time">
              <WorldClockDisplay date={cityTime} variant="text" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
