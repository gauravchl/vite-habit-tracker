import { useState } from "react";
import HabitsContainer from "./HabitsContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-xl font-medium text-center py-2">Vite Habit Tracker</h1>

      <HabitsContainer />
    </>
  );
}

export default App;
