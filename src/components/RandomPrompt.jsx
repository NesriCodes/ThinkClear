import { useEffect, useState } from "react";
import data from "../data/prompt.json";
import styles from "./randomPrompt.module.css";

export default function RandomPrompt({
  randomPrompt,
  randomPromptData,
  setRandomPrompt,
  setRandomPromptData,
}) {
  useEffect(() => {
    selectRandomNumber();
  }, []);

  function selectRandomNumber() {
    const dataLength = data.length;
    const randomIndex = Math.floor(Math.random() * dataLength);
    setRandomPrompt(randomIndex);
    setRandomPromptData(data[randomIndex]);
  }
  return (
    <div className={styles.big}>
      {randomPrompt !== null && (
        <div className={styles.promptContainer}>
          <p className={styles.promptType}>{data[randomPrompt].type} prompt</p>
          <h1 key={data[randomPrompt].id} className={styles.prompt}>
            {randomPromptData.prompt}
          </h1>
        </div>
      )}
      <ul className={styles.uList}>
        <li className={styles.list}>Scroll to write Journal.</li>
        <li className={styles.list}>Refresh to get new prompt. </li>
      </ul>
    </div>
  );
}
