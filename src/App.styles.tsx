import { Global, css } from '@emotion/react';
import PALETTE from './constants/palette';

export const theme = {
  primary: PALETTE.ORANGE,
  red: PALETTE.RED,
  orange: PALETTE.ORANGE,
  yellow: PALETTE.YELLOW,
  green: PALETTE.GREEN,
  blue: PALETTE.BLUE,
  purple: PALETTE.PURPLE,
  black: PALETTE.BLACK,
  gray: PALETTE.GRAY,
  white: PALETTE.WHITE,
  modalOverlay: PALETTE.OPACITY_BLACK[400],
  shadow: PALETTE.OPACITY_BLACK[200],
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
};

const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    color: ${theme.black[400]};
  }

  input,
  button {
    font-family: inherit;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;

const GlobalStyle = () => {
  return <Global styles={reset} />;
};

export default GlobalStyle;
