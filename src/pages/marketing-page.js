/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiText,
  EuiButton,
  EuiSpacer,
  EuiPanel,
  EuiTextAlign,
  EuiFormRow,
  EuiFieldText,
  EuiFieldPassword,
  EuiHorizontalRule,
  EuiButtonEmpty,
  EuiImage,
} from '@elastic/eui';
import Header from '../components/header';

const Home = () => {
  const router = useRouter();

  return (
    <div style={{ background: '#fff', height: '100vh' }}>
      <div style={{ margin: 'auto', paddingTop: '20px', maxWidth: '1140px' }}>
        <h1>Homepage!</h1>
      </div>

      <EuiHorizontalRule />
    </div>
  );
};

export default Home;
