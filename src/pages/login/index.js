import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { Button, Container, Form, Input, LogoMain } from "./styles";

export default function Login({ history }) {
  const [username, setUsername] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/devs", {
      username
    });

    const { _id } = response.data;

    history.push(`/dev/${_id}`);
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
