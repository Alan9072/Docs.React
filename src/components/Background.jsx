import React from "react";
import styles from "./Background.module.css";

function Background() {
  return (
    <>
      <div className={styles.containDiv}>
        <div className={styles.navBar}>Documents</div>
        <p className={styles.backLogo}>Docs.</p>
      </div>
    </>
  );
}

export default Background;
