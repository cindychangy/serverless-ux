/** @jsxImportSource @emotion/react */
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiSpacer,
  EuiTitle,
  EuiText,
  EuiFlexItem,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiCard,
  EuiPageTemplate,
  useEuiTheme,
} from '@elastic/eui';
import KibanaLayout from '../../../layouts/kibana/page';
import {
  CARDS_OBS,
  CARDS_SEARCH,
  CARDS_SECURITY,
  CARDS_ALL,
} from '../../../constants/cards';
import { GuideContext } from '../../../context/guide';

const GuidedSetup = () => {
  const { euiTheme } = useEuiTheme();
  const router = useRouter();
  const [guideIndex, setGuideIndex] = useState(undefined);
  const SOLUTION = router.query.solution;

  const { guideOpen, setGuideOpen } = useContext(GuideContext);

  const guideCard = css`
    position: relative;
    min-height: 110px;
    width: 380px;

    .euiCard__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `;

  let CARDS = CARDS_ALL;

  if (SOLUTION === 'search') {
    CARDS = CARDS_SEARCH;
  }

  if (SOLUTION === 'observability') {
    CARDS = CARDS_OBS;
  }

  if (SOLUTION === 'security') {
    CARDS = CARDS_SECURITY;
  }

  if (SOLUTION === 'all') {
    CARDS = CARDS_ALL;
  }

  const handleGuideClick = index => {
    setGuideOpen(!guideOpen);
    setGuideIndex(index);
  };

  return (
    <KibanaLayout
      template="empty"
      breadcrumbs={[
        {
          text: 'Home',
          href: '#',
        },
        {
          text: 'Guided setup',
        },
      ]}
      guideOpen={guideOpen}
      guideIndex={guideIndex}
      buttonDisabled={!guideOpen && true}
      handleGuideClick={() => handleGuideClick()}>
      <EuiPageTemplate paddingSize="l">
        <EuiSpacer size="xxl" />
        <EuiPageTemplate.Section color="subdued">
          <EuiTitle size="l" className="eui-textCenter">
            <h1>What would you like to do&nbsp;first?</h1>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiText color="text" size="m" textAlign="center">
            <p>Select an option below and we'll help you get started</p>
          </EuiText>
          <EuiSpacer size="l" />
          <div>
            <EuiSpacer size="l" />
            <EuiSpacer size="xxl" />
            <EuiFlexGroup wrap responsive justifyContent="center">
              {CARDS.map((guide, index) => (
                <EuiFlexItem key={index} grow={false}>
                  <EuiCard
                    onClick={() => handleGuideClick(index)}
                    css={guideCard}
                    title={
                      <>
                        <EuiSpacer size="s" />
                        <h3
                          css={css`
                            font-weight: ${euiTheme.font.weight.semiBold}};
                          `}
                          dangerouslySetInnerHTML={{
                            __html: guide.title,
                          }}></h3>
                      </>
                    }
                    titleSize="xs"
                    betaBadgeProps={{
                      label: guide.section,
                    }}
                  />
                  <EuiSpacer size="m" />
                </EuiFlexItem>
              ))}
            </EuiFlexGroup>
          </div>
          <EuiSpacer size="l" />
          <EuiText size="s" textAlign="center">
            <EuiButtonEmpty
              iconSide="right"
              onClick={() => router.push('/ic-april/kibana')}>
              I'd like to do something else (skip)
            </EuiButtonEmpty>
          </EuiText>
        </EuiPageTemplate.Section>
      </EuiPageTemplate>
    </KibanaLayout>
  );
};

export default GuidedSetup;
