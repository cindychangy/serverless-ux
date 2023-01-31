/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
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
  EuiTitle,
  EuiText,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiButtonEmpty,
  EuiSpacer,
  EuiButton,
  useEuiTheme,
} from '@elastic/eui';
import Account from '../components/account';
import GuidedSetupPanel from '../components/guided_setup_panel/guided_setup_panel';

const KibanaLayout = ({
  onClick,
  guideOpen,
  setGuide,
  section,
  confetti,
  buttonDisabled,
  newUserStartPage,
  pageHeader,
  stepNumber,
  breadcrumbs,
  hasSidebar,
  children,
  completedSteps,
  loadGif,
  guideIndex,
  data,
}) => {
  const { euiTheme } = useEuiTheme();
  const mainWrapper = css`
    padding-top: 96px; // two top navs
    min-height: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
  `;

  const contentWrapper = css`
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    z-index: 0;
    position: relative;
  `;

  const header = css`
    background: ${euiTheme.colors.body};
    padding: 45px 0;
    width: 100%;
    display: flex;
    align-items: flex-start;
    align-content: center;
    border-bottom: 2px solid ${euiTheme.colors.lightestShade};
  `;

  const [navIsOpen, setNavIsOpen] = useState(false);
  const [exitGuide, setExitGuide] = useState(false);
  const [removeGuideButton, setRemoveGuideButton] = useState(false);

  let exitGuideModal;

  const collapsibleNavId = useGeneratedHtmlId({ prefix: 'collapsibleNav' });

  const handleOptOut = () => {
    onClick();
    setExitGuide(true);
  };

  const removeGuide = () => {
    setExitGuide(false);
    setRemoveGuideButton(true);
  };

  const collapsibleNav = (
    <EuiCollapsibleNav
      ownFocus={false}
      css={css`
        margin-top: 96px; // two top navs
        min-height: calc(100vh - 96px);
        display: flex;
      `}
      id={collapsibleNavId}
      aria-label="Main navigation"
      isOpen={navIsOpen}
      button={
        <EuiHeaderSectionItemButton
          aria-label="Toggle main navigation"
          onClick={() => setNavIsOpen(!navIsOpen)}>
          <EuiIcon type={'menu'} size="m" aria-hidden="true" />
        </EuiHeaderSectionItemButton>
      }
      onClose={() => setNavIsOpen(false)}>
      {/* Dark deployments section */}
      <EuiFlexItem grow={false} style={{ flexShrink: 0 }}>
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
      {/* Menu items */}
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
          initialIsOpen="Kibana"></EuiCollapsibleNavGroup>
      </EuiFlexItem>
    </EuiCollapsibleNav>
  );

  const leftSectionItems = [collapsibleNav];

  if (exitGuide) {
    exitGuideModal = (
      <EuiModal maxWidth={448} aria-label="optOutModal">
        <EuiModalBody>
          <EuiSpacer size="m" />
          <EuiTitle size="m">
            <h2>Quit this setup guide and discard progress?</h2>
          </EuiTitle>
          <EuiSpacer size="m" />
          <EuiText>
            <p>
              You can restart anytime, just click Setup guide on the homepage.
            </p>
          </EuiText>
        </EuiModalBody>
        <EuiModalFooter>
          <EuiButtonEmpty onClick={() => setExitGuide(false)}>
            Cancel
          </EuiButtonEmpty>
          <EuiButton color="warning" onClick={removeGuide} fill>
            Quit Guide
          </EuiButton>
        </EuiModalFooter>
      </EuiModal>
    );
  }

  if (typeof HTMLElement !== `undefined`) {
    return (
      <>
        {exitGuideModal}
        <div css={mainWrapper}>
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
                    Elastic
                  </EuiHeaderLogo>,
                ],
                borders: 'none',
              },
              {
                items: [
                  !removeGuideButton && (
                    <GuidedSetupPanel
                      key="onboarding-setup"
                      onClick={onClick}
                      handleOptOut={handleOptOut}
                      guideOpen={guideOpen}
                      buttonDisabled={buttonDisabled}
                      section={section}
                      confetti={confetti}
                      newUserStartPage={newUserStartPage}
                      stepNumber={stepNumber}
                      completedSteps={completedSteps}
                      loadGif={loadGif}
                      guideIndex={guideIndex}
                    />
                  ),
                  ,
                  <EuiHeaderSectionItemButton flush="both">
                    <Account />
                  </EuiHeaderSectionItemButton>,
                  <EuiHeaderSectionItemButton flush="both">
                    <EuiAvatar
                      color="#25282f"
                      iconType="cheer"
                      name="account"
                    />
                  </EuiHeaderSectionItemButton>,
                  <EuiHeaderSectionItemButton
                    key="user"
                    aria-label="Account menu">
                    <EuiAvatar size="s" name="Else Lane" color="#06bfb4" />
                  </EuiHeaderSectionItemButton>,
                ],
                borders: 'none',
              },
            ]}
          />

          <EuiHeader
            position="fixed"
            sections={[
              {
                items: leftSectionItems,
                borders: 'right',
              },
              {
                items: [
                  <EuiHeaderSectionItemButton
                    key="header-item"
                    aria-label="Account menu">
                    <EuiAvatar type="space" name="Default Space" size="s" />
                  </EuiHeaderSectionItemButton>,
                ],
                breadcrumbs: breadcrumbs,
                borders: 'right',
              },
            ]}
          />
          {children}
        </div>
      </>
    );
  } else {
    return true;
  }
};

export default KibanaLayout;
