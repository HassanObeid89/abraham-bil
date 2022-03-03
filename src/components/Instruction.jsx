import React from "react";
import "../App.css";
import { Card } from "semantic-ui-react";

export default function Instruction() {
  return (
    <div className="instruction-card">
      <Card centered fluid className="card">
        <Card.Header as={"h1"} textAlign={"center"}>
          Fyll i formuläret nedan så kontaktar vi dig!
        </Card.Header>
        <Card.Description as={"p"}>
          Det går också bra att ringa Abraham direkt på{" "}
          <a href="tel:+46704654229">070-465 42 29</a>. Värderingen är helt
          gratis inom 20 minuter och du binder dig ej till något!
        </Card.Description>
      </Card>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6103489750571064"
        crossorigin="anonymous"
      ></script>
      <ins
        class="adsbygoogle"
        style={{display:"block"}}
        data-ad-client="ca-pub-6103489750571064"
        data-ad-slot="7279550602"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  );
}
