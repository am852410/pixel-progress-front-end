import React from "react";
import { Modal, Button } from "semantic-ui-react";
import RegisterForm from "./RegisterForm";

export default function LoginModal(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button content="Sign up" icon="signup" size="big" />}
    >
      <Modal.Header>Login or Register</Modal.Header>

      <Modal.Content>
        <RegisterForm
          closeModal={() => setOpen(false)}
          baseURL={props.baseURL}
          getGoals={props.getGoals}
        />
      </Modal.Content>

      <Modal.Actions />
    </Modal>
  );
}
