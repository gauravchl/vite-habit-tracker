import React from "react";
import { format, differenceInCalendarDays, addDays, isToday, isFuture, isSameDay } from "date-fns";

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
      <div className="flex flex-row">
        {days.map((day, i) => (
          <div key={i} className={`flex-1 text-center ${isToday(day) ? "border border-slate-400 rounded pb-2" : ""}`}>
            <div className={`flex justify-center items-center border-r border-b bg-slate-200 border-gray-400 text-sm px-2 ${isToday(day) ? "underline text-blue-600" : ""}`}>
              {format(day, "E")}
            </div>

            {habits.map((habit) => (
              <div className="flex items-center  justify-center py-3 relative" key={habit.id}>
                <input
                  id={habit.id.toString() + day.toISOString()}
                  disabled={isFuture(format(day, "MM/dd/yyyy"))}
                  type="checkbox"
                  value=""
                  className="w-4 h-4  bg-gray-100 border-gray-300 rounded"
                />
                <label htmlFor={habit.id.toString() + day.toISOString()} className="absolute w-full h-full cursor-pointer hover:border hover:border-cyan-400 rounded"></label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Days;
