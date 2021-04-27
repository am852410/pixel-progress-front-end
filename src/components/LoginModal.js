import React from "react";
import { Icon, Button, Modal } from "semantic-ui-react";
import LoginForm from "./LoginForm";

export default function LoginModal(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button size="mini" icon>
          <Icon name="user" />
        </Button>
      }
    >
      <Modal.Header>Login or Register</Modal.Header>

      <Modal.Content>
        <LoginForm
          closeModal={() => setOpen(false)}
          loggingUser={props.loggingUser}
          baseURL={props.baseURL}
          getGoals = {props.getGoals}
        />
      </Modal.Content>

      <Modal.Actions />
    </Modal>
  );
}
