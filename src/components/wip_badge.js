/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const wipBadge = css`
  position: absolute;
  bottom: 40px;
  left: 40px;
  z-index: 1;
  font-size: 40px;
  font-weight: 800;
  color: #000;
  background: #ffc74b;
  padding: 40px;
`;
const WipBadge = () => {
  return (
    <div css={wipBadge}>
      <span role="img" aria-label="emoji">
        🚧
      </span>
      &nbsp;WIP
    </div>
  );
};

export default WipBadge;
