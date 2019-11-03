import React from "react";

export default function Card({ children }) {
  return (
    <div style={{ padding: 50, border: "1px solid #fff", textAlign: "center" }}>
      {children}
    </div>
  );
}
