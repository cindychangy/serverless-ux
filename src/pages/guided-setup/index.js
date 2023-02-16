/** @jsxImportSource @emotion/react */
import { useState } from 'react';
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
  EuiIcon,
  EuiTextColor,
  EuiPageTemplate,
} from '@elastic/eui';
import KibanaLayout from '../../layouts/kibana';
import { CARDS_OBS } from '../../constants/solution-cards';

const GuidedSetup = () => {
  const router = useRouter();
  const [guideOpen, setGuide] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

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

  const BREADCRUMBS = [
    {
      text: 'Home',
      href: '#',
    },
    {
      text: 'Guided setup',
    },
  ];

  return (
    <KibanaLayout
      template="empty"
      breadcrumbs={BREADCRUMBS}
      guideOpen={guideOpen}
      buttonDisabled={buttonDisabled}
      onClick={() => handleGuideClick(section)}>
      <EuiSpacer size="m" />
      <EuiPageTemplate style={{ paddingBlockStart: 0 }} paddingSize="l">
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
              {CARDS_OBS.map((guide, index) => (
                <EuiFlexItem key={index} grow={1}>
                  <EuiCard
                    onClick={() => {}}
                    title={
                      <>
                        <EuiSpacer size="s" />
                        <h3 style={{ fontWeight: 600 }}>{guide.title}</h3>
                      </>
                    }
                    titleSize="xs"
                    betaBadgeProps={{
                      label: guide.section,
                    }}
                    description={
                      <>
                        {guide.progress && (
                          <EuiTextColor color="subdued">
                            <small>{guide.progress}</small>
                          </EuiTextColor>
                        )}
                        {guide.complete && (
                          <EuiFlexGroup gutterSize="s" alignItems="center">
                            <EuiFlexItem grow={false}>
                              <EuiIcon
                                type="checkInCircleFilled"
                                css={css`
                                  color: ${euiTheme.colors.success};
                                `}
                              />
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                              <small>Guide Complete</small>
                            </EuiFlexItem>
                          </EuiFlexGroup>
                        )}
                      </>
                    }
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
              onClick={() => router.push('kibana')}>
              I'd like to do something else (skip)
            </EuiButtonEmpty>
          </EuiText>
        </EuiPageTemplate.Section>
      </EuiPageTemplate>
    </KibanaLayout>
  );
};

export default GuidedSetup;
