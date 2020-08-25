import React from "react"

export const LineNumber = ({ children }) => (
  <span
    style={{
      display: "table-cell",
      textAlign: "right",
      paddingRight: "1.5rem",
      userSelect: "none",
      opacity: "0.5",
    }}
  >
    {children}
  </span>
)

export const Line = ({ children }) => (
  <div
    style={{
      display: "table-row",
    }}
  >
    {children}
  </div>
)

export const LineContent = ({ children }) => (
  <span
    style={{
      display: "table-cell",
    }}
  >
    {children}
  </span>
)
