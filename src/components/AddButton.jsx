import add from "../assets/Group 65.svg";
import styles from "./addButton.module.css";
export default function AddButton({ isEditor, setIsEditor}) {
  function handleClick() {
    setIsEditor(!isEditor);
  }

  return (
    <div className={styles.PromptButtons}>
      <button onClick={handleClick} className={styles.editBtn}>
        <img src={add} alt="" className={styles.editImage} />
        Write
      </button>
    </div>
  );
}
