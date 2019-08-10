import React, { useState, useEffect } from "react";

import { Button, Container, Form, Input, LogoMain } from "./styles";

export default function Login() {
  const [username, setUsername] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setUsername("");
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <LogoMain />
        <Input
          type="text"
          placeholder="Type your Github username..."
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <Button type="submit">JOIN</Button>
      </Form>
    </Container>
  );
}
