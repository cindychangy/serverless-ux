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
              onClick={() => setProjectType(PROJECT_CLASSIC)}>
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
              onClick={() => setProjectType(PROJECT_SERVERLESS)}>
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
        <EuiFlexGroup direction="column" alignItems="center">
          <EuiFlexItem>
            <EuiIcon type="arrowDown" color="primary" size="l" />
            <EuiSpacer size="xl" />
          </EuiFlexItem>
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
          <EuiButton minWidth={200} fill>
            Create project
          </EuiButton>
        </EuiFlexGroup>
        <EuiSpacer size="xxl" />
      </div>
    </>
  );
};

export default ProjectSetup;
