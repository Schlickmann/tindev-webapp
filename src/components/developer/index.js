import React from "react";
import Like from "../../assets/images/like.svg";
import Dislike from "../../assets/images/dislike.svg";

export default function Developer() {
  return (
    <>
      <li>
        <img
          src="https://avatars2.githubusercontent.com/u/11969565?v=4"
          alt="avatar"
        />
        <footer>
          <strong>Juliani Schlickmann</strong>
          <p>Software developer</p>
        </footer>
        <div>
          <button type="button">
            <img src={Like} alt="" />
          </button>
          <button type="button">
            <img src={Dislike} alt="" />
          </button>
        </div>
      </li>
    </>
  );
}
