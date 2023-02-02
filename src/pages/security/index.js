/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { EuiTitle, EuiSpacer } from '@elastic/eui';
import KibanaLayout from '../../layouts/kibana';

const Security = () => {
  const router = useRouter();

  return (
    <KibanaLayout
      breadcrumbs={[
        {
          text: 'Home',
        },
      ]}>
      <div
        css={css`
          margin: auto;
          max-width: 1200px;
          width: 100%;
          height: 100vh;
        `}>
        <EuiSpacer size="l" />
        <EuiTitle>
          <h1>Security</h1>
        </EuiTitle>
      </div>
    </KibanaLayout>
  );
};

export default Security;
