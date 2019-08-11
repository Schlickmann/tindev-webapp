import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import Developer from "../../components/developer";
import { Container, LogoMain, List, Empty } from "./styles";

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

  async function handleLikes(id) {
    await api.post(`devs/${id}/likes`, null, {
      headers: { user: match.params.id }
    });

    setDevelopers(developers.filter(dev => dev._id !== id));
  }

  async function handleDislikes(id) {
    await api.post(`devs/${id}/dislikes`, null, {
      headers: { user: match.params.id }
    });

    setDevelopers(developers.filter(dev => dev._id !== id));
  }

  return (
    <Container>
      <Link to="/">
        <LogoMain />
      </Link>
      {developers.length > 0 ? (
        <List>
          {developers.map(developer => (
            <Developer
              key={developer._id}
              data={developer}
              handleLikes={handleLikes}
              handleDislikes={handleDislikes}
            />
          ))}
        </List>
      ) : (
        <Empty>There is no more Devs to see :(</Empty>
      )}
    </Container>
  );
}
