import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Styles from "./EditModule.module.css";
import SaveBtn from "./SaveBtn";

export default function EditModule({
  entries,
  setEntries,
  setSavedJournal,
  setIsEditor,
  savedJournal,
  edit,
  setSaved,
  module,
  setModule,
  selectedIndex,
}) {
  const [selectedEntry, setSelectedEntry] = useState("");

  useEffect(() => {
    if (savedJournal && savedJournal[selectedIndex]) {
      setSelectedEntry(savedJournal[selectedIndex]);
    }
  }, [savedJournal, selectedIndex]);

  const handleClick = (e) => {
    if (!e.target.closest("form")) {
      setModule(!module);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    const updatedSavedJournal = [...savedJournal];
    updatedSavedJournal[selectedIndex] = selectedEntry.trim();

    setSavedJournal(updatedSavedJournal.filter((item) => item.trim() !== ""));

    setEntries("");
    setModule(!module);
  }

  return (
    <div
      onClick={handleClick}
      className={module === true ? Styles.container : Styles.disapear}
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={Styles.form}
      >
        <ReactQuill
          className={Styles.editor}
          theme="snow"
          value={selectedEntry}
          onChange={setSelectedEntry}
        />
        <SaveBtn
          savedJournal={savedJournal}
          setSavedJournal={setSavedJournal}
          entries={entries}
          setSaved={setSaved}
        />
      </form>
    </div>
  );
}
