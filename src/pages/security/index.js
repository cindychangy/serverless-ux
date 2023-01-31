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
} from '@elastic/eui';
import Header from '../components/header';

const Security = () => {
  const router = useRouter();

  return <h1>Security</h1>;
};

export default Security;
