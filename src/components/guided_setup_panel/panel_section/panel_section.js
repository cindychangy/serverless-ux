/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiButton,
  EuiText,
  EuiSpacer,
  EuiAccordion,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  useEuiTheme,
} from '@elastic/eui';
import { GuideContext } from '../../../pages/_app';

const PanelSection = ({ step, guideProgress, forceState }) => {
  const router = useRouter();
  const { euiTheme } = useEuiTheme();

  const { activeGuide, setActiveGuide } = useContext(GuideContext);

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

  const handleGuideStart = () => {
    setActiveGuide(activeGuide);

    router.push(`guided-setup/${step.stepPath}`);
  };

  // const currentStep = step.order === stepNumber;
  // const accordionStyles = [stepStyle, currentStep && stepOutline];
  const accordionStyles = [stepStyle];

  return (
    <div>
      <EuiFlexGroup
        gutterSize="none"
        responsive={false}
        aria-label={`step-${step.order}`}>
        <EuiFlexItem grow={1}>
          <EuiAccordion
            id={`step-${step.order}`}
            arrowDisplay="right"
            forceState={forceState}
            css={accordionStyles}
            buttonContent={
              <EuiFlexGroup gutterSize="none" responsive={false}>
                <EuiFlexItem grow={false} class="guideStep">
                  <EuiText
                    size="s"
                    css={css`
                      font-weight: ${euiTheme.font.weight.medium};
                      line-height: 1.4;
                    `}>
                    {step.order}
                  </EuiText>
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
            initialIsOpen={step.order === 1}>
            <EuiSpacer size="s" />
            <EuiText
              size="s"
              dangerouslySetInnerHTML={{ __html: step.description }}
              css={stepText}
            />
            <EuiFlexGroup justifyContent="flexEnd" gutterSize="none">
              <EuiFlexItem grow={false}>
                <EuiSpacer size="m" />

                <EuiButton
                  fill
                  onClick={handleGuideStart}
                  // onClick={() => router.push(`guided-setup/${step.stepPath}`)}
                  // onClick={() =>
                  //   router.push(
                  //     {
                  //       pathname: `guided-setup/${step.stepPath}`,
                  //       query: {
                  //         stepsCompleted: guideProgress,
                  //       },
                  //     },
                  //     `guided-setup/${step.stepPath}`
                  //   )
                  // }
                >
                  Start
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiAccordion>
          <EuiHorizontalRule margin="l" />
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
};

export default PanelSection;
