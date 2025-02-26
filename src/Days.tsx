import React from "react";
import { format, differenceInCalendarDays, addDays, isToday } from "date-fns";

interface DaysProps {
  habits: { id: number; name: string }[];
  entries: { habitId: number; completedAt: string }[];
}

const currentDate: Date = new Date();

const Days: React.FC<DaysProps> = ({ habits, entries }) => {
  const firstEntry = entries.sort((a, b) => new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime())[0] || null;
  const lastEntry = entries.sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())[0] || null;

  let daysToShow = 15;
  if (firstEntry) {
    daysToShow = differenceInCalendarDays(new Date(), new Date(firstEntry.completedAt)) + daysToShow;
  }

  const days = [firstEntry ? new Date(firstEntry.completedAt) : new Date()];
  for (let i = 1; i < daysToShow; i++) {
    days.push(addDays(days[i - 1], 1));
  }

  return (
    <div className="flex-1 flex flex-col mb-auto overflow-scroll">
      <div className="bg-slate-200 flex flex-row">
        {days.map((day, i) => (
          <div key={i} className="flex-1 flex justify-center items-center border-r border-b border-gray-400">
            <div className={`text-sm px-2 ${isToday(day) ? "underline text-blue-600" : ""}`}>{format(day, "E")}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Days;
