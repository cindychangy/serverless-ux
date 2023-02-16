/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiImage,
  EuiSpacer,
  EuiHorizontalRule,
  EuiSkeletonText,
  EuiBadge,
  EuiAccordion,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiCard,
} from '@elastic/eui';

import Header from '../../components/header';
import { PROJECT_SERVERLESS, PROJECT_CLASSIC } from '../../constants/global';
import { SOLUTION_CARDS } from '../../constants/solution-cards';

const ProjectSetup = () => {
  const router = useRouter();
  const [projectType, setProjectType] = useState('none');
  const [solution, setSolution] = useState(undefined);
  const [accordionTrigger, setAccordionTrigger] = useState('closed');

  const cardContainer = css`
    .euiCard__content {
      text-align: left;
      padding: 10px 20px;
    }
    button {
      border-top-right-radius: 0 !important;
      border-top-left-radius: 0 !important;
      block-size: 28px;
      font-size: 13px;
    }
  `;

  const showProjectDetails = userSelection => {
    setSolution(userSelection);

    if (userSelection) {
      setAccordionTrigger('open');
    }
  };

  return (
    <>
      <Header signedIn />
      <div
        css={css`
          max-width: 800px;
          margin: auto;
          width: 100%;
        `}>
        <EuiSpacer size="m" />
        <EuiFlexGroup gutterSize="m">
          {SOLUTION_CARDS.map(card => (
            <EuiFlexItem key={card.title}>
              <EuiCard
                paddingSize="none"
                css={cardContainer}
                selectable={{
                  onClick: () => showProjectDetails(card.solution),
                  isSelected: solution === card.solution,
                }}
                title={
                  <EuiFlexGroup alignItems="center">
                    <EuiFlexItem grow={false}>
                      <EuiIcon type={card.logo} size="m" />
                    </EuiFlexItem>
                    <EuiFlexItem
                      grow={false}
                      css={css`
                        margin-left: -16px;
                      `}>
                      {card.title}
                    </EuiFlexItem>
                  </EuiFlexGroup>
                }
                titleElement="h4"
                titleSize="xs">
                <EuiSpacer size="s" />
                <EuiSkeletonText
                  lines={4}
                  size="xs"
                  contentAriaLabel="dummy text"
                />
                <EuiSpacer size="s" />
              </EuiCard>
            </EuiFlexItem>
          ))}
        </EuiFlexGroup>

        <EuiSpacer size="xl" />
        {solution !== undefined && (
          <>
            <EuiAccordion
              id="projectDetails"
              arrowDisplay="none"
              forceState={accordionTrigger}
              css={css`
                position: relative;
              `}
              buttonContent={
                <div
                  css={css`
                    position: absolute;
                    left: 49%;
                  `}>
                  <EuiIcon type="arrowDown" color="primary" size="l" />
                </div>
              }
              padding="l">
              <EuiSpacer size="xxl" />
              {accordionTrigger === 'open' && (
                <EuiFlexGroup direction="column" alignItems="center">
                  <EuiFlexItem
                    css={css`
                      width: 100%;
                    `}>
                    <EuiFlexGroup>
                      <EuiFlexItem>
                        <EuiCard
                          textAlign="left"
                          paddingSize="none"
                          css={cardContainer}
                          title={
                            <>
                              <EuiSpacer size="m" />
                              Dedicated
                            </>
                          }
                          titleElement="h4"
                          selectable={{
                            onClick: () => setProjectType(PROJECT_CLASSIC),
                            isSelected: projectType === PROJECT_CLASSIC,
                          }}>
                          <EuiHorizontalRule margin="s" />
                          <EuiSpacer size="s" />
                          <EuiSkeletonText
                            lines={2}
                            size="s"
                            contentAriaLabel="dummy text"
                          />
                          <EuiSpacer size="m" />
                          <EuiSkeletonText
                            lines={2}
                            size="s"
                            contentAriaLabel="dummy text"
                          />
                          <EuiSpacer size="m" />
                        </EuiCard>
                      </EuiFlexItem>

                      <EuiFlexItem>
                        <EuiCard
                          textAlign="left"
                          paddingSize="none"
                          css={cardContainer}
                          title={
                            <>
                              <EuiSpacer size="m" />
                              Fully Managed
                              <EuiBadge
                                color="accent"
                                style={{
                                  color: '#fff',
                                  marginLeft: '5px',
                                  marginTop: '-4px',
                                }}>
                                BETA
                              </EuiBadge>
                            </>
                          }
                          titleElement="h4"
                          selectable={{
                            onClick: () => setProjectType(PROJECT_SERVERLESS),
                            isSelected: projectType === PROJECT_SERVERLESS,
                          }}>
                          <EuiHorizontalRule margin="s" />
                          <EuiSpacer size="s" />
                          <EuiSkeletonText
                            lines={2}
                            size="s"
                            contentAriaLabel="dummy text"
                          />
                          <EuiSpacer size="m" />
                          <EuiSkeletonText
                            lines={2}
                            size="s"
                            contentAriaLabel="dummy text"
                          />
                        </EuiCard>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiFlexItem>
                  <EuiSpacer margin="s" />
                </EuiFlexGroup>
              )}
            </EuiAccordion>
          </>
        )}
      </div>
    </>
  );
};

export default ProjectSetup;
