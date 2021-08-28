import React from 'react'
import { Modal, Button, Header, Icon } from "semantic-ui-react";

function ConfirmationModal({setOpen,open}) {
    
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
            Bäkreftelse
          </Header>
          <Modal.Content >
            <h1 >
              Tack för att du valde oss, vi återkommer så snart som möjligt!
            </h1>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted onClick={() => setOpen(false)}>
              <Icon name="checkmark" /> OK
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
}

export default ConfirmationModal;
