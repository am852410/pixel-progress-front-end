import React from "react"

export default function Step (props) {

    return (
      <td
        
        id={`${props.rep}-${props.session}-${props.step}`}
        onClick={props.fillStep}
      >{props.session} {props.step}
      </td>
    )
}
