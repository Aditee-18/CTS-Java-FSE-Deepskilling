import React from "react";

function LogoutButton(props) {
  return (
    <button
      onClick={props.onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#f44336",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
