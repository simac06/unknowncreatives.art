"use client";

import React, { useState, useEffect } from "react";

const TimeUnit = ({ value, label }) => (
  <div className=" w-1/4 flex flex-col items-center ">
    <span className="text-large font-bold">{value}</span>
    <span className="text-[0.6rem] ">{value === 1 ? label : `${label}S`}</span>
  </div>
);

export default function Countdown({ date }) {
  // Initialize state as null to avoid hydration mismatch
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(date) - new Date();
      if (difference <= 0) {
        return null;
      }
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Set initial value
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

  // Show nothing until client-side calculation is done
  if (!timeLeft) return null;

  return (
    <div id="countdown" className="w-1/2">
      <div className="flex justify-between">
        <TimeUnit value={timeLeft.days} label="DAY" />
        <TimeUnit value={timeLeft.hours} label="HOUR" />
        <TimeUnit value={timeLeft.minutes} label="MIN" />
        <TimeUnit value={timeLeft.seconds} label="SEC" />
      </div>
    </div>
  );
}
