/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { EuiAvatar, EuiSideNav, EuiSpacer, EuiTitle } from '@elastic/eui';

const SolutionSidebar = ({ sidebar, solution }) => {
  return (
    <>
      <EuiTitle size="xs">
        <h2>
          <EuiAvatar
            color="plain"
            css={css`
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
              margin-right: 16px;
            `}
            iconType="logoEnterpriseSearch"
            name="Enterprise Search"
            size="m"
          />
          <strong>{solution}</strong>
        </h2>
      </EuiTitle>
      <EuiSpacer />
      <EuiSideNav items={sidebar} />
    </>
  );
};

export default SolutionSidebar;
