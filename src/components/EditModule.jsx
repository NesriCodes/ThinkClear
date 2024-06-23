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
  randomprompt,
  module,
  setModule,
  index,
}) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (savedJournal) {
      setSelected(savedJournal[index]);
    }
  }, [module, savedJournal, index]);

  const handleClick = (e) => {
    if (!e.target.closest("form")) {
      setModule(!module);
    }
  };
  function handleSubmit(e) {
    e.preventDefault();

    // Create a new array with the updated entry
    const updatedSavedJournal = [...savedJournal];
    updatedSavedJournal[index] = [selected, entries];

    // Update the savedJournal state
    setSavedJournal(updatedSavedJournal);

    // Reset the entries and editor state
    if (edit === true) {
      setEntries("");
      setIsEditor(false);
      setModule(!module);
    }
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
          value={selected}
          onChange={setSelected}
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
