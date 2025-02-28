import React from "react";
import { FcBookmark } from "react-icons/fc";

import { Habit } from "../db";

interface HabitsProps {
  habits: Habit[];
}

const Habits: React.FC<HabitsProps> = ({ habits }) => {
  return (
    <div className="bg-[#f5f7f9] text-slate-600 px-4 h-screen text-sm w-[232px]">
      <h1 className="text-2xl font-medium  font-jm  text-black flex items-center py-2 border-b border-b-slate-300">
        <FcBookmark size={20} className="mr-2 ml-[-4px]" /> Habit Tracker
      </h1>

      <div className="mt-4">
        {habits.map((habit) => (
          <div key={habit.id} className="py-2">
            {habit.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habits;
