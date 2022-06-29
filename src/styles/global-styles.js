import { css } from '@emotion/react';

const globalStyles = css`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  button {
    display: block;
    cursor: pointer;
    padding: 0;
  }
  img {
    display: block;
    //width: 100%;
    //height: auto;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  svg {
    fill: currentColor;
  }
  body {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    line-height: 1.2;
    background-color: rgb(196, 255, 197);
  }
`;

export default globalStyles;
