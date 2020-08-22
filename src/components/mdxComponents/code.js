import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import nightOwl from "prism-react-renderer/themes/nightOwl"

export default ({ children }) => {
  return (
    <Highlight
      {...defaultProps}
      code={children}
      theme={nightOwl}
      language="javascript"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: "20px",
            margin: "40px auto",
            borderRadius: "5px",
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
