import styles from "./saveBtn.module.css";

export default function SaveBtn({ setSavedJournal, savedJournal, entries, setSaved }) {
  function handleClick() {
    setSavedJournal([...savedJournal, entries]);
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
