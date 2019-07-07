import React from "react"
import "./textContainer.scss"

const TextContainer = (props) => (
  <div className="text-container">
    <h1>{props.title}</h1>
    <p>{props.text}</p>
  </div>
)

export default TextContainer
