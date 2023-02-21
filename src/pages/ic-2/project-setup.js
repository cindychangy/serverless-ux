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

const ProjectSetup = () => {
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

  useEffect(() => {
    if (router.query.root !== 'projectList') {
      setPageViewExtended(true);
    }
  }, [router]);

  console.log(solution);

  return (
    <>
      <Navbar
        isCloud
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
        {!pageViewExtended && (
          <>
            <EuiHorizontalRule margin="xl" />
            <EuiFlexGroup justifyContent="flexEnd">
              <EuiFlexItem grow={false}>
                <EuiButton
                  fill
                  disabled={solution == undefined && true}
                  onClick={() =>
                    router.push(
                      {
                        pathname: 'projects/create-project',
                        query: {
                          solution: solution,
                        },
                      },
                      'create-project'
                    )
                  }>
                  Next
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </>
        )}
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
                            Dedicated
                          </>
                        }
                        titleElement="h4"
                        // selectable={{
                        //   onClick: () => setProjectType(PROJECT_CLASSIC),
                        //   isSelected: projectType === PROJECT_CLASSIC,
                        // }}
                      >
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
                              'create-deployment'
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
                            Fully Managed
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
                        titleElement="h4"
                        // selectable={{
                        //   onClick: () => setProjectType(PROJECT_SERVERLESS),
                        //   isSelected: projectType === PROJECT_SERVERLESS,
                        // }}
                      >
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
                            // router.push('projects/create-project')
                            router.push(
                              {
                                pathname: 'projects/create-project',
                                query: {
                                  solution: solution,
                                },
                              },
                              'create-project'
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

export default ProjectSetup;
