/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import KibanaLayout from '../layouts/kibana/page';
import { GuideContext } from '../context/guide';
import {
  GUIDES_SEARCH,
  GUIDES_OBS,
  GUIDES_SECURITY,
} from '../constants/guides';

const GuideStep = ({
  title,
  breadcrumbs,
  guideIndex,
  children,
  solution,
  sidebar,
  stepNumber,
}) => {
  const { guideOpen, setGuideOpen } = useContext(GuideContext);

  if (solution === 'search') {
    GUIDE_DATA = GUIDES_SEARCH[guideIndex];
  }

  if (solution === 'observability') {
    GUIDE_DATA = GUIDES_OBS[guideIndex];
  }

  if (solution === 'security') {
    GUIDE_DATA = GUIDES_SECURITY[guideIndex];
  }

  return (
    <KibanaLayout
      title={title}
      solution={solution}
      breadcrumbs={breadcrumbs}
      sidebar={sidebar}
      handleGuideClick={() => setGuideOpen(!guideOpen)}
      stepNumber={stepNumber}
      guideIndex={guideIndex}>
      {children}
    </KibanaLayout>
  );
};

export default GuideStep;
