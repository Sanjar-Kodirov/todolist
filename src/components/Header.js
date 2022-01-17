import React from "react";

const Header = ({ children }) => {
  return (
    <div>
      <h1>Hello from Header</h1>
      {children}
    </div>
  );
};

export default Header;
