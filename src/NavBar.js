import React from 'react';
import { Link } from '@reach/router';
import { css, keyframes } from '@emotion/react';
// import
import colors from './colors';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const NavBar = () => {
  return (
    <header
      css={css`
        background-color: ${colors.dark};
        position: sticky;
        top: 0;
        z-index: 10;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: 0.1s ${spin} linear infinite;
          &:hover {
            text-decoration: underline;
            animation: 1s ${spin} linear infinite reverse;
          }
        `}
        aria-label="logo"
        role="img"
      >
        🐩
      </span>
    </header>
  );
};

export default NavBar;
