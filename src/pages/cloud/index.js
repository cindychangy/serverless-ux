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
} from '@elastic/eui';

const CloudHomepage = () => {
  const router = useRouter();

  return (
    <>
      <h1>Cloud Homepage</h1>
    </>
  );
};

export default CloudHomepage;
