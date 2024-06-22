import styles from "./journalList.module.css";
export default function JournalList({ savedJournal }) {
  console.log(savedJournal);
  return (
    <div>
      {savedJournal && savedJournal.length > 0 ? (
        savedJournal.map((item, index) => (
          <div
            key={index}
            className={styles.container}
            dangerouslySetInnerHTML={{ __html: item }}
          ></div>
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
