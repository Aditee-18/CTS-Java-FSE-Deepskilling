import React from "react";

function LoginButton(props) {
  return (
    <button
      onClick={props.onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      Login
    </button>
  );
}

export default LoginButton;
