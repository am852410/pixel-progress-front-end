import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonExampleIcon = (props) => (
  <Button size='mini' icon onClick={()=> {props.actionFunction()}}>
    <Icon name={props.icon} />
  </Button>
)

export default ButtonExampleIcon
