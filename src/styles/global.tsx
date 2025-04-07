import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        transition: all 0.3s;
        margin: 0;
        box-sizing: border-box;
        letter-spacing: -0.1em;

        /* Scrollbar Style */
        scrollbar-width: thin;
        scrollbar-color: rgba(0, 29, 58, 0.18) transparent;

        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
        -webkit-touch-callout: none;

        font-family:
          'Noto Sans KR',
          -apple-system,
          sans-serif,
          BlinkMacSystemFont,
          'Segoe UI',
          'Roboto' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      body {
        transition: none;
        background-color: #e5e6ec;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      hr {
        border-style: none;
      }

      :root {
        /* Default Colors */
        --color-blue: #408cff;
        --color-blue-25: #408cff40;
        --color-secondary-blue: #98bffa;
        --color-red: #ff5a5a;
        --color-red-25: #ff5a5a40;
        --color-yellow: #ffb800;
        --color-yellow-25: #ffb80040;
        --color-dark-blue: #454d5f;
        --color-dark-blue-25: #454d5f40;
        --color-white: #ffffff;
        --color-white-50: #ffffff80;
        --color-white-25: #ffffff40;
        --color-white-10: #ffffff1a;
        --color-black: #000000;
        --color-black-75: #000000b0;
        --color-black-50: #00000080;
        --color-black-25: #00000040;
        --color-black-10: #0000001a;

        --color-gradient-blue: #04a3fb, #2f5dff;
        --color-gradient-yellow: #ffb800, #ff7a00;

        /* Default Theme (Light Mode) */
        --color-background: #e5e6ec;
        --color-foreground: #f0f1f5;
        --color-foreground-10: #f0f1f51a;
        --color-sub-text: #a9adb9;
        --color-content-text: #5c5e66;
        --color-title-text: #3c414c;

        --color-box-shadow: '0 4px 24px 0 #cecece';
      }

      /* Dark Mode */
      .dark {
        --color-background: #1d2128;
        --color-foreground: #2c3038;
        --color-foreground-10: #2c30381a;
        --color-sub-text: #5d616f;
        --color-content-text: #b4b7c4;
        --color-title-text: #a0a4b3;

        --color-box-shadow: '0 4px 24px 0 #3c414c';
      }

      /* Light Mode */
      .light {
        --color-background: #e5e6ec;
        --color-foreground: #f0f1f5;
        --color-foreground-10: #f0f1f51a;
        --color-sub-text: #a9adb9;
        --color-content-text: #5c5e66;
        --color-title-text: #3c414c;

        --color-box-shadow: '0 4px 24px 0 #cecece';
      }

      button {
        cursor: pointer;

        &:hover {
          filter: brightness(0.9);
          transform: scale(1.05);
        }

        &:active {
          transform: scale(0.95);
        }
      }
    `}
  />
);

export default GlobalStyles;
