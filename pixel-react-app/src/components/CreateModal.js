import React from "react"
import { Form, Checkbox, Button, Header, Image, Modal } from 'semantic-ui-react'
import CreateForm from "./CreateForm"

function CreateModal(props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add Goal</Button>}
    >
      <Modal.Header>Add a New Goal</Modal.Header>


      <Modal.Content>
            <CreateForm
            addGoal={props.addGoal}
            baseURL={props.baseURL}

            />
      </Modal.Content>


      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nevermind
        </Button>
        <Button
          content="Looks good!"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default CreateModal
