/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { EuiText } from '@elastic/eui';
import { css } from '@emotion/react';

const pillStyles = css`
  background: #fff;
  padding: 3px 10px;
  border-radius: 20px;
  color: #c4407c;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px dotted #c4407c;
  align-self: flex-start;
  margin: 8px 6px 5px 0;
`;

const IcPill = ({ icNumber }) => {
  return (
    <div css={pillStyles}>
      <EuiText size="s">
        <strong>IC{icNumber}</strong> Draft
      </EuiText>
    </div>
  );
};

export default IcPill;
