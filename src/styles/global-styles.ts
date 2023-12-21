import { css, createGlobalStyle } from "styled-components";

const resetCss = css`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
  */
   html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  input, button {
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
  * {
    box-sizing: border-box;
  }
`;

const customStyles = css`
  body {
    --body-padding: 30px;

    height: 100vh;
    padding: var(--body-padding);
    box-sizing: border-box;
    background: linear-gradient(
      180deg,
      rgba(166, 112, 255, 1) 0%,
      rgba(111, 23, 255, 1) 100%
    );
    overscroll-behavior-y: none;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${resetCss}
  ${customStyles}
`;

export default GlobalStyles;
