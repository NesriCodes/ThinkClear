import { useEffect, useState } from "react";
import JournalPanel from "./components/JournalPanel";
import RandomPrompt from "./components/RandomPrompt";
import "./app.css";

function App() {
  const [randomPrompt, setRandomPrompt] = useState(null);
  const [randomPromptData, setRandomPromptData] = useState(null);
  const [entries, setEntries] = useState("");

  const [savedJournal, setSavedJournal] = useState([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedJournals =
      JSON.parse(localStorage.getItem("savedJournal")) || [];

    setSavedJournal(savedJournals);
  }, []);

  useEffect(() => {
    if (savedJournal.length > 0) {
      localStorage.setItem("savedJournal", JSON.stringify(savedJournal));
    }
  }, [savedJournal]);

  return (
    <div className="App">
      <RandomPrompt
        randomPrompt={randomPrompt}
        setRandomPrompt={setRandomPrompt}
        randomPromptData={randomPromptData}
        setRandomPromptData={setRandomPromptData}
      />
      <JournalPanel
        randomPrompt={randomPrompt}
        entries={entries}
        setEntries={setEntries}
        setSavedJournal={setSavedJournal}
        savedJournal={savedJournal}
        setSaved={setSaved}
      />
    </div>
  );
}

export default App;
