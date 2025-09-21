type WorldClockDisplayProps = {
  date: Date;
  variant?: "text" | "segment"; 
};

import SevenSegmentDisplay from "./SevenSegmentDisplay"; 

export default function WorldClockDisplay({ date, variant = "text" }: WorldClockDisplayProps) {
  if (variant === "segment") {
    return <SevenSegmentDisplay date={date} />;
  }

  const h = date.getHours().toString().padStart(2, "0");
  const m = date.getMinutes().toString().padStart(2, "0");
  const s = date.getSeconds().toString().padStart(2, "0");

  return (
    <div className="city-time">
      {h}:{m}:{s}
    </div>
  );
}
