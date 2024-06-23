import EditModule from "./EditModule";
import styles from "./editButton.module.css";
export default function EditButton({
  index,
  edit,
  setEdit,
  setIsEditor,
  entries,
  setEntries,
  setSavedJournal,
  savedJournal,
  setSaved,
  randomPrompt,
  module,
  setModule,
}) {
  function handleEdit(index) {
    setEdit(true);
    setModule(!module);
  }
  return (
    <div>
      <button onClick={() => handleEdit(index)} className={styles.btn}>
        Edit
      </button>
    </div>
  );
}
