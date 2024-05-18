import { createGlobalStyle } from "styled-components";

const mainStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  :root {
    color: #fff;
    font-family: "Roboto", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    color: var(--color-primary);
    background-color: #02001f;
  }

  #root {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    padding: 10px
  }
`;

export default mainStyle;
