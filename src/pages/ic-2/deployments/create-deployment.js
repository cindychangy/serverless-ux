/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiButton,
  EuiSpacer,
  EuiPanel,
  EuiTitle,
  EuiText,
  EuiHorizontalRule,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSuperSelect,
  EuiImage,
  EuiTextColor,
  EuiAccordion,
  useEuiTheme,
} from '@elastic/eui';

import Navbar from '../../../components/navbar';
import WaitPanel from '../../../components/wait_panel';

const CreateDeployment = () => {
  const router = useRouter();
  const { euiTheme } = useEuiTheme();
  const [creating, setIsCreating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //this is a hack for the superselect loading error on local
  useEffect(() => {
    setIsLoading(false);
  }, []);

  const formStyles = css`
    .euiFormLabel.euiFormControlLayout__prepend {
      width: 180px;
    }
  `;

  const advancedSettingsIcon = css`
    .euiButtonIcon,
    .euiButtonIcon.euiAccordion__iconButton-isOpen {
      color: ${euiTheme.colors.primary};
    }
  `;

  const PROVIDER = [
    {
      value: 'google',
      inputDisplay: (
        <EuiFlexGroup alignItems="center" gutterSize="s">
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
        <EuiFlexGroup alignItems="center" gutterSize="s">
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
      value: 'optimized',
      inputDisplay: <p>Storage optimized</p>,
    },
  ];

  const VERSION = [
    {
      value: 'latest',
      inputDisplay: <p>8.5.2 (latest)</p>,
    },
  ];

  return (
    <>
      <Navbar
        isCloud
        breadcrumbs={[
          {
            text: 'Cloud',
            href: '/ic-2/cloud',
          },
          {
            text: 'Deployments',
            href: 'list',
          },
          {
            text: 'Create',
          },
        ]}
      />
      <EuiSpacer size="xxl" />
      {creating ? (
        <WaitPanel solution={router.query.solution} />
      ) : (
        <EuiPanel
          paddingSize="none"
          css={css`
            max-width: 800px;
            width: 100%;
            margin: auto;
          `}>
          <div
            css={css`
              padding: 40px 48px;
            `}>
            <EuiTitle size="l">
              <h1>Create a deployment</h1>
            </EuiTitle>
            <EuiSpacer size="s" />
            <EuiText color="subdued" size="s">
              <p>
                In a deployment, find all the capabilities you need to integrate
                your data, and solve your search, observability and security
                challenges.
              </p>
            </EuiText>
            <EuiHorizontalRule />
            <EuiSpacer size="s" />

            <EuiTitle size="s">
              <h4>Name</h4>
            </EuiTitle>
            <EuiSpacer size="s" />
            <EuiFieldText fullWidth placeholder="My deployment" />

            <EuiSpacer size="l" />
            {!isLoading && (
              <EuiFlexGroup
                justifyContent="spaceBetween"
                direction="column"
                gutterSize="m">
                <EuiFlexItem grow={2}>
                  <EuiTitle size="s">
                    <h4>Settings</h4>
                  </EuiTitle>
                </EuiFlexItem>
                <EuiFlexItem css={formStyles}>
                  <EuiSuperSelect
                    id="provider"
                    options={PROVIDER}
                    value="google"
                    prepend="Cloud provider"
                    fullWidth
                  />
                </EuiFlexItem>
                <EuiFlexItem css={formStyles}>
                  <EuiSuperSelect
                    id="Region"
                    options={REGION}
                    value="Iowa"
                    prepend="Region"
                    fullWidth
                  />
                </EuiFlexItem>
                <EuiFlexItem css={formStyles}>
                  <EuiSuperSelect
                    id="Hardware"
                    options={HARDWARE}
                    value="optimized"
                    prepend="Hardware profile"
                    fullWidth
                  />
                </EuiFlexItem>
                <EuiFlexItem css={formStyles}>
                  <EuiSuperSelect
                    id="Version"
                    options={VERSION}
                    value="latest"
                    prepend="Version"
                    fullWidth
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiSpacer size="m" />
                  <EuiAccordion
                    id="advancedSettings"
                    buttonContent={
                      <EuiTextColor color={euiTheme.colors.primary}>
                        Advanced Settings
                      </EuiTextColor>
                    }
                    css={advancedSettingsIcon}>
                    <EuiSpacer size="m" />
                    <p>Show advanced settings...</p>
                  </EuiAccordion>
                </EuiFlexItem>
              </EuiFlexGroup>
            )}
          </div>
          <EuiPanel
            css={css`
              border-radius: 0 !important;
              box-shadow: rgba(0, 0, 0, 0.1) 0 0 12px !important;
              padding: 16px 48px !important;
              text-align: right;
            `}>
            <EuiFlexGroup justifyContent="space-between">
              <EuiFlexItem>
                {/* <EuiButtonGroup
                name="price"
                legend="This is a basic group"
                options={[
                  {
                    id: 'hourly',
                    label: 'Hourly',
                  },
                  {
                    id: 'monthly',
                    label: 'Monthly',
                  },
                ]}
                idSelected={toggleCompressedIdSelected}
                onChange={id => onChangeCompressed(id)}
                buttonSize="compressed"
              /> */}
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButton fill onClick={() => setIsCreating(true)}>
                  Create deployment
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiPanel>
      )}
    </>
  );
};

export default CreateDeployment;
