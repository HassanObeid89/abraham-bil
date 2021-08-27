import React from 'react'
import { Modal, Button, Header, Icon } from "semantic-ui-react";

function ConfermationModal({setOpen,open}) {
    
    return (
      <div>
        <Modal
          centered
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size="small"
        >
          <Header icon>
            <Icon name="mail outline" />
            Confirmation Message
          </Header>
          <Modal.Content >
            <h1 >
              Thanks for choosing us, will get back to you soon!
            </h1>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted onClick={() => setOpen(false)}>
              <Icon name="checkmark" /> Done
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
}

export default ConfermationModal;
