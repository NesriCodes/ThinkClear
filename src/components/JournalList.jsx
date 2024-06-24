import { useState } from "react";
import styles from "./journalList.module.css";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import EditModule from "./EditModule";
export default function JournalList({
  savedJournal,
  setSavedJournal,
  setEdit,
  setIsEditor,
  edit,
  entries,
  setEntries,
  setSaved,
  randomPrompt, 
}) {
  const [module, setModule] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState();
  function handleExpand(index) {
    setExpandedIndex(expandedIndex === index ? null : index);
  }
  return (
    <div className={styles.big}>
      {savedJournal && savedJournal.length > 0 ? (
        savedJournal.map((item, index) => (
          <div
            key={index}
            className={
              expandedIndex === index ? styles.expand : styles.container
            }
          >
            {edit === true ? (
              <div>
                <EditModule
                  index={index}
                  randomPrompt={randomPrompt}
                  entries={entries}
                  setEntries={setEntries}
                  setSavedJournal={setSavedJournal}
                  setIsEditor={setIsEditor}
                  savedJournal={savedJournal}
                  setSaved={setSaved}
                  edit={edit}
                  module={module}
                  setModule={setModule}
                  selectedIndex={selectedIndex}
                />
              </div>
            ) : (
              ""
            )}

            <div
              onClick={() => handleExpand(index)}
              className={styles.truncate}
              dangerouslySetInnerHTML={{ __html: item }}
            ></div>

            {expandedIndex === index ? (
              <div className={styles.buttons}>
                <DeleteButton
                  index={index}
                  savedJournal={savedJournal}
                  setSavedJournal={setSavedJournal}
                />
                <EditButton
                  index={index}
                  setEdit={setEdit}
                  setIsEditor={setIsEditor}
                  edit={edit}
                  randomPrompt={randomPrompt}
                  entries={entries}
                  setEntries={setEntries}
                  setSavedJournal={setSavedJournal}
                  savedJournal={savedJournal}
                  setSaved={setSaved}
                  module={module}
                  setModule={setModule}
                  setSelectedIndex={setSelectedIndex}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        ))
      ) : (
        <div className={styles.journals}>
          <h2 className={styles.noJournal}>No journal.</h2>
          <p className={styles.info}>
            click the the icon at the top to write your first journal.
          </p>
        </div>
      )}
    </div>
  );
}
