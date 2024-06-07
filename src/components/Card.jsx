import React from 'react'
import styles from './Card.module.css'
import { FaFileSignature } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";


function Card(props) {
  return (
    <div className={styles.card}>
       <FaFileSignature style={{ color: props.color ? "black" : "white", transition: "color 1s" }} />
        <div className={styles.desc} style={{ color: props.color ? "black" : "white", transition: "color 1s" }}>
          <h4 style={{marginBottom:"10px"}}>{props.title}</h4>
          <p>{props.description}</p>
        </div>
        <div className={styles.btnDiv}>
            <div className={styles.deleteBtn} onClick={props.onDelete} style={{ color: props.color ? "black" : "white", transition: "color 1s" }}>
                <MdDelete/><p>Delete</p>
            </div>
        </div>
    </div>
  )
}

export default Card