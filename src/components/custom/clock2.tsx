import { useEffect } from "react";
import { useState } from "react";
import "./clock-2.css";

export function SevenSegment({ num }: { num: number }) {
  const segments = [
    [true, true, true, true, true, true, false],
    [false, true, true, false, false, false, false],
    [true, true, false, true, true, false, true],
    [true, true, true, true, false, false, true],
    [false, true, true, false, false, true, true],
    [true, false, true, true, false, true, true],
    [true, false, true, true, true, true, true],
    [true, true, true, false, false, false, false],
    [true, true, true, true, true, true, true],
    [true, true, true, true, false, true, true],
  ];
  return (
    <div className="seven-segment">
      {segments[num].map((segment, index) => (
        <div key={index} className={`segment segment-${index} ${segment ? "on" : "off"}`}></div>
      ))}
    </div>
  );
}

export default function Clock2() {
  const [time, setTime] = useState(new Date());
  const [hour1, setHours1] = useState(0);
  const [hour2, setHours2] = useState(0); 
  const [minutes1, setMinutes1] = useState(0);
  const [minutes2, setMinutes2] = useState(0);
  const [seconds1, setSeconds1] = useState(0);
  const [seconds2, setSeconds2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setHours1(time.getHours() % 10);
      setHours2(Math.floor(time.getHours() / 10));
      setMinutes1(time.getMinutes() % 10);
      setMinutes2(Math.floor(time.getMinutes() / 10));
      setSeconds1(time.getSeconds() % 10);
      setSeconds2(Math.floor(time.getSeconds() / 10));
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="clock-2">
      <SevenSegment num={hour2} />
      <SevenSegment num={hour1} />
      <SevenSegment num={minutes2} />
      <SevenSegment num={minutes1} />
      <SevenSegment num={seconds2} />
      <SevenSegment num={seconds1} />
    </div>
  );
}