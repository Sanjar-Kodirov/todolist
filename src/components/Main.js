import React from "react";

const Main = ({ children }) => {
  return (
    <div>
      <h1>Hello from main</h1>
      {children}
    </div>
  );
};

export default Main;
