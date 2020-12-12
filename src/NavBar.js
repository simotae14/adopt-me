import React, { useState } from 'react';
import { Link } from '@reach/router';
import { css } from '@emotion/react';

const color = 'pink';

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${color};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span aria-label="logo" role="img">
        🐩
      </span>
    </header>
  );
};

export default NavBar;
