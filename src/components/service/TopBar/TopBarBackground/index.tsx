/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const TopBarBackground = () => {
  return (
    <div
      css={css`
        z-index: -1;
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 120%;
        pointer-events: none;
        transform-origin: center top;
      `}
    >
      <div
        css={css`
          z-index: 0;
          position: absolute;
          inset: 0px;
          mask: linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 12.5%);
          backdrop-filter: blur(64px);
        `}
      />
      <div
        css={css`
          z-index: 1;
          position: absolute;
          inset: 0px;
          mask: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgba(0, 0, 0, 0) 25%);
          backdrop-filter: blur(32px);
        `}
      />
      <div
        css={css`
          z-index: 2;
          position: absolute;
          inset: 0px;
          mask: linear-gradient(
            rgba(0, 0, 0, 0) 0%,
            rgb(0, 0, 0) 12.5%,
            rgb(0, 0, 0) 25%,
            rgba(0, 0, 0, 0) 37.5%
          );
          backdrop-filter: blur(16px);
        `}
      />
      <div
        css={css`
          z-index: 3;
          position: absolute;
          inset: 0px;
          mask: linear-gradient(
            rgba(0, 0, 0, 0) 12.5%,
            rgb(0, 0, 0) 25%,
            rgb(0, 0, 0) 37.5%,
            rgba(0, 0, 0, 0) 50%
          );
          backdrop-filter: blur(8px);
        `}
      />
      <div
        css={css`
          z-index: 4;
          position: absolute;
          inset: 0px;
          mask: linear-gradient(
            rgba(0, 0, 0, 0) 25%,
            rgb(0, 0, 0) 37.5%,
            rgb(0, 0, 0) 50%,
            rgba(0, 0, 0, 0) 62.5%
          );
          backdrop-filter: blur(4px);
        `}
      />
      <div
        css={css`
          z-index: 5;
          position: absolute;
          inset: 0px;
          mask: linear-gradient(
            rgba(0, 0, 0, 0) 37.5%,
            rgb(0, 0, 0) 50%,
            rgb(0, 0, 0) 62.5%,
            rgba(0, 0, 0, 0) 75%
          );
          backdrop-filter: blur(2px);
        `}
      />
      <div
        css={css`
          z-index: 6;
          position: absolute;
          inset: 0px;
          mask: linear-gradient(
            rgba(0, 0, 0, 0) 50%,
            rgb(0, 0, 0) 62.5%,
            rgb(0, 0, 0) 75%,
            rgba(0, 0, 0, 0) 87.5%
          );
          backdrop-filter: blur(1px);
        `}
      />
      <div
        css={css`
          z-index: 7;
          position: absolute;
          inset: 0;
          mask: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 62.5%,
            rgba(0, 0, 0, 1) 75%,
            rgba(0, 0, 0, 1) 87.5%,
            rgba(0, 0, 0, 0) 100%
          );
          backdrop-filter: blur(0.5px);
          -webkit-backdrop-filter: blur(0.5px);
        `}
      />
    </div>
  );
};

export default TopBarBackground;
