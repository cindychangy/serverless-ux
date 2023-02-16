/** @jsxImportSource @emotion/react */
import { useState } from 'react';
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
  EuiComboBox,
  EuiImage,
} from '@elastic/eui';

import Navbar from '../../components/navbar';

const OPTIONS_PROVIDER = [
  {
    label: 'Google',
  },
];

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

const CreateDeployment = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

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
            text: 'Projects',
            href: 'projects',
          },
          {
            text: 'Create',
          },
        ]}
      />
      <EuiSpacer size="xxl" />
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
              In a project, find all the capabilities you need to integrate your
              data, and solve your search, observability
              <br /> and security challenges.
            </p>
          </EuiText>
          <EuiHorizontalRule />
          <EuiSpacer size="s" />

          <EuiTitle size="s">
            <h4>Name</h4>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiFieldText fullWidth placeholder="My fully managed project" />

          <EuiSpacer size="l" />
          <EuiFlexGroup justifyContent="spaceBetween" direction="column">
            <EuiFlexItem grow={2}>
              <EuiTitle size="s">
                <h4>Settings</h4>
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiComboBox
                prepend="Cloud provider"
                singleSelection={{ asPlainText: true }}
                options={OPTIONS_PROVIDER}
                fullWidth
                // selectedOptions={selectedOptions}
                // onChange={onChange}
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiComboBox
                prepend="Region"
                singleSelection={{ asPlainText: true }}
                options={OPTIONS_PROVIDER}
                // selectedOptions={selectedOptions}
                // onChange={onChange}
                fullWidth
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </div>
        <EuiPanel
          css={css`
            border-radius: 0 !important;
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 12px !important;
            padding: 16px 48px !important;
            text-align: right;
          `}>
          <EuiButton fill isLoading={isLoading} onClick={() => router.push('')}>
            Create deployment
          </EuiButton>
        </EuiPanel>
      </EuiPanel>
    </>
  );
};

export default CreateDeployment;
