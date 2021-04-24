import React from "react"
import { Icon, Form, Checkbox, Button, Header, Image, Modal } from 'semantic-ui-react'
import EditForm from "./EditForm"

function EditModal(props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button size='mini' icon>
          <Icon name='edit outline'/>
        </Button>}
    >
      <Modal.Header>Edit Goal</Modal.Header>


      <Modal.Content>
            <EditForm
            baseURL={props.baseURL}
            goal={props.goal}
            getGoals={props.getGoals}
            closeModal= {() => setOpen(false)}
            />
      </Modal.Content>


      <Modal.Actions>

      </Modal.Actions>
    </Modal>
  )
}

export default EditModal
