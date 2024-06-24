import styles from "./deleteButton.module.css";
export default function DeleteButton({ savedJournal, setSavedJournal, index }) {
  function handleDelete(index) {
    const newList = savedJournal.filter((item, i) => i !== index);
    setSavedJournal(newList);
  }

  return (
    <div>
      <button onClick={() => handleDelete(index)} className={styles.btn}>
        Delete
      </button>
    </div>
  );
}
