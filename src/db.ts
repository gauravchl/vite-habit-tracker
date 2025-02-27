import Dexie, { type EntityTable } from "dexie";

export interface Habit {
  id?: number;
  name: string;
}

export interface Entry {
  id?: number;
  habitId: number;
  completedAt: string;
}

class HabitTrackerDatabase extends Dexie {
  habits: EntityTable<Habit, "id">;
  entries: EntityTable<Entry, "id">;

  constructor() {
    super("HabitTrackerDatabase");

    this.version(1).stores({
      habits: "++id,name",
      entries: "++id,habitId,completedAt",
    });

    this.habits = this.table("habits");
    this.entries = this.table("entries");
  }
}

const db = new HabitTrackerDatabase();
export default db;
