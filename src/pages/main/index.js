import React, { useState, useEffect } from "react";
import api from "../../services/api";

import Developer from "../../components/developer";
import { Container, LogoMain, List } from "./styles";

export default function Main({ match }) {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const { data } = await api.get("/devs", {
        headers: { user: match.params.id }
      });

      setDevelopers(data);
    }

    loadUsers();
  }, [match.params.id]);

  return (
    <Container>
      <LogoMain />
      <List>
        {developers.map(developer => (
          <Developer key={developer._id} data={developer} />
        ))}
      </List>
    </Container>
  );
}
