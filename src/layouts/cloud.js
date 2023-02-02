/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  EuiSpacer,
  EuiPage,
  EuiPageSidebar,
  EuiSideNav,
  EuiPageBody,
  EuiPageSection,
} from '@elastic/eui';
import Navbar from '../components/navbar';

const CloudLayout = ({ breadcrumbs, children, hasSidebar }) => {
  const handleClick = () => {
    console.log('clicked');
  };

  const SIDENAV_ITEMS = [
    {
      name: 'Overview',
      id: `searchnav__0`,
    },
    {
      name: 'Content',
      id: `searchnav__1`,
      items: [
        {
          name: 'Indicies',
          id: `search__1`,
          onClick: handleClick,
        },
        {
          name: 'Crawlers and connectors',
          // onClick: undefined,
          // forceOpen: true,
          items: [
            {
              name: 'Engines',
              id: `search__4`,
              isSelected: true,
              onClick: handleClick,
            },
            {
              name: 'Experiences',
              id: `search__5`,
              onClick: handleClick,
            },
          ],
        },
        {
          name: 'Data enrichment',
          id: `search__3`,
          onClick: handleClick,
        },
      ],
    },
  ];

  return (
    <>
      <Navbar isCloud breadcrumbs={breadcrumbs} />
      <EuiPage>
        {hasSidebar && (
          <EuiPageSidebar paddingSize="l">
            <EuiSideNav
              aria-label="Side naviation"
              mobileTitle="Side naviation"
              // toggleOpenOnMobile={() => toggleOpenOnMobile()}
              // isOpenOnMobile={isSideNavOpenOnMobile}
              style={{ width: 192 }}
              items={SIDENAV_ITEMS}
            />
          </EuiPageSidebar>
        )}
        <EuiPageBody
          paddingSize="none"
          panelled={!!hasSidebar}
          css={css`
            height: 100vh;
          `}>
          <EuiPageSection>{children}</EuiPageSection>
        </EuiPageBody>
      </EuiPage>
    </>
  );
};

export default CloudLayout;
