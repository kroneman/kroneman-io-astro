import React from 'react';

const Footer = () => {
  const today = new Date();

  return (
    <>&copy; {today.getFullYear()} Lennart Kroneman. All rights reserved.</>
  );
};

export default Footer;
