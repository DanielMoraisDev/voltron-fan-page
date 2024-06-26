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
    color: var(--color-primary);
    background-color: #02001f;
  }

  #root {
    display: flex;
    flex-direction: column;
    width: 100vw;
    gap: 15px;
    height: 100vh;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f154; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: #f1f1f12a; 
  }
`;

export default mainStyle;
