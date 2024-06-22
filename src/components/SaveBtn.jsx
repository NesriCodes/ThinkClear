import styles from "./saveBtn.module.css";

export default function SaveBtn({ setSavedJournal, entries, setSaved }) {
  function handleClick() {
    setSavedJournal(entries);
    setSaved(true);
  }
  return (
    <div className={styles.container}>
      <button onClick={handleClick} className={styles.btn}>
        save
      </button>
    </div>
  );
}
