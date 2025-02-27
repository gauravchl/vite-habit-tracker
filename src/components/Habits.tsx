import React from "react";

import { Habit } from "../db";

interface HabitsProps {
  habits: Habit[];
}

const Habits: React.FC<HabitsProps> = ({ habits }) => {
  return (
    <div className="bg-slate-200 px-4 rounded-sm mt-6">
      {habits.map((habit) => (
        <div key={habit.id} className="py-2">
          {habit.name}
        </div>
      ))}
    </div>
  );
};

export default Habits;
