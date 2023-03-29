/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
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
  EuiProgress,
  EuiFlexGroup,
  EuiFlexItem,
  useEuiTheme,
  EuiHorizontalRule,
} from '@elastic/eui';
import PanelSection from './panel_section/panel_section';
import { GUIDE_DATA } from '../../constants/guided-setup.data';

const GuidedSetupPanel = ({
  guideOpen,
  section,
  buttonDisabled,
  newUserStartPage,
  confetti,
  stepNumber,
  onClick,
  handleOptOut,
  completedSteps,
  loadGif,
  guideIndex,
}) => {
  const router = useRouter();
  const { euiTheme } = useEuiTheme();
  const HEADER_BG = '/images/panel-bg-top.svg';
  const FOOTER_BG = '/images/panel-bg-bottom.svg';
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

  const mountedStyle = { animation: 'transitionIn 850ms ease-in-out' };
  const [toggleStep, setToggleStep] = useState(stepNumber);
  const [showEndState, setShowEndState] = useState(false);
  const [showZeroState, setShowZeroState] = useState(0);

  let data = GUIDE_DATA[guideIndex];

  let endGuide = showEndState;

  useEffect(() => {
    if (confetti) {
      setTimeout(() => {
        completedSteps[`step-${stepNumber}`] = 'done';

        if (stepNumber === 1) {
          setToggleStep(2);
          setTimeout(() => {
            setShowZeroState(1);
          }, 150);
        }

        if (stepNumber === 2) {
          setToggleStep(3);
        }

        if (stepNumber === 3) {
          setToggleStep(4);
        }

        if (stepNumber === 4) {
          setToggleStep(5);
          setTimeout(() => {
            setShowEndState(true);
          }, 0);
        }
      }, 2000);
    }
  }, [confetti, data, completedSteps]);

  return (
    <>
      <div
        css={css`
          margin: 0 10px;
        `}>
        <EuiButton
          color="success"
          size="s"
          onClick={onClick}
          key="onboarding-setup-button"
          disabled={buttonDisabled}
          fill>
          Setup guide
          {newUserStartPage !== undefined ? '' : `: step ${stepNumber}`}
        </EuiButton>
      </div>
      {!!guideOpen && (
        <EuiFlyout
          ownFocus
          onClose={onClick}
          aria-labelledby="onboarding-guide">
          <>
            <EuiFlyoutHeader css={panelHeaderBg}>
              <EuiSpacer size="m" />
              <EuiLink href="guided-setup" onClick={onClick} color="text">
                <EuiIcon type="arrowLeft" size="m" />
                Back to guides
              </EuiLink>
              <EuiSpacer size="m" />
              <EuiTitle size="m">
                <h2 css={endGuide && mountedStyle}>
                  {endGuide ? 'Well done!' : data.title}
                </h2>
              </EuiTitle>
              <EuiSpacer size="s" />
              <EuiHorizontalRule margin="s" />
            </EuiFlyoutHeader>

            <EuiFlyoutBody>
              {data.media && (
                <div css={media}>
                  {endGuide ? null : (
                    <>
                      <div dangerouslySetInnerHTML={{ __html: data.media }} />
                      <EuiSpacer size="m" />
                    </>
                  )}
                </div>
              )}
              <EuiText size="m">
                {endGuide ? (
                  <div>
                    <img
                      src="/images/guide-complete-animation.gif"
                      alt="Guide complete"
                      style={{ width: '85%', margin: 'auto' }}
                    />
                    <EuiSpacer size="m" />
                    <p css={endGuide && mountedStyle}>
                      You’ve completed the Guide. Feel free to come back to the
                      Guides for more onboarding help or a refresher.
                    </p>
                  </div>
                ) : (
                  <p>{data.intro}</p>
                )}
              </EuiText>
              {data.link && !endGuide && (
                <>
                  <EuiSpacer size="m" />
                  <EuiText size="m">
                    <EuiLink
                      target="_blank"
                      href={data.link.url}
                      css={css`
                        font-weight: ${euiTheme.font.weight.regular};
                      `}>
                      {data.link.title}
                    </EuiLink>
                  </EuiText>
                </>
              )}
              <EuiSpacer size="xs" />
              {Object.keys(completedSteps).length === 0 && confetti && (
                <div style={{ paddingTop: '15px' }}>
                  <EuiProgress
                    valueText={`${Object.keys(completedSteps).length}/4 steps`}
                    value={
                      stepNumber === 1
                        ? showZeroState
                        : Object.keys(completedSteps).length
                    }
                    max={4}
                    size="l"
                    label={
                      Object.keys(completedSteps).length === 4
                        ? 'Completed'
                        : 'Progress'
                    }
                  />
                  <EuiSpacer size="s" />
                </div>
              )}
              {Object.keys(completedSteps).length !== 0 && (
                <div style={{ paddingTop: '15px' }}>
                  <EuiProgress
                    valueText={`${Object.keys(completedSteps).length}/4 steps`}
                    value={
                      stepNumber === 1
                        ? showZeroState
                        : Object.keys(completedSteps).length
                    }
                    max={4}
                    size="l"
                    label={
                      Object.keys(completedSteps).length === 4
                        ? 'Completed'
                        : 'Progress'
                    }
                  />
                  <EuiSpacer size="s" />
                </div>
              )}
              <EuiHorizontalRule />
              {data.steps.map(step => (
                <PanelSection
                  key={step.order}
                  step={step}
                  confetti={confetti}
                  newUserStartPage={newUserStartPage}
                  stepNumber={stepNumber}
                  section={section}
                  stepComplete={step.stepComplete}
                  completedSteps={completedSteps}
                  loadGif={loadGif}
                  forceState={
                    toggleStep === step.order
                      ? 'open'
                      : '' ||
                        (toggleStep - 1 === step.order && 'closed') ||
                        (newUserStartPage === false &&
                          section === 'Search' &&
                          step.order === 1 &&
                          'open') ||
                        (newUserStartPage === false &&
                          section === 'Observe' &&
                          step.order === 3 &&
                          'open')
                  }
                />
              ))}
              {showEndState && (
                <EuiFlexGroup gutterSize="m" justifyContent="flexEnd">
                  <EuiFlexItem grow={false}>
                    <EuiButton onClick={() => router.push('/8.6/kibana')} fill>
                      Continue using Elastic
                    </EuiButton>
                  </EuiFlexItem>
                </EuiFlexGroup>
              )}
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
                  onClick={handleOptOut}
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
