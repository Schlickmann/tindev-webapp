import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
html,body, #root {
  height: 100%;
  width: 100%;
}
body {
  background: #f5f5f5;
  -webkit-font-smoothing: antialiased !important;
}

body, input, button {
  font-family: Arial, Helvetica, sans-serif;
}

ul {
  list-style: none;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track-piece {
  background-color: white;
}
::-webkit-scrollbar-thumb {
  background-color: #673AB7;
}
`;
