import { useEffect, useState } from "react";
import "./clock-4.css";

function useTimeZone(timeZone: string) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const timeString = formatter.format(now);

  const hour = Number(
    new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      hour12: false,
    }).format(now)
  );

  return { timeString, hour };
}


const cities = [
  { name: "New York", tz: "America/New_York", flag: "🇺🇸" },
  { name: "London", tz: "Europe/London", flag: "🇬🇧" },
  { name: "Tokyo", tz: "Asia/Tokyo", flag: "🇯🇵" },
  { name: "Sydney", tz: "Australia/Sydney", flag: "🇦🇺" },
  { name: "Paris", tz: "Europe/Paris", flag: "🇫🇷" },
  { name: "Dubai", tz: "Asia/Dubai", flag: "🇦🇪" },
  { name: "New Delhi", tz: "Asia/Kolkata", flag: "🇮🇳" },
  { name: "São Paulo", tz: "America/Sao_Paulo", flag: "🇧🇷" },
];

export default function WorldClock() {
  return (
    <div className="world-clock">
      {cities.map((city) => {
        const { timeString, hour } = useTimeZone(city.tz);
        const isDay = hour >= 6 && hour < 18;
        return (
          <div key={city.name} className={`city-card ${isDay ? "day" : "night"}`}>
            <div className="city-header">
              <span className="city-flag">{city.flag}</span>
              {city.name}
              <span className="icon">{isDay ? "☀️" : "🌙"}</span>
            </div>
            <div className="time">{timeString}</div>
          </div>
        );
      })}
    </div>
  );
}
