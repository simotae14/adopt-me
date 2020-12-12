import React, { useState } from 'react';
import { Link } from '@reach/router';
import { css } from '@emotion/react';
// import
import colors from './colors';

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    <header
      onClick={() => setPadding(padding + 15)}
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
          &:hover {
            text-decoration: underline;
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
