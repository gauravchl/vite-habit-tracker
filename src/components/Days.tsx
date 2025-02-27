import React from "react";
import { format, differenceInCalendarDays, addDays, isToday, isFuture, subDays } from "date-fns";

import db, { Habit } from "../db";

interface DaysProps {
  habits: Habit[];
  entries: { habitId: number; completedAt: string }[];
}

const Days: React.FC<DaysProps> = ({ habits, entries }) => {
  let firstEntry = entries.sort((a, b) => new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime())[0] || null;

  // show atleast past 7 days
  if (!firstEntry || new Date(firstEntry.completedAt) > subDays(new Date(), 7)) firstEntry = { completedAt: subDays(new Date(), 7).toISOString(), habitId: 0 };

  const daysToShow = differenceInCalendarDays(new Date(), new Date(firstEntry.completedAt)) + 15;

  const days = [firstEntry ? new Date(firstEntry.completedAt) : new Date()];
  for (let i = 1; i < daysToShow; i++) {
    days.push(addDays(days[i - 1], 1));
  }

  const handleEntryChange = async (checked: boolean, habitId?: number, completedAt?: string) => {
    if (habitId === undefined || completedAt === undefined) return;
    if (checked) await db.entries.add({ habitId, completedAt });
    if (!checked) await db.entries.where({ habitId, completedAt }).delete();
  };

  return (
    <div className="flex-1 flex flex-col mb-auto overflow-auto">
      <div className="flex flex-row">
        {days.map((day, i) => (
          <div key={i} className={`flex-1 text-center ${isToday(day) ? "border border-slate-400 rounded pb-2" : ""}`}>
            <div className={`flex justify-center items-center border-r border-b bg-slate-200 border-gray-400 text-sm px-2 ${isToday(day) ? "underline text-blue-600" : ""}`}>
              {format(day, "E")}
            </div>

            {habits.map((habit) => {
              const entry = entries.find((e) => e.habitId === habit.id && format(new Date(e.completedAt), "MM/dd/yyyy") === format(day, "MM/dd/yyyy"));

              return (
                <div className="flex items-center  justify-center py-3 relative" key={habit.id}>
                  <input
                    id={habit?.id?.toString() + day.toISOString()}
                    disabled={isFuture(format(day, "MM/dd/yyyy"))}
                    type="checkbox"
                    value=""
                    checked={!!entry}
                    className="w-4 h-4  bg-gray-100 border-gray-300 rounded"
                    onChange={(e) => handleEntryChange(e.target.checked, habit.id, entry?.completedAt || day.toISOString())}
                  />
                  <label htmlFor={habit?.id?.toString() + day.toISOString()} className="absolute w-full h-full cursor-pointer hover:border hover:border-cyan-400 rounded"></label>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Days;
