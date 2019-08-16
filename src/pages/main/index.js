import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Link } from "react-router-dom";
import api from "../../services/api";

import Developer from "../../components/developer";
import {
  Container,
  LogoMain,
  List,
  Empty,
  MatchContainer,
  ItsAMatch,
  Avatar,
  Name,
  Bio,
  CloseButton
} from "./styles";

export default function Main({ match }) {
  const [developers, setDevelopers] = useState([]);
  const [matchDev, setMatchDev] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      const { data } = await api.get("/devs", {
        headers: { user: match.params.id }
      });

      setDevelopers(data);
    }

    loadUsers();
  }, [match.params.id]);

  useEffect(() => {
    const socket = io("http://localhost:3333", {
      query: { developer: match.params.id }
    });

    socket.on("match", developer => {
      setMatchDev(developer);
    });
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

      {matchDev && (
        <MatchContainer>
          <ItsAMatch />
          <Avatar src={matchDev.avatar} />
          <Name>{matchDev.name}</Name>
          <Bio>{matchDev.bio}</Bio>

          <CloseButton type="button" onClick={() => setMatchDev(null)}>
            CLOSE
          </CloseButton>
        </MatchContainer>
      )}
    </Container>
  );
}
