/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiButton,
  EuiSpacer,
  EuiHorizontalRule,
  EuiBadge,
  EuiAccordion,
  EuiFlexGroup,
  EuiFlexItem,
  EuiTextAlign,
  EuiIcon,
  EuiTitle,
  EuiCard,
  EuiText,
  EuiListGroup,
  EuiListGroupItem,
} from '@elastic/eui';

import Navbar from '../../components/navbar';
import { SOLUTION_CARDS } from '../../constants/cards';
import { PROJECT_BETA, PROJECT_CLASSIC } from '../../constants/global';

const Setup = () => {
  const router = useRouter();
  const [projectType, setProjectType] = useState('none');
  const [solution, setSolution] = useState(undefined);
  const [accordionTrigger, setAccordionTrigger] = useState('closed');

  const cardContainer = css`
    position: relative;
    .euiCard__content {
      padding: 10px 20px;
    }
    button {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      block-size: 28px;
      font-size: 13px;
    }
  `;

  const buttonSmall = css`
    button {
      block-size: 21px;
      font-size: 12px;
    }
  `;

  const badgeStyle = css`
    position: absolute;
    top: 10px;
    right: 10px;
  `;

  const handleUserSelection = userSelection => {
    setProjectType(userSelection);

    if (userSelection === PROJECT_CLASSIC) {
      setSolution('none');
    }

    if (userSelection === PROJECT_BETA) {
      setSolution(undefined);
      setAccordionTrigger('open');
    }
  };

  const handleNextClick = () => {
    if (projectType === PROJECT_CLASSIC) {
      router.push('deployments/create-deployment');
    }

    if (projectType === PROJECT_BETA) {
      router.push(
        {
          pathname: 'projects/create-project',
          query: {
            solution,
          },
        },
        'projects/create-project'
      );
    }
  };

  return (
    <>
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
          max-width: 740px;
          margin: 80px auto 0 auto;
          width: 100%;
        `}>
        <EuiTextAlign textAlign="center">
          <EuiTitle size="s">
            <h1>Choose how you want to operate Elastic</h1>
          </EuiTitle>
        </EuiTextAlign>
        <EuiSpacer size="xxl" />
        <EuiFlexGroup justifyContent="center">
          <EuiFlexItem
            css={css`
              max-width: 350px;
            `}>
            <EuiCard
              textAlign="left"
              paddingSize="none"
              css={cardContainer}
              selectable={{
                onClick: () => handleUserSelection(PROJECT_CLASSIC),
                isSelected: projectType === PROJECT_CLASSIC,
              }}
              title={
                <EuiTextAlign textAlign="center">
                  <EuiSpacer size="m" />
                  {PROJECT_CLASSIC}
                </EuiTextAlign>
              }
              titleElement="h4">
              <EuiHorizontalRule margin="s" />
              <EuiSpacer size="s" />
              <EuiText size="s">
                <p>
                  Provision and deploy your own Elastic Stack. Get maximum
                  control and access all solutions.
                </p>
              </EuiText>
              <EuiSpacer size="s" />
              <EuiListGroup gutterSize="none">
                <EuiListGroupItem
                  icon={<EuiIcon type="check" size="m" color="#00bfb3" />}
                  label={
                    <EuiText size="s">
                      Ingest data, manage its lifecycle, and access it in any
                      provisioned solutions
                    </EuiText>
                  }
                  wrapText
                />
                <EuiListGroupItem
                  icon={<EuiIcon type="check" size="m" color="#00bfb3" />}
                  label={
                    <EuiText size="s">
                      Manage hardware settings and capacity
                    </EuiText>
                  }
                  wrapText
                />
                <EuiListGroupItem
                  icon={<EuiIcon type="check" size="m" color="#00bfb3" />}
                  label={
                    <EuiText size="s">
                      Control upgrades, performance, and healthy
                    </EuiText>
                  }
                  wrapText
                />
              </EuiListGroup>
              <EuiSpacer size="m" />
            </EuiCard>
            <EuiSpacer size="l" />
          </EuiFlexItem>
          <EuiFlexItem
            css={css`
              max-width: 350px;
            `}>
            <EuiCard
              textAlign="left"
              paddingSize="none"
              css={cardContainer}
              selectable={{
                onClick: () => handleUserSelection(PROJECT_BETA),
                isSelected: projectType === PROJECT_BETA,
              }}
              title={
                <EuiTextAlign textAlign="center">
                  <EuiSpacer size="m" />
                  {PROJECT_BETA}
                  <EuiBadge color="warning" css={badgeStyle}>
                    BETA
                  </EuiBadge>
                </EuiTextAlign>
              }
              titleElement="h4">
              <EuiHorizontalRule margin="s" />
              <EuiSpacer size="s" />
              <EuiText size="s">
                <p>
                  Optimized experiences for each solution and quick access to
                  the tools you need.
                </p>
              </EuiText>
              <EuiSpacer size="s" />
              <EuiListGroup gutterSize="none">
                <EuiListGroupItem
                  icon={<EuiIcon type="check" size="m" color="#00bfb3" />}
                  label={
                    <EuiText size="s">
                      Health, performance and infrastructure scaling managed by
                      Elastic
                    </EuiText>
                  }
                  wrapText
                />
                <EuiListGroupItem
                  icon={<EuiIcon type="check" size="m" color="#00bfb3" />}
                  label={
                    <EuiText size="s">
                      Always on latest software version
                    </EuiText>
                  }
                  wrapText
                />
                <EuiListGroupItem
                  icon={<EuiIcon type="check" size="m" color="#00bfb3" />}
                  label={
                    <EuiText size="s">
                      Specific pricing per solution used
                    </EuiText>
                  }
                  wrapText
                />
              </EuiListGroup>
              <EuiSpacer size="m" />
            </EuiCard>
            <EuiSpacer size="l" />
          </EuiFlexItem>
        </EuiFlexGroup>
        {projectType === PROJECT_BETA && (
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
                  Select a solution
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
                      css={[cardContainer, buttonSmall]}
                      selectable={{
                        onClick: () => setSolution(card.solution),
                        isSelected: solution === card.solution,
                      }}
                      title={
                        <>
                          <EuiSpacer size="s" />
                          <EuiIcon type={card.logo} size="m" />
                          <div>{card.title}</div>
                        </>
                      }
                      titleElement="h4"
                      titleSize="xs">
                      <EuiBadge color="warning" css={badgeStyle}>
                        <small>BETA</small>
                      </EuiBadge>
                      <EuiHorizontalRule margin="xs" />
                      <EuiSpacer size="xs" />
                      <EuiTextAlign align="left">
                        <EuiText size="s">
                          <p>{card.description}</p>
                        </EuiText>
                        <EuiSpacer size="m" />
                        <EuiText size="xs">
                          <h4>Includes:</h4>
                        </EuiText>
                        <EuiText size="s">
                          <p>{card.features}</p>
                        </EuiText>
                      </EuiTextAlign>

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
