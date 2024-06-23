import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./editor.module.css";
import SaveBtn from "./SaveBtn";

export default function Editor({
  entries,
  setEntries,
  setSavedJournal,
  setIsEditor,
  savedJournal,
  edit,
  setSaved,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    const existingEntry = savedJournal.find((entry) => entry === entries);

    if (!existingEntry) {
      // Entry doesn't exist, add it to the savedJournal
      setSavedJournal([...savedJournal, entries]);
    }
    setEntries("");
    setIsEditor(false);
  }

  function handleChange(value) {
    setEntries(value);
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <ReactQuill
          className={styles.container}
          theme="snow"
          value={entries}
          onChange={handleChange}
        />
        <SaveBtn
          savedJournal={savedJournal}
          setSavedJournal={setSavedJournal}
          entries={entries}
          setSaved={setSaved}
        />
      </form>
    </>
  );
}
