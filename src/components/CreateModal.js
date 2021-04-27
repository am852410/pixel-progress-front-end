import React from "react"
import {  Button, Modal } from 'semantic-ui-react'
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
            getGoals={props.getGoals}
            baseURL={props.baseURL}
            closeModal={() => setOpen(false)}

            />
      </Modal.Content>


      <Modal.Actions>


      </Modal.Actions>
    </Modal>
  )
}

export default CreateModal
