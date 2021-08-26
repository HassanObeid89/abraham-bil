import React from 'react'
import "../App.css";
import { Card } from "semantic-ui-react";

export default function Instruction() {
    return (
      <div className="instruction-card">
        <Card centered fluid className="card">
          <Card.Header as={"h1"} textAlign={"center"}>
            Fyll i formuläret nedan så kontaktar vi dig!
          </Card.Header>
          <Card.Description as={"p"} >
            Det går också bra att ringa Abraham direkt på: 070-465 42 29.
            Värderingen är helt gratis och du binder dig ej till något!
          </Card.Description>
        </Card>
      </div>
    );
}

