/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiButton,
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

import Navbar from '../../components/navbar';
import { SOLUTION_CARDS } from '../../constants/solution-cards';
import { PROJECT_SERVERLESS, PROJECT_CLASSIC } from '../../constants/global';
import WipBadge from '../../components/wip_badge';

const Setup = () => {
  const router = useRouter();
  const [pageViewExtended, setPageViewExtended] = useState(false);
  const [solution, setSolution] = useState(undefined);
  const [accordionTrigger, setAccordionTrigger] = useState('closed');

  const soultionCard = css`
    .euiCard__content {
      text-align: left;
      padding: 10px 20px;
    }
    button {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      block-size: 28px;
      font-size: 13px;
    }
  `;

  const buttonRound = css`
    border-radius: 6px !important;
    block-size: 32px !important;
    font-size: 1rem !important;
  `;

  const showProjectDetails = userSelection => {
    setSolution(userSelection);

    if (userSelection) {
      setAccordionTrigger('open');
    }
  };

  useEffect(() => {
    if (router.query.root !== 'projectList') {
      setPageViewExtended(true);
    }
  }, [router]);

  return (
    <>
      <WipBadge />
      <Navbar
        isCloud
        icNumber="2"
        breadcrumbs={[
          {
            text: 'Cloud',
            href: 'cloud',
          },
          {
            text: 'Create',
          },
        ]}
      />
      <div
        css={css`
          max-width: 800px;
          margin: 80px auto 0 auto;
          width: 100%;
        `}>
        <EuiFlexGroup gutterSize="m">
          {SOLUTION_CARDS.map(card => (
            <EuiFlexItem key={card.title}>
              <EuiCard
                paddingSize="none"
                css={soultionCard}
                selectable={
                  pageViewExtended && {
                    onClick: () => showProjectDetails(card.solution),
                    isSelected: solution === card.solution,
                  }
                }
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
                <EuiSpacer size="m" />
                {!pageViewExtended && (
                  <EuiButton
                    fullWidth
                    onClick={() =>
                      router.push(
                        {
                          pathname: 'projects/create-project',
                          query: {
                            solution: card.solution,
                          },
                        },
                        'projects/create-project'
                      )
                    }
                    css={buttonRound}>
                    Next
                  </EuiButton>
                )}
                <EuiSpacer size="s" />
              </EuiCard>
            </EuiFlexItem>
          ))}
        </EuiFlexGroup>
        <EuiSpacer size="l" />
        {solution !== undefined && pageViewExtended && (
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
              <EuiFlexGroup gutterSize="m">
                <EuiFlexItem
                  css={css`
                    padding: 0 5px;
                    width: 100%;
                  `}>
                  <EuiFlexGroup>
                    <EuiFlexItem>
                      <EuiCard
                        textAlign="left"
                        paddingSize="l"
                        title={
                          <>
                            <EuiSpacer size="m" />
                            {PROJECT_CLASSIC}
                          </>
                        }
                        titleElement="h4">
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
                        <EuiButton
                          fullWidth
                          onClick={() =>
                            router.push(
                              {
                                pathname: 'deployments/create-deployment',
                                query: {
                                  solution: solution,
                                },
                              },
                              'deployments/create-deployment'
                            )
                          }>
                          Next
                        </EuiButton>
                      </EuiCard>
                      <EuiSpacer size="l" />
                    </EuiFlexItem>

                    <EuiFlexItem>
                      <EuiCard
                        textAlign="left"
                        paddingSize="l"
                        title={
                          <>
                            <EuiSpacer size="m" />
                            {PROJECT_SERVERLESS}
                            <EuiBadge
                              color="accent"
                              css={css`
                                margin-left: 5px;
                                margin-top: -4px;
                              `}>
                              BETA
                            </EuiBadge>
                          </>
                        }
                        titleElement="h4">
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
                        <EuiButton
                          fullWidth
                          onClick={() =>
                            router.push(
                              {
                                pathname: 'projects/create-project',
                                query: {
                                  solution: solution,
                                },
                              },
                              'projects/create-project'
                            )
                          }>
                          Next
                        </EuiButton>
                      </EuiCard>
                      <EuiSpacer size="l" />
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
              </EuiFlexGroup>
            )}
          </EuiAccordion>
        )}
      </div>
    </>
  );
};

export default Setup;
