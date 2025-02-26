import React from "react";
import Days from "./Days";
import Habits from "./Habits";

const habits = [
  { id: 1, name: "Morning workout" },
  { id: 2, name: "Meditation" },
  { id: 3, name: "Journaling" },
  { id: 4, name: "Reading" },
  { id: 5, name: "Core workout" },
  { id: 6, name: "Yoga" },
  { id: 7, name: "Tradmil" },
  { id: 8, name: "Gym" },
  { id: 9, name: "Herb Shake" },
  { id: 10, name: "Herb Afresh" },
  { id: 11, name: "Omega3 + D3" },
  { id: 12, name: "Water 3L" },
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
