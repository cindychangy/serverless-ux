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
  EuiHorizontalRule,
} from '@elastic/eui';

const SignupPanel = ({ route }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push(route);
    }, 550);
  };

  return (
    <div
      css={css`
        padding: 0 40px;
        margin: auto;
        position: relative;
      `}>
      <EuiSpacer size="m" />
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
            <EuiTitle size="s">
              <EuiTextAlign textAlign="center">
                <h3>Start your free Elastic Cloud trial</h3>
              </EuiTextAlign>
            </EuiTitle>
            <EuiSpacer size="s" />
            <EuiText color="subdued" size="s">
              <EuiTextAlign textAlign="center">
                <p>No credit card required</p>
              </EuiTextAlign>
            </EuiText>
            <EuiFormRow label="Email">
              <EuiFieldText icon="user" fullWidth />
            </EuiFormRow>
            <EuiFormRow label="Password">
              <EuiFieldText icon="lock" type="dual" fullWidth />
            </EuiFormRow>
            <EuiSpacer size="l" />
            <EuiButton
              fill
              fullWidth
              isLoading={isLoading}
              onClick={() => handleClick(route)}>
              Start free trial
            </EuiButton>
            <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
              <EuiFlexItem>
                <EuiHorizontalRule />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiText color="subdued" size="s">
                  Or sign up with
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
            <EuiSpacer size="m" />
            <EuiText color="subdued" size="xs" textAlign="center">
              <p>
                By signing up, you acknowledge that you&apos;ve read and agree
                to our <a href="https://www.elastic.co">Terms of Service</a>
                &nbsp;and&nbsp;
                <a href="https://www.elastic.co">Privacy Statement</a>.
              </p>
            </EuiText>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
};

export default SignupPanel;
