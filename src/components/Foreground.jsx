import React from "react";
import styles from "./Foreground.module.css";
import Card from "./Card";
import { IoMdAdd } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useRef, useState } from "react";

function Foreground() {
  const slidingDivRef = useRef(null);
  const InputDivRef = useRef(null);
  const [isSun, setIsSun] = useState(false);
  /****************/
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  /**************** */

  const handleButtonClick = () => {
    const slidingDiv = slidingDivRef.current;
    if (slidingDiv.classList.contains(styles.visible)) {
      slidingDiv.classList.remove(styles.visible);
    } else {
      slidingDiv.classList.add(styles.visible);
    }
    setIsSun(!isSun);
  };

  const handleInputButtonClick = () => {
    const InputDiv = InputDivRef.current;
    InputDiv.classList.add(styles.top);
  };
  const handleInputCloseButtonClick = () => {
    const InputDivClose = InputDivRef.current;
    InputDivClose.classList.remove(styles.top);
  };

  const handleTitleChange = (e) => {
  const inputText = e.target.value;
  if (inputText.length <= 30) {
    setTitle(inputText);
  }
};

  /***************************** */
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      setNotes([...notes, { title, description }]);
      setTitle("");
      setDescription("");
      handleInputCloseButtonClick();
    }
  };

  /****************************** */
  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };



  return (
    <>
      <div className={styles.foreGroundArea}>
        <div className={styles.addBtnDiv}>
          <button
            className={`${styles.modeBtn} ${isSun ? styles.sun : styles.moon}`}
            onClick={handleButtonClick}
          >
            {isSun ? (
              <CiLight style={{ fontSize: "0.6cm", fontWeight: "800" }} />
            ) : (
              <FaMoon style={{ fontSize: "0.6cm", fontWeight: "800" }} />
            )}
          </button>
          <button className={styles.addBtn} onClick={handleInputButtonClick}>
            <IoMdAdd style={{ fontSize: "0.6cm", fontWeight: "800" }} />
          </button>
        </div>
        <div className={styles.notesDiv}>
          {notes.map((note, index) => (
            <Card
              key={index}
              title={note.title}
              description={note.description}
              color={isSun}
              onDelete={() => handleDeleteNote(index)} // Pass onDelete function
            />
          ))}
        </div>
      </div>
      <div ref={slidingDivRef} className={styles.slidingDiv}></div>
      <div className={styles.mainInputDiv} ref={InputDivRef}>
        <div className={styles.innerDiv}>
          <form onSubmit={handleFormSubmit}  className={styles.inputBox}>
            <h3>Enter Your Notes</h3>
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter the Title (Max 20 characters) "
              value={title}
              onChange={handleTitleChange}
            />
            <label>Description</label>
            <textarea
              placeholder="Enter your Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button type="submit">Add</button>
          </form>
          <button
            className={styles.closeBtn}
            onClick={handleInputCloseButtonClick}
          >
            <IoIosClose style={{ fontSize: "0.6cm", fontWeight: "800" }} />
          </button>
        </div>
      </div>
    </>
  );
}
export default Foreground;
