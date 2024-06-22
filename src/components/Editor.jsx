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
}) {
  function handleSubmit(e) {
    e.preventDefault();
    setSavedJournal([...savedJournal, entries]);
    setIsEditor(false);
    setEntries("");
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
        <SaveBtn />
      </form>
    </>
  );
}
