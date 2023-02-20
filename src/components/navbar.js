/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiAvatar,
  EuiButtonIcon,
} from '@elastic/eui';
import { css } from '@emotion/react';

const Navbar = ({ breadcrumbs }) => {
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
              <EuiButtonIcon
                iconType="help"
                aria-label="Help"
                css={css`
                  color: #fff;
                `}
              />,
              <EuiHeaderSectionItemButton aria-label="Account menu" key="user">
                <EuiAvatar name="Emily Lin" size="s" color="#06bfb4" />
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
