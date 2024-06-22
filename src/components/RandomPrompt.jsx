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
    <div>
      {randomPrompt !== null && (
        <div className={styles.promptContainer}>
          <p className={styles.promptType}>{data[randomPrompt].type} prompt</p>
          <h1 key={data[randomPrompt].id} className={styles.prompt}>
            {randomPromptData.prompt}
          </h1>
        </div>
      )}
    </div>
  );
}
