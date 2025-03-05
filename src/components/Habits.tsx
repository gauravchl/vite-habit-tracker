import React, { useState } from "react";
import { FcBookmark } from "react-icons/fc";
import { IoMdAddCircleOutline } from "react-icons/io";

import db, { Habit } from "../db";

interface HabitsProps {
  habits: Habit[];
}

const Habits: React.FC<HabitsProps> = ({ habits }) => {
  const [newHabitName, setNewHabitName] = useState("");

  const handleAddHabit = () => {
    if (!newHabitName) return;
    db.habits.add({ name: newHabitName });
    setNewHabitName("");
  };
  return (
    <div className="bg-[#f5f7f9] text-slate-600 px-4 h-screen text-sm w-[232px]">
      <h1 className="text-2xl font-medium  font-jm  text-black flex items-center py-2 border-b border-b-slate-300">
        <FcBookmark size={20} className="mr-2 ml-[-4px]" /> Habit Tracker
      </h1>

      <div className="mt-4">
        {habits.map((habit) => (
          <div key={habit.id} className="h-[42px] flex items-center">
            {habit.name}
          </div>
        ))}
      </div>

      <div className="mt-4  flex items-center">
        <input
          onChange={(e) => setNewHabitName(e.target.value)}
          value={newHabitName}
          type="text"
          placeholder="Type a new habit…"
          className="w-full h-10 px-2 border border-gray-300 rounded"
          onKeyDown={(e) => e.key === "Enter" && handleAddHabit()}
        />

        <button className="bg-green-500 hover:bg-green-700 text-white font-bold  rounded cursor-pointer px-3 flex-1 items-center justify-center h-10 ml-2" onClick={handleAddHabit}>
          <IoMdAddCircleOutline size={18} />
        </button>
      </div>
    </div>
  );
};

export default Habits;
