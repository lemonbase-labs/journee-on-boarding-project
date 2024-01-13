import { css } from '@emotion/react';

export const GlobalStyle = css`
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    color: inherit;
  }

  button:disabled {
    cursor: not-allowed;
  }

  input {
    all: unset;
  }

  textarea {
    all: unset;
  }

  select {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
