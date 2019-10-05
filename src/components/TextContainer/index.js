import classNames from "classnames"
import React from "react"
import "./textContainer.scss"

const TextContainer = props => {
  const renderBulletList = () => {
    return (
      <ul>
        {props.list.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    )
  }

  return (
    <div
      className={classNames(
        "text-container",
        props.textRight ? "right-text" : "left-text",
        props.textTop ? "allign-top" : ""
      )}
    >
      {props.header ? <h1>{props.title}</h1> : <h2>{props.title}</h2>}
      <p>{props.text}</p>
      {props.list && renderBulletList()}
    </div>
  )
}

export default TextContainer
