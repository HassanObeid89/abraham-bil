import React from 'react'
import { Segment, Container } from "semantic-ui-react";
function Footer() {
    return (
      <div>
        <Segment inverted style={{ padding: "2em 0em" }}>
          <Container className={'footer'} textAlign={"center"} text>
            
            <p>
              # bilar köpes # köper defekta bil # viköperdinbil # stockholmsbil
              # defektabilarköpes.se # sälja min bil # bilfirma # bilpriser #
              blocket sälja bilar # köper trasiga bil # köper bilar # byter
              bilar # bilverkstad
            </p>
            
          </Container>
        </Segment>
      </div>
    );
}

export default Footer
