import React from "react";

interface HabitsProps {
  habits: { id: number; name: string }[];
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
