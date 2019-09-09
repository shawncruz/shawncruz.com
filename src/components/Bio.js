import React from "react";
import styles from "./Bio.module.css";
import avatar from "../assets/images/avatar.jpg";

function Bio(props) {
  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
    >
      <img src={avatar} alt="avatar" />
      <p>
        Personal blog focused mainly on software engineering topics. <br />
        Bootstrapped using{" "}
        <a href="https://github.com/jamesknelson/create-react-blog">
          create-react-blog
        </a>
        .
      </p>
    </div>
  );
}

export default Bio;
