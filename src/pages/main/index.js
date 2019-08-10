import React, { useState, useEffect } from "react";
import api from "../../services/api";

import Developer from "../../components/developer";
import { Container, LogoMain, List } from "./styles";

export default function Main({ match }) {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data } = await api.get("/devs");

    setDevelopers(data);
  }

  return (
    <Container>
      <LogoMain />
      <ul>
        {developers.map(developer => (
          <Developer key={developer._id} data={developer} />
        ))}
      </ul>
    </Container>
  );
}
