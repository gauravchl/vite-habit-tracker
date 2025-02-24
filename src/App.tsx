import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-xl font-medium text-center py-2">Vite Habit Tracker</h1>

      <div className="flex justify-center items-center border border-gray-400 rounded-sm p-4 max-w-[720px] mx-auto">
        <div className="bg-slate-200 px-4 rounded-sm mt-6">
          <div className="py-2">Wakeup 6 AM</div>
          <div className="py-2">Reading</div>
          <div className="py-2">Journaling</div>
          <div className="py-2">Meditation</div>
          <div className="py-2">Water 3L</div>
        </div>

        <div className="flex-1 flex flex-col mb-auto">
          <div className="bg-slate-200 flex flex-row">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
