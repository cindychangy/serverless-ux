/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiButton,
  EuiImage,
  EuiSpacer,
  EuiTitle,
  EuiText,
  EuiHorizontalRule,
  EuiSkeletonText,
  EuiBadge,
  EuiSuperSelect,
  EuiLink,
  EuiAccordion,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiCard,
  EuiFieldText,
  useEuiTheme,
} from '@elastic/eui';

import Header from '../../../../components/header';
import {
  PROJECT_SERVERLESS,
  PROJECT_CLASSIC,
} from '../../../../constants/global';
import WipBadge from '../../../../components/wip_badge';

const ProjectSetup = () => {
  const { euiTheme } = useEuiTheme();
  const router = useRouter();
  const [projectType, setProjectType] = useState('none');
  const [solution, setSolution] = useState(undefined);
  const [value, setValue] = useState('My project');
  const [accordionTrigger, setAccordionTrigger] = useState('closed');

  const onChange = e => {
    setValue(e.target.value);
  };

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

  const PROVIDER = [
    {
      value: 'google',
      inputDisplay: (
        <EuiFlexGroup alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiImage
              width={40}
              src="/images/logo-google-cloud.svg"
              alt="Google"
            />
          </EuiFlexItem>
          <EuiFlexItem grow>
            <p>Google Cloud</p>
          </EuiFlexItem>
        </EuiFlexGroup>
      ),
    },
  ];

  const REGION = [
    {
      value: 'Iowa',
      inputDisplay: (
        <EuiFlexGroup alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiImage width={40} src="/images/flag.svg" alt="American flga" />
          </EuiFlexItem>
          <EuiFlexItem grow>
            <p>Iowa (us-central1)</p>
          </EuiFlexItem>
        </EuiFlexGroup>
      ),
    },
  ];

  const HARDWARE = [
    {
      value: 'CPU',
      inputDisplay: <p>CPU optimized</p>,
    },
  ];

  const VERSION = [
    {
      value: 'version',
      inputDisplay: <p>8.6.1 (latest)</p>,
    },
  ];

  const SOLUTION_CARDS = [
    {
      solution: 'search',
      logo: 'logoElasticsearch',
      title: 'Elasticsearch',
    },
    {
      solution: 'observability',
      logo: 'logoObservability',
      title: 'Observability',
    },
    {
      solution: 'security',
      logo: 'logoSecurity',
      title: 'Security',
    },
  ];

  const showProjectDetails = userSelection => {
    if (userSelection === PROJECT_SERVERLESS) {
      setProjectType(PROJECT_SERVERLESS);
      setAccordionTrigger('open');
    } else {
      setProjectType(PROJECT_CLASSIC);
      setAccordionTrigger('open');
    }
  };

  return (
    <>
      <WipBadge />
      <Header
        signedIn
        icNumber="3"
        steps={[
          {
            title: 'About you',
            status: 'complete',
            onClick: () => router.push('profile'),
          },
          {
            title: 'Choose setup',
            status: 'current',
            onClick: () => router.push('projet-setup'),
          },
        ]}
      />
      <div
        css={css`
          max-width: 800px;
          margin: auto;
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
                  Classic
                </>
              }
              titleElement="h4"
              selectable={{
                onClick: () => showProjectDetails(PROJECT_CLASSIC),
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
                lines={4}
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
                  Serverless
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
              selectable={{
                onClick: () => showProjectDetails(PROJECT_SERVERLESS),
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
                lines={4}
                size="s"
                contentAriaLabel="dummy text"
              />
            </EuiCard>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="xl" />
        {accordionTrigger === 'open' && (
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

            {projectType === PROJECT_SERVERLESS ? (
              <>
                <EuiText>
                  <h4>Project type</h4>
                </EuiText>
                <EuiSpacer size="l" />
                <EuiFlexGroup gutterSize="m">
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
                <EuiHorizontalRule margin="xxl" />
                <EuiFlexGroup direction="column" alignItems="center">
                  <EuiFlexItem
                    css={css`
                      width: 100%;
                    `}>
                    <EuiFlexGroup justifyContent="spaceBetween">
                      <EuiFlexItem grow={2}>
                        <EuiText>
                          <h4>Cloud provider and region</h4>
                        </EuiText>
                      </EuiFlexItem>
                      <EuiFlexGroup>
                        <EuiFlexItem>
                          <EuiSuperSelect
                            id="provider"
                            options={PROVIDER}
                            value="google"
                            onChange={() => {}}
                          />
                        </EuiFlexItem>
                        <EuiFlexItem>
                          <EuiSuperSelect
                            id="region"
                            options={REGION}
                            value="Iowa"
                            onChange={() => {}}
                          />
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </EuiFlexGroup>
                    <EuiHorizontalRule margin="xxl" />
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiFlexGroup justifyContent="spaceBetween">
                  <EuiFlexItem>
                    <EuiText>
                      <h4>Project name</h4>
                    </EuiText>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiFieldText
                      placeholder="My project"
                      onChange={e => onChange(e)}
                      aria-label="name-your-project"
                    />
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiHorizontalRule margin="xl" />
                <EuiFlexGroup justifyContent="flexEnd">
                  <EuiButton
                    minWidth={200}
                    onClick={() => router.push('#')}
                    fill>
                    Create project
                  </EuiButton>
                </EuiFlexGroup>
              </>
            ) : (
              <div
                css={css`
                  width: 100%;
                `}>
                <EuiTitle size="xs">
                  <h5>Deployment Name</h5>
                </EuiTitle>
                <EuiSpacer size="s" />
                <EuiFieldText fullWidth placeholder="My deployment" />
                <EuiSpacer size="s" />
                <EuiHorizontalRule />
                <EuiTitle size="xs">
                  <h5>Settings</h5>
                </EuiTitle>
                <EuiSpacer size="m" />
                <EuiFlexGroup gutterSize="s" direction="column">
                  <EuiFlexItem>
                    <EuiFlexGroup>
                      <EuiFlexItem>
                        <h3
                          css={css`
                            font-weight: ${euiTheme.font.weight.semiBold};
                          `}>
                          Cloud provider
                        </h3>
                      </EuiFlexItem>
                      <EuiFlexItem grow={1}>
                        <EuiSuperSelect
                          id="provider"
                          options={PROVIDER}
                          value="google"
                          onChange={() => {}}
                        />
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiFlexGroup>
                      <EuiFlexItem>
                        <h3
                          css={css`
                            font-weight: ${euiTheme.font.weight.semiBold};
                          `}>
                          Region
                        </h3>
                      </EuiFlexItem>
                      <EuiFlexItem grow={1}>
                        <EuiSuperSelect
                          id="region"
                          options={REGION}
                          value="Iowa"
                          onChange={() => {}}
                        />
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiFlexGroup>
                      <EuiFlexItem>
                        <h3
                          css={css`
                            font-weight: ${euiTheme.font.weight.semiBold};
                          `}>
                          Hardware profile
                        </h3>
                      </EuiFlexItem>
                      <EuiFlexItem grow={1}>
                        <EuiSuperSelect
                          id="hardware"
                          options={HARDWARE}
                          value="CPU"
                          onChange={() => {}}
                        />
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiFlexGroup>
                      <EuiFlexItem>
                        <h3
                          css={css`
                            font-weight: ${euiTheme.font.weight.semiBold};
                          `}>
                          Version
                        </h3>
                      </EuiFlexItem>
                      <EuiFlexItem grow={1}>
                        <EuiSuperSelect
                          id="version"
                          options={VERSION}
                          value="version"
                          onChange={() => {}}
                        />
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiSpacer size="s" />
                    <EuiLink href="#">
                      <EuiIcon type="arrowRight" />
                      &nbsp;&nbsp;Advanced Settings
                    </EuiLink>
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiHorizontalRule />
                <EuiFlexGroup justifyContent="flexEnd">
                  <EuiFlexItem grow={false}>
                    <EuiButton fill onClick={() => router.push('#')}>
                      Create deployment
                    </EuiButton>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </div>
            )}
          </EuiAccordion>
        )}
      </div>
    </>
  );
};

export default ProjectSetup;
