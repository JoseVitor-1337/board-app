import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  @media (min-width: 1080px) {
    html {
    
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }


  body {
    background: #F2F6FC
  }

  a, body, input, textarea, select, button {
    font: 400 1.2rem sans-serif;
  }

 
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyles
