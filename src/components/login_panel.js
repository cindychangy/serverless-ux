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

const LoginPanel = ({ route }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = route => {
    setIsLoading(true);
    setTimeout(() => {
      router.push(route);
    }, 400);
  };

  return (
    <div
      css={css`
        padding: 0 40px;
        margin: auto;
        position: relative;
      `}>
      <EuiFlexGroup
        direction="row"
        justifyContent="center"
        alignItems="flexStart">
        <EuiFlexItem grow={false}>
          <EuiPanel
            paddingSize="l"
            css={css`
              width: 430px;
            `}>
            <div
              css={css`
                padding: 0 8px;
              `}>
              <EuiSpacer size="s" />
              <EuiTitle size="s">
                <EuiTextAlign textAlign="center">
                  <h1>Log in</h1>
                </EuiTextAlign>
              </EuiTitle>
              <EuiSpacer size="xl" />
              <EuiFormRow label="Email" id="email">
                <EuiFieldText icon="user" fullWidth />
              </EuiFormRow>
              <EuiSpacer size="l" />
              <EuiFormRow label="Password" id="password">
                <EuiFieldPassword type="dual" fullWidth />
              </EuiFormRow>
              <EuiSpacer size="l" />
              <EuiButton
                fill
                fullWidth
                isLoading={isLoading}
                onClick={() => handleClick(route)}>
                Log in
              </EuiButton>
              <EuiSpacer size="m" />
              <div
                css={css`
                  text-align: center;
                `}>
                <EuiButtonEmpty href="#">Forgot password?</EuiButtonEmpty>
              </div>
              <EuiFlexGroup
                alignItems="center"
                gutterSize="s"
                responsive={false}>
                <EuiFlexItem>
                  <EuiHorizontalRule />
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiText color="subdued" size="s">
                    Or log in with
                  </EuiText>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiHorizontalRule />
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiFlexGroup gutterSize="s" responsive={false}>
                <EuiFlexItem>
                  <EuiButton iconSide="left" iconType="/images/icon-google.svg">
                    Google
                  </EuiButton>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiButton
                    iconSide="left"
                    iconType="/images/icon-microsoft.svg">
                    Microsoft
                  </EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
            </div>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
};

export default LoginPanel;
