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
  EuiTextAlign,
  EuiIcon,
  EuiTitle,
  EuiCard,
  EuiText,
} from '@elastic/eui';

import Navbar from '../../components/navbar';
import { SOLUTION_CARDS } from '../../constants/solution-cards';
import { PROJECT_SERVERLESS, PROJECT_CLASSIC } from '../../constants/global';
import WipBadge from '../../components/wip_badge';

const Setup = () => {
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
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      block-size: 28px;
      font-size: 13px;
    }
  `;

  const badgeStyle = css`
    margin-left: 5px;
    margin-top: -4px;
    color: #fff !important;
  `;

  const handleUserSelection = userSelection => {
    setProjectType(userSelection);

    if (userSelection === PROJECT_CLASSIC) {
      setSolution('none');
    }

    if (userSelection === PROJECT_SERVERLESS) {
      setSolution(undefined);
      setAccordionTrigger('open');
    }
  };

  const handleNextClick = () => {
    if (projectType === PROJECT_CLASSIC) {
      router.push('deployments/create-deployment');
    }

    if (projectType === PROJECT_SERVERLESS) {
      router.push('projects/create-project');
    }
  };

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
        <EuiTextAlign textAlign="center">
          <EuiTitle size="s">
            <h1>Choose how you want to operate Elastic</h1>
          </EuiTitle>
        </EuiTextAlign>
        <EuiSpacer size="xxl" />
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
                  paddingSize="none"
                  css={cardContainer}
                  selectable={{
                    onClick: () => handleUserSelection(PROJECT_CLASSIC),
                    isSelected: projectType === PROJECT_CLASSIC,
                  }}
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
                    lines={6}
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
                <EuiSpacer size="l" />
              </EuiFlexItem>

              <EuiFlexItem>
                <EuiCard
                  textAlign="left"
                  paddingSize="none"
                  css={cardContainer}
                  selectable={{
                    onClick: () => handleUserSelection(PROJECT_SERVERLESS),
                    isSelected: projectType === PROJECT_SERVERLESS,
                  }}
                  title={
                    <>
                      <EuiSpacer size="m" />
                      {PROJECT_SERVERLESS}
                      <EuiBadge color="accent" css={badgeStyle}>
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
                    lines={6}
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
                <EuiSpacer size="l" />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
        {projectType === PROJECT_SERVERLESS && (
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
              <EuiTextAlign textAlign="center">
                <EuiText color="subdued" size="s">
                  What do you want to do with Elastic?
                </EuiText>
              </EuiTextAlign>
              <EuiSpacer size="l" />
              <EuiFlexGroup
                gutterSize="m"
                css={css`
                  padding: 0 8px;
                `}>
                {SOLUTION_CARDS.map(card => (
                  <EuiFlexItem key={card.title}>
                    <EuiCard
                      paddingSize="none"
                      css={cardContainer}
                      selectable={{
                        onClick: () => setSolution(card.solution),
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
              <EuiSpacer size="l" />
            </EuiAccordion>
          </>
        )}
        <EuiHorizontalRule margin="s" />
        <EuiFlexGroup justifyContent="flexEnd">
          <EuiFlexItem grow={false}>
            <EuiButton
              fill
              onClick={handleNextClick}
              disabled={projectType === 'none' || solution === undefined}>
              Next
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </>
  );
};

export default Setup;
