/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiButton,
  EuiButtonEmpty,
  EuiText,
  EuiSpacer,
  EuiAccordion,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiPanel,
  EuiIcon,
  useEuiTheme,
} from '@elastic/eui';

const PanelSection = ({
  step,
  confetti,
  newUserStartPage,
  stepNumber,
  stepComplete,
  completedSteps,
  section,
  forceState,
  loadGif,
}) => {
  const router = useRouter();
  const { euiTheme } = useEuiTheme();
  const checkAnimate = css`
    height: 150px;
    text-align: center;
  `;

  const stepText = css`
    p {
      margin-left: 32px;
    }

    ul {
      padding-left: 28px;
    }
  `;

  const stepDone = css`
    .guideStep svg {
      background: ${euiTheme.colors.success};
      border: 2px solid ${euiTheme.colors.success};
      flex-wrap: nowrap;
      transition: 0.3s ease-in-out;
      border-radius: 50%;
      height: 24px;
      width: 24px;
      margin-right: 8px;
    }

    .euiText {
      color: ${euiTheme.colors.title};
    }

    button.euiButtonIcon.euiButtonIcon--text.euiButtonIcon--empty.euiButtonIcon--xSmall.euiAccordion__iconButton.euiAccordion__iconButton--right {
      display: none;
    }
  `;

  const stepOutline = css`
    button.euiAccordion__button .guideStep .euiText {
      border: 2px solid ${euiTheme.colors.success};
      border-radius: 50%;
      height: 24px;
      width: 24px;
      margin-right: 8px;
    }
  `;

  const stepStyle = css`
    button.euiAccordion__button .guideStep .euiText {
      border: 2px solid ${euiTheme.colors.lightShade};
      border-radius: 50%;
      height: 24px;
      width: 24px;
      margin-right: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  const currentStep = stepNumber === step.order;
  const nowFinished = completedSteps[`step-${step.order}`] === 'done';
  const stepGif = '/images/step-complete-animation.gif?v=';

  useEffect(() => {
    if (stepNumber !== 0) {
      setTimeout(() => {
        document
          .getElementById('currentStep')
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }, [stepNumber]);

  const accordionStyles = [
    stepStyle,
    newUserStartPage && step.order === 1 && stepOutline,
    currentStep && stepOutline,
    forceState && stepOutline,
    nowFinished && stepDone,
  ];

  const showStartButton =
    (newUserStartPage !== undefined && step.order === 1) ||
    (newUserStartPage === false && step.pageProgressOpen) ||
    (!newUserStartPage !== undefined && step.order === stepNumber + 1);

  const showPanelInitialOpen =
    (newUserStartPage && step.order === 1) ||
    (newUserStartPage === false && section === 'Search' && step.order === 1) ||
    (newUserStartPage === false && section === 'Observe' && step.order === 3);

  return (
    <div id={currentStep && 'currentStep'}>
      <EuiFlexGroup
        gutterSize="none"
        responsive={false}
        aria-label={`step-${step.order}`}>
        <EuiFlexItem grow={1}>
          <EuiAccordion
            id={`step-${step.order}`}
            arrowDisplay="right"
            forceState={forceState || (stepComplete && 'closed')}
            css={accordionStyles}
            buttonContent={
              <EuiFlexGroup gutterSize="none" responsive={false}>
                {/* Need to add this class "guideStep to target styles */}
                <EuiFlexItem grow={false} class="guideStep">
                  {(stepComplete && currentStep) ||
                  stepComplete ||
                  nowFinished ? (
                    <EuiIcon type="check" size="m" color="white" />
                  ) : (
                    <EuiText
                      size="s"
                      css={css`
                        font-weight: ${euiTheme.font.weight.medium};
                        line-height: 1.4;
                      `}>
                      {step.order}
                    </EuiText>
                  )}
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiText
                    css={css`
                      font-weight: ${euiTheme.font.weight.semiBold};
                    `}>
                    {step.title}
                  </EuiText>
                </EuiFlexItem>
              </EuiFlexGroup>
            }
            paddingSize="none"
            initialIsOpen={showPanelInitialOpen}>
            <EuiPanel
              paddingSize="none"
              style={{ position: 'relative', boxShadow: 'none' }}
              css={confetti && currentStep && !stepComplete && checkAnimate}
              // css={confetti && currentStep && !stepComplete && styles.confetti}
            >
              {confetti && currentStep && !stepComplete && loadGif ? (
                <img src={stepGif + loadGif} alt="Step complete" width="70%" />
              ) : (
                <>
                  <>
                    <EuiSpacer size="s" />
                    <EuiText
                      size="s"
                      dangerouslySetInnerHTML={{ __html: step.description }}
                      css={stepText}
                    />
                    {step.link && (
                      <EuiButtonEmpty
                        iconType="popout"
                        iconSide="right"
                        iconSize="s"
                        href={step.link.url}
                        style={{ marginLeft: '24px' }}>
                        <EuiText size="xs">{step.link.title}</EuiText>
                      </EuiButtonEmpty>
                    )}
                    {showStartButton ? (
                      <EuiFlexGroup justifyContent="flexEnd" gutterSize="none">
                        <EuiFlexItem grow={false}>
                          <EuiSpacer size="m" />
                          <EuiButton
                            fill
                            onClick={() =>
                              router.push(`/8.6/guided-setup/${step.stepPath}`)
                            }>
                            Start
                          </EuiButton>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    ) : null}
                  </>
                </>
              )}
            </EuiPanel>
          </EuiAccordion>
          <EuiHorizontalRule margin="l" />
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
};

export default PanelSection;
