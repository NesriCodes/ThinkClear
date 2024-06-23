import { useEffect, useState } from "react";
import AddButton from "./AddButton";
import Editor from "./Editor";
import styles from "./journalPanel.module.css";
import JournalList from "./JournalList";

export default function JournalPanel({
  randomPrompt,
  savedJournal,
  setSavedJournal,
  entries,
  setEntries,
  setSaved,
}) {
  const [isEditor, setIsEditor] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <div className={styles.container}>
      <AddButton setIsEditor={setIsEditor} isEditor={isEditor} />
      {isEditor === true ? (
        <Editor
          randomPrompt={randomPrompt}
          entries={entries}
          setEntries={setEntries}
          setSavedJournal={setSavedJournal}
          setIsEditor={setIsEditor}
          savedJournal={savedJournal}
          setSaved={setSaved}
          edit={edit}
        />
      ) : null}
      <JournalList
        savedJournal={savedJournal}
        setSavedJournal={setSavedJournal}
        setEdit={setEdit}
        setIsEditor={setIsEditor}
        edit={edit}
        randomPrompt={randomPrompt}
        entries={entries}
        setEntries={setEntries}
        setSaved={setSaved}
      />
    </div>
  );
}
