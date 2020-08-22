import React from "react"
import Code from "./code"
import Paragraph from "./paragraph"

export default {
  code: props => <Code {...props} />,
  p: props => <Paragraph {...props} />,
}
