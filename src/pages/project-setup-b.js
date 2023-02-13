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
} from '@elastic/eui';

import Header from '../components/header';
import { PROJECT_SERVERLESS, PROJECT_CLASSIC } from '../constants/global';

const ProjectSetup = () => {
  const router = useRouter();
  const [projectType, setProjectType] = useState('none');
  const [solution, setSolution] = useState(undefined);
  const [value, setValue] = useState('My project');
  const [accordionTrigger, setAccordionTrigger] = useState('closed');

  const onChange = e => {
    setValue(e.target.value);
  };

  const options = [
    {
      value: 'google',
      inputDisplay: (
        <EuiFlexGroup alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiImage width={40} src="images/logo-google-cloud.svg" />
          </EuiFlexItem>
          <EuiFlexItem grow>
            <p>Google Cloud</p>
          </EuiFlexItem>
        </EuiFlexGroup>
      ),
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
      <Header
        signedIn
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
              paddingSize="l"
              title={
                <EuiTitle size="s">
                  <h3>Dedicated</h3>
                </EuiTitle>
              }
              onClick={() => showProjectDetails(PROJECT_CLASSIC)}>
              <EuiHorizontalRule margin="s" />
              <EuiSpacer size="s" />
              <EuiSkeletonText
                lines={3}
                size="s"
                contentAriaLabel="dummy text"
              />
            </EuiCard>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiCard
              textAlign="left"
              paddingSize="l"
              title={
                <EuiTitle size="s">
                  <h3>
                    Self Managed
                    <EuiBadge
                      color="accent"
                      style={{ color: '#fff', marginLeft: '5px' }}>
                      BETA
                    </EuiBadge>
                  </h3>
                </EuiTitle>
              }
              onClick={() => showProjectDetails(PROJECT_SERVERLESS)}>
              <EuiHorizontalRule margin="s" />
              <EuiSpacer size="s" />
              <EuiSkeletonText
                lines={3}
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
                  left: 50%;
                `}>
                <EuiIcon type="arrowDown" color="primary" size="l" />
              </div>
            }
            padding="l">
            <EuiSpacer size="xxl" />

            {projectType === PROJECT_SERVERLESS ? (
              <>
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
                          {/* <EuiSuperSelect
                    id="provider"
                    options={options}
                    value="google"
                    onChange={() => {}}
                  /> */}
                        </EuiFlexItem>
                        <EuiFlexItem>
                          {/* <EuiSuperSelect
                    id="region"
                    options={options}
                    value="google"
                    onChange={() => {}}
                  /> */}
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </EuiFlexGroup>
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiHorizontalRule margin="xxl" />
                <EuiText>
                  <h4>Project type</h4>
                </EuiText>
                <EuiSpacer size="l" />
                <EuiFlexGroup gutterSize="m">
                  <EuiFlexItem>
                    <EuiCard
                      selectable={{
                        onClick: () => setSolution('search'),
                        isSelected: solution === 'search',
                      }}>
                      <EuiFlexGroup>
                        <EuiFlexItem>
                          <EuiTitle size="xs">
                            <h4>ElasticSearch</h4>
                          </EuiTitle>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </EuiCard>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiCard
                      selectable={{
                        onClick: () => setSolution('obs'),
                        isSelected: solution === 'obs',
                      }}>
                      <EuiFlexGroup>
                        <EuiFlexItem>
                          <EuiTitle size="xs">
                            <h4>Observability</h4>
                          </EuiTitle>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </EuiCard>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiCard
                      selectable={{
                        onClick: () => setSolution('security'),
                        isSelected: solution === 'security',
                      }}>
                      <EuiFlexGroup>
                        <EuiFlexItem>
                          <EuiTitle size="xs">
                            <h4>Security</h4>
                          </EuiTitle>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </EuiCard>
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiHorizontalRule margin="xxl" />
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
                    onClick={() => router.push('/guided-setup')}
                    fill>
                    Create project
                  </EuiButton>
                </EuiFlexGroup>
              </>
            ) : (
              <>
                <EuiSpacer size="s" />

                <EuiTitle size="xs">
                  <h5>Deployment Name</h5>
                </EuiTitle>
                <EuiSpacer size="s" />
                <EuiFieldText fullWidth placeholder="My deployment" />

                <EuiSpacer size="xxl" />
                <EuiTitle size="xs">
                  <h5>Deployment Settings</h5>
                </EuiTitle>
                <EuiSpacer size="m" />
                <EuiFlexGroup gutterSize="s">
                  <EuiFlexItem grow={false}>
                    <EuiIcon type="/images/icon-gcp.svg" size="xxl" />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiText size="s">
                      <p>
                        GCP Iowa (us-central1) &nbsp;{' '}
                        <EuiLink href="#">Edit settings</EuiLink>
                      </p>
                    </EuiText>
                    <EuiText color="subdued" size="xs">
                      <p>Storage optimized, 8.1.3</p>
                    </EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiSpacer size="xl" />
                <EuiFlexGroup justifyContent="flexEnd">
                  <EuiFlexItem grow={false}>
                    <EuiButton
                      fill
                      onClick={() => router.push('/guided-setup')}>
                      Create deployment
                    </EuiButton>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </>
            )}
          </EuiAccordion>
        )}
      </div>
    </>
  );
};

export default ProjectSetup;
