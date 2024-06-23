import styles from "./editButton.module.css";
export default function EditButton({
  index,
  setEdit,
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
