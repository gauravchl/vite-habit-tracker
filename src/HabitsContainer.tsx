import React from "react";
import Days from "./Days";
import Habits from "./Habits";

const habits = [
  { id: 1, name: "Wakeup 6 AM" },
  { id: 2, name: "Reading" },
  { id: 3, name: "Journaling" },
  { id: 4, name: "Meditation" },
  { id: 5, name: "Water 3L" },
];

const entries = [
  { habitId: 1, completedAt: "2025-02-25T12:00:00.000Z" },
  { habitId: 2, completedAt: "2025-02-25T12:00:00.000Z" },
  { habitId: 3, completedAt: "2025-02-25T12:00:00.000Z" },
  { habitId: 1, completedAt: "2025-02-22T12:00:00.000Z" },
  { habitId: 4, completedAt: "2025-02-25T12:00:00.000Z" },
  { habitId: 2, completedAt: "2025-02-25T12:00:00.000Z" },
];

const HabitsContainer: React.FC = () => {
  return (
    <div className="flex justify-center items-center border border-gray-400 rounded-sm p-4 mx-2">
      <Habits habits={habits} />
      <Days habits={habits} entries={entries} />
    </div>
  );
};

export default HabitsContainer;
