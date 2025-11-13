import { CSSProperties, useEffect, useMemo, useState } from "react";

const SECOND_INTERVAL_MS = 1000;

const handStyle = (
  rotation: number,
  length: string,
  color: string,
): CSSProperties => ({
  transform: `translateX(-50%) rotate(${rotation}deg)`,
  transformOrigin: "bottom center",
  height: length,
  backgroundColor: color,
});

const formatDigitalTime = (date: Date) =>
  date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

const AnalogClock = () => {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), SECOND_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  const secondAngle = useMemo(
    () => time.getSeconds() * 6 + time.getMilliseconds() * 0.006,
    [time],
  );
  const minuteAngle = useMemo(
    () => time.getMinutes() * 6 + time.getSeconds() * 0.1,
    [time],
  );
  const hourAngle = useMemo(
    () => (time.getHours() % 12) * 30 + time.getMinutes() * 0.5,
    [time],
  );

  const digitalTime = useMemo(() => formatDigitalTime(time), [time]);

  return (
    <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
      <div className="w-40 h-40 p-1 rounded-full gradient-rainbow shadow-[0_0_40px_rgba(255,255,255,0.25)] dark:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
        <div
          className="relative w-full h-full rounded-full border border-border shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, hsl(var(--foreground)/0.15), transparent 45%), radial-gradient(circle at 60% 40%, hsl(var(--foreground)/0.10), transparent 40%), hsl(var(--background))",
          }}
        >
          <div className="absolute inset-0">
            {Array.from({ length: 12 }).map((_, index) => {
              const angle = index * 30;
              return (
                <span
                  key={angle}
                  className="absolute w-[2px] h-3 rounded-full"
                  style={{
                    backgroundColor: "hsl(var(--foreground) / 0.7)",
                    left: "50%",
                    bottom: "50%",
                    transform: `translateX(-50%) rotate(${angle}deg) translateY(-100%)`,
                    transformOrigin: "center bottom",
                  }}
                />
              );
            })}
          </div>

          {/* Second hand */}
          <span
            className="absolute left-1/2 bottom-1/2 rounded-full"
            style={{
              width: "2px",
              ...handStyle(secondAngle, "40%", "hsl(var(--rainbow-yellow))"),
            }}
          />

          {/* Minute hand */}
          <span
            className="absolute left-1/2 bottom-1/2 rounded-full"
            style={{
              width: "4px",
              borderRadius: "999px",
              ...handStyle(minuteAngle, "33%", "hsl(var(--rainbow-blue))"),
            }}
          />

          {/* Hour hand */}
          <span
            className="absolute left-1/2 bottom-1/2 rounded-full"
            style={{
              width: "5px",
              ...handStyle(hourAngle, "25%", "hsl(var(--rainbow-violet))"),
            }}
          />

          {/* Center dot */}
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
               style={{
                 backgroundColor: "hsl(var(--foreground))",
                 boxShadow: "0 0 10px hsl(var(--foreground) / 0.8)"
               }}
          />

          {/* Digital time */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-foreground/80">
            {digitalTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalogClock;
