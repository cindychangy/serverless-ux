/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import {
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiImage,
  EuiPageTemplate,
  EuiLoadingContent,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiTourStep,
} from '@elastic/eui';
import KibanaLayout from '../layouts/kibana';
import SolutionSidebar from './solution_sidebar';
import { GUIDE_DATA } from '../constants/guided-setup.data';

const StepPlaceholder = ({
  title,
  breadcrumbs,
  stepNumber,
  section,
  hasSidebar,
  hasTour,
  completedSteps,
}) => {
  const [guideOpen, setGuide] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [isTourStep, setIsTourStep] = useState(0);
  const [loadGif, setLoadGif] = useState(0);

  const handleGuideClick = () => {
    setGuide(!guideOpen);
  };

  const handleCompleteStep = () => {
    setGuide(true);
    setConfetti(true);
    setLoadGif(Math.random());
  };

  const handleTourClick = () => {
    setIsTourStep(isTourStep + 1);
    setGuide(true);
    setConfetti(true);
    setLoadGif(Math.random());
  };

  let guideIndex;

  if (section === 'Search') {
    guideIndex = 0;
  }

  if (section === 'Observability') {
    guideIndex = 1;
  }

  if (section === 'Security') {
    guideIndex = 2;
  }

  //Tours
  const TourStep = ({
    anchorClass,
    buttonText,
    content,
    image,
    position,
    title,
    key,
  }) => (
    <EuiTourStep
      anchor={() => document.getElementsByClassName(anchorClass)[0]}
      anchorPosition={position}
      content={
        <>
          <EuiText color="subdue" grow={false} size="xs">
            <p>{content}</p>
          </EuiText>
          {image && (
            <>
              <EuiSpacer size="m" />
              <EuiImage alt="placeholder gif" src={image} width="fullWidth" />
            </>
          )}
        </>
      }
      css={css`
        max-width: 350px !important;
      `}
      footerAction={
        key === 0 ? (
          <EuiButtonEmpty
            color="text"
            flush="both"
            onClick={() => setIsTourStep(isTourStep + 99)}
            size="xs"></EuiButtonEmpty>
        ) : (
          <EuiFlexGroup alignItems="center" gutterSize="m">
            <EuiFlexItem>
              <EuiButton
                color="success"
                onClick={
                  isTourStep === 0
                    ? () => setIsTourStep(isTourStep + 1)
                    : handleTourClick
                }
                size="s">
                {buttonText}
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        )
      }
      isStepOpen={true}
      offset={16}
      step={isTourStep + 1}
      stepsTotal={2}
      title={title}
    />
  );

  return (
    <>
      {hasTour && section === 'Search' && isTourStep === 0 && (
        <TourStep
          anchorClass="search-tour-1"
          buttonText="Next"
          content="Reprehenderit aute laborum ea amet proident voluptate minim do cillum anim."
          position="rightUp"
          title="Create search experiences with APIs and tools."
          key={0}
        />
      )}
      {section === 'Search' && isTourStep === 1 && (
        <TourStep
          anchorClass="search-tour-5"
          buttonText="End Tour"
          content="Reprehenderit aute laborum ea amet proident voluptate minim do cillum anim."
          image="/images/tour-obs-01.gif"
          position="rightUp"
          title="Review your search engine analytics"
          key={1}
        />
      )}

      {hasTour && section === 'Observability' && isTourStep === 0 && (
        <TourStep
          anchorClass="observe-tour-1"
          buttonText="Next"
          content="Reprehenderit aute laborum ea amet proident voluptate minim do cillum anim."
          position="rightUp"
          title="Consolidate your logs and metrics"
          key={0}
        />
      )}
      {section === 'Observability' && isTourStep === 1 && (
        <TourStep
          anchorClass="observe-tour-2"
          buttonText="End Tour"
          content="Reprehenderit aute laborum ea amet proident voluptate minim do cillum anim."
          image="/images/tour-obs-01.gif"
          position="rightUp"
          title="Get more visibility into your data"
          key={1}
        />
      )}

      <KibanaLayout
        template="empty"
        guideOpen={guideOpen}
        confetti={confetti}
        breadcrumbs={breadcrumbs}
        onClick={handleGuideClick}
        section={section}
        hasSidebar={hasSidebar}
        stepNumber={stepNumber}
        completedSteps={completedSteps}
        loadGif={loadGif}
        guideIndex={guideIndex}>
        {hasSidebar ? (
          <EuiPageTemplate style={{ paddingBlockStart: 0 }}>
            <EuiPageTemplate.Sidebar>
              <SolutionSidebar section={section} stepNumber={stepNumber} />
            </EuiPageTemplate.Sidebar>
            <EuiPageTemplate.Section>
              <EuiTitle size="l">
                <h1>{title}</h1>
              </EuiTitle>
              <EuiSpacer size="xl" />
              <EuiFlexGroup style={{ maxWidth: '1000px' }} grow={0}>
                <EuiFlexItem>
                  <EuiLoadingContent lines={8} />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiLoadingContent lines={6} />
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer size="xxl" />
              <EuiFlexGroup style={{ maxWidth: '1000px' }} grow={0}>
                <EuiFlexItem>
                  <EuiLoadingContent lines={12} />
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer size="l" />
              {!hasTour && (
                <EuiButton onClick={handleCompleteStep} fill>
                  Complete this step
                </EuiButton>
              )}
            </EuiPageTemplate.Section>
          </EuiPageTemplate>
        ) : null}
      </KibanaLayout>
    </>
  );
};

export default StepPlaceholder;
