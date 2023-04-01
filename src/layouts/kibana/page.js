/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { useState, useContext } from 'react';
import {
  EuiCollapsibleNav,
  EuiCollapsibleNavGroup,
  EuiHeaderSectionItemButton,
  EuiHeaderLogo,
  EuiHeader,
  EuiIcon,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiListGroup,
  useGeneratedHtmlId,
  EuiTitle,
  EuiSpacer,
  EuiAvatar,
  EuiPageTemplate,
  EuiHeaderSection,
  EuiHeaderBreadcrumbs,
  EuiHeaderSectionItem,
  useEuiTheme,
} from '@elastic/eui';
import { css } from '@emotion/react';
import GuidedSetupPanel from '../../components/guided_setup_panel/guided_setup_panel';
import SolutionSidebar from '../../components/solution_sidebar';
import { GuideContext } from '../../pages/_app';

const KibanaLayout = ({
  breadcrumbs,
  buttonDisabled,
  children,
  handleGuideClick,
  guideOpen,
  guideProgress,
  sidebar,
  section,
  title,
}) => {
  const { euiTheme } = useEuiTheme();
  const [navIsOpen, setNavIsOpen] = useState(false);
  const collapsibleNavId = useGeneratedHtmlId({ prefix: 'collapsibleNav' });

  const { activeGuide } = useContext(GuideContext);

  const collapsibleNav = (
    <EuiCollapsibleNav
      ownFocus={false}
      id={collapsibleNavId}
      aria-label="Main navigation"
      isOpen={navIsOpen}
      css={css`
        margin-top: 95px;
      `}
      button={
        <EuiHeaderSectionItemButton
          aria-label="Toggle main navigation"
          onClick={() => setNavIsOpen(!navIsOpen)}>
          <EuiIcon type={'menu'} size="m" aria-hidden="true" />
        </EuiHeaderSectionItemButton>
      }
      onClose={() => setNavIsOpen(false)}>
      <EuiFlexItem
        grow={false}
        css={css`
          flex-shrink: 0;
        `}>
        <EuiCollapsibleNavGroup isCollapsible={false} background="dark">
          <EuiListGroup
            color="ghost"
            maxWidth="none"
            gutterSize="none"
            size="s"
            listItems={[
              {
                label: 'Manage deployment',
                href: '#',
                iconType: 'logoCloud',
                iconProps: {
                  color: 'ghost',
                },
              },
            ]}
          />
        </EuiCollapsibleNavGroup>
      </EuiFlexItem>
      <EuiHorizontalRule margin="none" />
      <EuiFlexItem className="eui-yScroll">
        <EuiCollapsibleNavGroup
          title={
            <a
              className="eui-textInheritColor"
              href="#/navigation/collapsible-nav"
              onClick={e => e.stopPropagation()}>
              Analytics
            </a>
          }
          buttonElement="div"
          iconType="logoKibana"
          isCollapsible={true}
          initialIsOpen={true}></EuiCollapsibleNavGroup>
      </EuiFlexItem>
    </EuiCollapsibleNav>
  );

  const leftSectionItems = [collapsibleNav];

  if (typeof HTMLElement !== `undefined`) {
    return (
      <>
        <div>
          <EuiHeader
            position="fixed"
            theme="dark"
            sections={[
              {
                items: [
                  <EuiHeaderLogo
                    key="elastic-logo"
                    iconType="logoElastic"
                    href="#">
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
                  <GuidedSetupPanel
                    handleGuideClick={handleGuideClick}
                    guideOpen={guideOpen}
                    activeGuide={activeGuide}
                    buttonDisabled={buttonDisabled}
                    guideProgress={guideProgress}
                  />,
                  <EuiHeaderSectionItemButton flush="both" key="user-menu">
                    <EuiAvatar
                      color={euiTheme.colors.darkestShade}
                      iconType="cheer"
                      name="account"
                    />
                  </EuiHeaderSectionItemButton>,
                  <EuiHeaderSectionItemButton aria-label="Account menu">
                    <EuiAvatar
                      size="s"
                      name="Emily Lin"
                      color={euiTheme.colors.success}
                    />
                  </EuiHeaderSectionItemButton>,
                ],
                borders: 'none',
              },
            ]}
          />

          <EuiHeader position="fixed">
            <EuiHeaderSection grow={false}>
              <EuiHeaderSectionItem>{leftSectionItems}</EuiHeaderSectionItem>
              <EuiHeaderSectionItem>
                <EuiHeaderSectionItemButton key="header-item">
                  <EuiAvatar
                    type="space"
                    name="Default"
                    size="s"
                    color={euiTheme.colors.success}
                  />
                </EuiHeaderSectionItemButton>
              </EuiHeaderSectionItem>
              <EuiHeaderBreadcrumbs
                aria-label="header breadcrumbs"
                breadcrumbs={breadcrumbs}
              />
            </EuiHeaderSection>
          </EuiHeader>
          {/* <div style={{ height: '300px', paddingTop: '200px' }}>
            {activeGuide}
          </div> */}
          {sidebar ? (
            <EuiPageTemplate style={{ paddingBlockStart: 90 }}>
              <EuiPageTemplate.Sidebar>
                <SolutionSidebar sidebar={sidebar} section={section} />
              </EuiPageTemplate.Sidebar>
              <EuiPageTemplate.Section>
                <EuiTitle size="l">
                  <h1>{title}</h1>
                </EuiTitle>
                <EuiSpacer size="l" />
                {children}
              </EuiPageTemplate.Section>
            </EuiPageTemplate>
          ) : (
            children
          )}
        </div>
      </>
    );
  } else {
    return true;
  }
};

export default KibanaLayout;
