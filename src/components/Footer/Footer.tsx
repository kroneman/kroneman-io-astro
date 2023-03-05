import React from "react";

const Footer = () => {
  const today = new Date();

  return (
    <>
      &copy; {today.getFullYear()}. All rights reserved.
    </>
  );
};

export default Footer;
