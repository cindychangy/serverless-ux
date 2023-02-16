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
import Header from '../../components/header';
import LoginPanel from '../../components/login_panel';

const LoginPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/cloud');
    }, 1000);
  };

  return (
    <>
      <Header accountType="login" />
      <LoginPanel route="/cloud" />
    </>
  );
};

export default LoginPage;
