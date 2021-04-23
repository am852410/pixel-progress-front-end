import React from "react"

export default function Step (props) {

    return (
      <td
        key={`${props.rep}-${props.session}-${props.step}`}
        id={`${props.rep}-${props.session}-${props.step}`}
        onClick={props.fillStep}
      >
      
      </td>
    )
}
