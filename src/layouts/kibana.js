/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { useState } from 'react';
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
  EuiAvatar,
  EuiHeaderSection,
  EuiHeaderBreadcrumbs,
  EuiHeaderSectionItem,
  EuiModal,
  EuiModalBody,
  EuiSpacer,
  EuiText,
  useEuiTheme,
} from '@elastic/eui';
import { css } from '@emotion/react';
import GuidedSetupPanel from '../components/guided_setup_panel/guided_setup_panel';

const KibanaLayout = ({
  breadcrumbs,
  children,
  handleGuideClick,
  guideOpen,
  onClick,
  buttonDisabled,
  section,
  confetti,
  newUserStartPage,
  stepNumber,
  completedSteps,
  loadGif,
  guideIndex,
}) => {
  const { euiTheme } = useEuiTheme();
  const [navIsOpen, setNavIsOpen] = useState(false);

  const collapsibleNavId = useGeneratedHtmlId({ prefix: 'collapsibleNav' });

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
                    guideIndex={guideIndex}
                    // key="onboarding-setup"
                    // onClick={onClick}
                    // handleOptOut={handleOptOut}
                    // guideOpen={guideOpen}
                    // buttonDisabled={buttonDisabled}
                    // section={section}
                    // confetti={confetti}
                    // newUserStartPage={newUserStartPage}
                    // stepNumber={stepNumber}
                    // completedSteps={completedSteps}
                    // loadGif={loadGif}
                    // guideIndex={guideIndex}
                  />,
                  <EuiHeaderSectionItemButton flush="both">
                    <EuiAvatar
                      color={euiTheme.colors.darkestShade}
                      iconType="cheer"
                      name="account"
                    />
                  </EuiHeaderSectionItemButton>,
                  <EuiHeaderSectionItemButton
                    key="user"
                    aria-label="Account menu">
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

          {children}
        </div>
      </>
    );
  } else {
    return true;
  }
};

export default KibanaLayout;
