import { useEffect } from "react";
import { useState } from "react";
import "./clock-1.css";

export function Clock1() {
  const [time, setTime] = useState(new Date());
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setHours(time.getHours().toString().padStart(2, '0'));
      setMinutes(time.getMinutes().toString().padStart(2, '0'));
      setSeconds(time.getSeconds().toString().padStart(2, '0'));
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="clock-1">
      <div className="clock-1-container">
        <span className="digits">{hours}</span>
        <span className="colon">:</span>
        <span className="digits">{minutes}</span>
        <span className="colon">:</span>
        <span className="digits">{seconds}</span>
      </div>
    </div>
  );
}