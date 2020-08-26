import React from "react"
import Code from "./code"
import InlineCode from "./inlineCode"
import Paragraph from "./paragraph"
import ExternalLink from "./externalLink"

export default {
  code: props => <Code {...props} />,
  p: props => <Paragraph {...props} />,
  inlineCode: props => <InlineCode {...props} />,
  a: props => <ExternalLink {...props} />,
}
