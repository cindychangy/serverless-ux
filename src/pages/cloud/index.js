/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiTitle,
  EuiPanel,
  EuiText,
  EuiSpacer,
  EuiImage,
  EuiLink,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';
import Navbar from '../../components/navbar';

const CloudHomepage = () => {
  const router = useRouter();

  return (
    <>
      <Navbar
        isCloud
        breadcrumbs={[
          {
            text: 'Cloud',
          },
        ]}
      />
      <div
        css={css`
          margin: auto;
          max-width: 1600px;
          width: 100%;
        `}>
        <EuiSpacer size="xl" />
        <EuiFlexGroup gutterSize="l">
          <EuiFlexItem grow={2}>
            <EuiPanel>Cloud panel</EuiPanel>
          </EuiFlexItem>
          <EuiFlexItem grow={1}>
            <EuiPanel>Cloud panel</EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </>
  );
};

export default CloudHomepage;
