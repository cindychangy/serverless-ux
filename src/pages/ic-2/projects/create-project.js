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
} from '@elastic/eui';

import Navbar from '../../../components/navbar';
import WaitPanel from '../../../components/wait_panel';

const CreateProject = () => {
  const router = useRouter();
  const [creating, setIsCreating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //this is a hack for the superselect loading error on local
  useEffect(() => {
    setIsLoading(false);
  }, []);

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
            <EuiImage width={50} src="/images/flag.svg" alt="American flag" />
          </EuiFlexItem>
          <EuiFlexItem grow>
            <p>Iowa (us-central1)</p>
          </EuiFlexItem>
        </EuiFlexGroup>
      ),
    },
  ];

  const formStyles = css`
    .euiFormLabel.euiFormControlLayout__prepend {
      width: 180px;
    }
  `;

  return (
    <>
      <Navbar
        isCloud
        icNumber="2"
        breadcrumbs={[
          {
            text: 'Cloud',
            href: '/ic-2/cloud',
          },
          {
            text: 'Projects',
            href: 'list',
          },
          {
            text: 'Create',
          },
        ]}
      />
      <EuiSpacer size="xxl" />
      {creating ? (
        <WaitPanel solution={router.query.solution} type="project" />
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
              <h1>Create fully-managed project</h1>
            </EuiTitle>
            <EuiSpacer size="s" />
            <EuiText color="subdued" size="s">
              <p>
                In a fully-managed project, get quick access to the tools you
                need to collect and use data to build experiences, monitor your
                services, or protect your systems.
              </p>
            </EuiText>
            <EuiHorizontalRule />
            <EuiSpacer size="s" />

            <EuiTitle size="s">
              <h4>Name</h4>
            </EuiTitle>
            <EuiSpacer size="s" />
            <EuiFieldText fullWidth placeholder="My project" />

            <EuiSpacer size="l" />
            {!isLoading && (
              <EuiFlexGroup justifyContent="spaceBetween" direction="column">
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
            <EuiButton
              fill
              isLoading={isLoading}
              onClick={() => setIsCreating(true)}>
              Create project
            </EuiButton>
          </EuiPanel>
        </EuiPanel>
      )}
    </>
  );
};

export default CreateProject;
