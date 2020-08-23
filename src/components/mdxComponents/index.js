import React from "react"
import Code from "./code"
import InlineCode from "./inlineCode"
import Paragraph from "./paragraph"

export default {
  code: props => <Code {...props} />,
  p: props => <Paragraph {...props} />,
  inlineCode: props => <InlineCode {...props} />,
}
