/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiButton,
  EuiButtonEmpty,
  EuiIcon,
  EuiTitle,
  EuiText,
  EuiSpacer,
  EuiLink,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiFlyoutFooter,
  EuiFlexGroup,
  EuiFlexItem,
  EuiProgress,
  useEuiTheme,
  EuiHorizontalRule,
} from '@elastic/eui';
import PanelSection from './panel_section/panel_section';
import {
  GUIDES_SEARCH,
  GUIDES_OBS,
  GUIDES_SECURITY,
  GUIDES_ALL,
} from '../../constants/guides';
import { GuideContext } from '../../layouts/kibana/page';

const GuidedSetupPanel = ({
  handleGuideClick,
  guideOpen,
  activeGuide,
  buttonDisabled,
  guideProgress,
  user,
}) => {
  const router = useRouter();
  const { euiTheme } = useEuiTheme();
  // const [toggleStep, setToggleStep] = useState(stepNumber);
  const HEADER_BG = '/images/panel-bg-top.svg';
  const FOOTER_BG = '/images/panel-bg-bottom.svg';
  const SOLUTION = router.query.solution;

  const iconQuestion = css`
    .euiIcon {
      width: 21px;
      height: 21px;
      margin-left: -2px;
    }
  `;

  const panelHeaderBg = css`
    background: url(${HEADER_BG}) no-repeat;
  `;

  const panelFooterBg = css`
    background: url(${FOOTER_BG}) no-repeat !important;
    background-size: cover !important;
  `;

  const media = css`
    width: 100%;

    img {
      width: 100%;
    }
  `;

  let GUIDE_DATA = [...GUIDES_SEARCH, ...GUIDES_OBS, ...GUIDES_SECURITY][
    activeGuide
  ];

  if (SOLUTION === 'search') {
    GUIDE_DATA = GUIDES_SEARCH[activeGuide];
  }

  if (SOLUTION === 'observability') {
    GUIDE_DATA = GUIDES_OBS[activeGuide];
  }

  if (SOLUTION === 'security') {
    GUIDE_DATA = GUIDES_SECURITY[activeGuide];
  }

  useEffect(() => {
    if (guideProgress) {
      setTimeout(() => {
        setToggleStep(guideProgress);
      }, 500);
    }
  }, []);

  return (
    <>
      <div
        css={css`
          margin: 0 10px;
        `}>
        <EuiButton
          color="success"
          size="s"
          onClick={handleGuideClick}
          key="onboarding-setup-button"
          disabled={buttonDisabled}
          fill>
          Setup guide
        </EuiButton>
      </div>
      {!!guideOpen && (
        <EuiFlyout
          ownFocus
          onClose={handleGuideClick}
          aria-labelledby="onboarding-guide">
          <>
            <EuiFlyoutHeader css={panelHeaderBg}>
              <EuiSpacer size="m" />
              <EuiLink href="guided-setup" onClick={() => {}} color="text">
                <EuiIcon type="arrowLeft" size="m" />
                Back to guides
              </EuiLink>
              {/* <button onClick={() => setActiveGuide(guideIndex)}>
                Click me
              </button> */}
              <EuiSpacer size="m" />
              <EuiTitle size="m">
                <h2>{GUIDE_DATA.title}</h2>
              </EuiTitle>
              <EuiSpacer size="s" />
              <EuiHorizontalRule margin="s" />
            </EuiFlyoutHeader>
            <EuiFlyoutBody>
              {GUIDE_DATA.media && (
                <div css={media}>
                  <div dangerouslySetInnerHTML={{ __html: GUIDE_DATA.media }} />
                  <EuiSpacer size="m" />
                </div>
              )}
              <EuiText size="m">{GUIDE_DATA.intro}</EuiText>

              {GUIDE_DATA.link && (
                <>
                  <EuiSpacer size="m" />
                  <EuiText size="m">
                    <EuiLink
                      target="_blank"
                      href={GUIDE_DATA.link.url}
                      css={css`
                        font-weight: ${euiTheme.font.weight.regular};
                      `}>
                      {GUIDE_DATA.link.title}
                    </EuiLink>
                  </EuiText>
                </>
              )}
              {!!guideProgress && (
                <>
                  <EuiSpacer size="m" />

                  <EuiProgress
                    valueText={`${guideProgress ? guideProgress : 0}/4 steps`}
                    value={guideProgress}
                    max={4}
                    size="l"
                    label="Progress"
                  />
                  <EuiSpacer size="s" />
                </>
              )}
              <EuiHorizontalRule />
              {GUIDE_DATA.steps.map(step => (
                <PanelSection
                  step={step}
                  guideProgress={guideProgress}
                  // forceState={toggleStep === stepNumber ? 'open' : 'closed'}
                  forceState="open"
                />
              ))}
            </EuiFlyoutBody>

            <EuiFlyoutFooter css={panelFooterBg}>
              <EuiFlexGroup
                alignItems="center"
                justifyContent="center"
                gutterSize="none">
                <EuiButtonEmpty
                  iconType="questionInCircle"
                  iconSide="right"
                  href="https://cloud.elastic.co/support"
                  style={{
                    color: euiTheme.colors.darkShade,
                    fontWeight: 400,
                  }}
                  css={iconQuestion}>
                  Need help?
                </EuiButtonEmpty>
                <EuiText size="xs" style={{ color: euiTheme.colors.disabled }}>
                  |
                </EuiText>
                <EuiButtonEmpty
                  iconType="faceHappy"
                  iconSide="right"
                  color="text"
                  href="https://www.elastic.co/kibana/feedback"
                  style={{
                    color: euiTheme.colors.darkShade,
                    fontWeight: 400,
                  }}>
                  Give feedback
                </EuiButtonEmpty>
                <EuiText size="xs" style={{ color: euiTheme.colors.disabled }}>
                  |
                </EuiText>
                <EuiButtonEmpty
                  iconType="exit"
                  iconSide="right"
                  color="text"
                  onClick={() => {}}
                  style={{
                    color: euiTheme.colors.darkShade,
                    fontWeight: 400,
                  }}>
                  Quit guide
                </EuiButtonEmpty>
                <EuiSpacer size="s" />
              </EuiFlexGroup>
            </EuiFlyoutFooter>
          </>
        </EuiFlyout>
      )}
    </>
  );
};

export default GuidedSetupPanel;
