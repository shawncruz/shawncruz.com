import React from "react";
import { Link } from "react-navi";

const MenuItems = () => (
  <ul>
    <li>
      <Link href="/about">About Me</Link>
    </li>
    <li>
      <Link href="https://www.linkedin.com/in/shawncruz">LinkedIn</Link>
    </li>
    <li>
      <Link href="https://drive.google.com/file/d/1QEhJX1XRco7yN1OtigMFjY8r0qTUBHLj/view">
        Resume
      </Link>
    </li>
    <li>
      <Link href="https://github.com/shawncruz">Github</Link>
    </li>
  </ul>
);

export default MenuItems;
