import React from "react";
import { withRouter } from "react-router";

import api from "../../services/api";

import {
  Item,
  Avatar,
  Name,
  Bio,
  ButtonContainer,
  Button,
  ButtonImage,
  Footer
} from "./styles";

import Like from "../../assets/images/like.svg";
import Dislike from "../../assets/images/dislike.svg";

function Developer({ data, match }) {
  async function handleLikes(id) {
    await api.post(`devs/${id}/likes`, null, {
      headers: { user: match.params.id }
    });
  }

  async function handleDislikes(id) {
    await api.post(`devs/${id}/dislikes`, null, {
      headers: { user: match.params.id }
    });
  }

  return (
    <>
      <Item>
        <Avatar src={data.avatar} alt="avatar" />
        <Footer>
          <Name>{data.name}</Name>
          <Bio>{data.bio}</Bio>
        </Footer>
        <ButtonContainer>
          <Button type="button" onClick={() => handleDislikes(data._id)}>
            <ButtonImage src={Dislike} alt="" />
          </Button>
          <Button type="button" onClick={() => handleLikes(data._id)}>
            <ButtonImage src={Like} alt="" />
          </Button>
        </ButtonContainer>
      </Item>
    </>
  );
}

export default withRouter(Developer);
