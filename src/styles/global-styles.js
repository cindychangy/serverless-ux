import { css } from '@emotion/react';

export const globalStyes = css`
  #__next,
  .guideBody.euiBody--headerIsFixed {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  [aria-labelledby='onboarding-guide'] {
    top: 55px;
    bottom: unset !important;
    right: 138px;
    border-radius: 6px;
    width: 480px;
    height: unset !important;
    animation: euiModal 350ms cubic-bezier(0.34, 1.61, 0.7, 1);
    max-height: 90vh;
    box-shadow: none;
    overflow: hidden;
  }

  @media only screen and (max-width: 574px) {
    [aria-labelledby='onboarding-guide'] {
      right: 25px;
      width: 100%;
    }
  }

  [aria-labelledby='onboarding-guide'] .euiProgress__valueText {
    color: #69707d;
  }

  [aria-labelledby='onboarding-guide'] .euiProgress__valueText,
  [aria-labelledby='onboarding-guide'] .euiProgress__label {
    font-size: 12px;
  }

  [aria-labelledby='onboarding-guide'] .euiFlyoutBody__overflowContent {
    width: 480px;
    padding-top: 10px;
  }

  @media only screen and (max-width: 574px) {
    [aria-labelledby='onboarding-guide'] .euiFlyoutBody__overflowContent {
      right: 25px;
      width: 450px;
    }
  }

  [aria-labelledby='onboarding-guide'] .euiFlyoutBody {
    overflow: scroll;
  }

  [aria-labelledby='onboarding-guide'] .euiFlyoutFooter {
    border-radius: 0 0 6px 6px;
    background: #fff;
    padding: 22px 30px;
  }

  [aria-labelledby='onboarding-guide'] .euiAccordion__buttonContent {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }

  [aria-labelledby='onboarding-guide'] .euiAccordion,
  [aria-labelledby='onboarding-guide'] .euiAccordion__iconButton {
    color: #69707d; /* EUI color - subduedText */
  }

  [aria-labelledby='onboarding-guide'] .euiAccordion-isOpen,
  .euiAccordion__iconButton.euiAccordion__iconButton-isOpen {
    color: #1a1c21; /* EUI color- Title */
  }

  @media only screen and (max-width: 574px) {
    [aria-labelledby='onboarding-guide'] .euiFlyoutBody__overflowContent {
      width: 100%;
    }
  }

  .euiOverlayMask {
    background: rgba(0, 0, 0, 0.4);
  }

  /* accordion animation styles */
  @media only screen and (max-width: 574px) {
    .euiAccordion__triggerWrapper {
      width: 100%;
    }
  }

  @keyframes transitionIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .guideBody.euiBody--headerIsFixed {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  /* remove close button on optOutModal */
  [aria-label='optOutModal'] .euiModal__closeIcon {
    display: none;
  }
`;
