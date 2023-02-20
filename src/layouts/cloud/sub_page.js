/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  EuiPage,
  EuiPageSidebar,
  EuiSideNav,
  EuiPageBody,
  EuiPageSection,
  EuiPageHeader,
} from '@elastic/eui';
import Navbar from '../../components/navbar';

const sideNavStyles = css`
  .euiSideNavItem--root {
    padding-bottom: 0;
  }
`;

const CloudSubPageLayout = ({ breadcrumbs, children, navItems, pageTitle }) => {
  return (
    <>
      <Navbar breadcrumbs={breadcrumbs} />
      <EuiPage>
        <EuiPageSidebar paddingSize="l">
          <EuiSideNav
            aria-label="Side naviation"
            mobileTitle="Side naviation"
            // toggleOpenOnMobile={() => toggleOpenOnMobile()}
            // isOpenOnMobile={isSideNavOpenOnMobile}
            items={navItems}
            css={sideNavStyles}
          />
        </EuiPageSidebar>
        <EuiPageBody paddingSize="none" panelled={true}>
          <EuiPageSection
            css={css`
              max-width: 1320px;
              margin: auto;
              height: 100vh;
            `}>
            <EuiPageHeader
              paddingSize="m"
              bottomBorder={true}
              pageTitle={pageTitle}
            />
            {children}
          </EuiPageSection>
        </EuiPageBody>
      </EuiPage>
    </>
  );
};

export default CloudSubPageLayout;
