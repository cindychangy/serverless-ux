/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiAvatar,
  EuiButtonIcon,
  useEuiTheme,
} from '@elastic/eui';
import { css } from '@emotion/react';

const Navbar = ({ breadcrumbs }) => {
  const { euiTheme } = useEuiTheme();
  return (
    <>
      <EuiHeader
        theme="dark"
        sections={[
          {
            items: [
              <EuiHeaderLogo iconType="logoElastic">
                <img
                  src="/images/elastic-text-white.svg"
                  alt="Elastic"
                  css={css`
                    margin: 7px 0 0 1px;
                  `}
                />
              </EuiHeaderLogo>,
            ],
            borders: 'none',
          },
          {
            items: [
              <EuiButtonIcon iconType="help" aria-label="Help" color="ghost" />,
              <EuiHeaderSectionItemButton aria-label="Account menu" key="user">
                <EuiAvatar
                  name="Emily Lin"
                  size="s"
                  color={euiTheme.colors.success}
                />
              </EuiHeaderSectionItemButton>,
            ],
            borders: 'none',
          },
        ]}
      />
      <EuiHeader
        sections={[
          {
            breadcrumbs: breadcrumbs,
          },
        ]}
      />
    </>
  );
};

export default Navbar;
