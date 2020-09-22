import React from "react"
import Blockquote from "./blockquote"
import Code from "./code"
import ExternalLink from "./externalLink"
import InlineCode from "./inlineCode"
import ListItem from "./listitem"
import Paragraph from "./paragraph"

export default {
  a: props => <ExternalLink {...props} />,
  blockquote: props => <Blockquote {...props} />,
  code: props => <Code {...props} />,
  inlineCode: props => <InlineCode {...props} />,
  li: props => <ListItem {...props} />,
  p: props => <Paragraph {...props} />,
}
