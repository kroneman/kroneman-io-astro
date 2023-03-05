import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  const today = new Date();

  return (
    <footer>
      &copy; {today.getFullYear()}. All rights reserved.
    </footer>
  );
};

export default Footer;
