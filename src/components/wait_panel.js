/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import {
  EuiPanel,
  EuiLoadingSpinner,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiHorizontalRule,
  EuiTitle,
  EuiTextAlign,
  EuiText,
  EuiSpacer,
  EuiCode,
  EuiTextColor,
  EuiIcon,
  useEuiTheme,
} from '@elastic/eui';
import { css } from '@emotion/react';

const WaitPanel = ({ type, solution }) => {
  const { euiTheme } = useEuiTheme();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <EuiPanel
      paddingSize="l"
      css={css`
        width: 740px;
        margin: auto;
      `}>
      {type === 'project' ? (
        <>
          <EuiFlexGroup alignItems="center" justifyContent="space-between">
            <EuiFlexItem grow={false}>
              {isLoading && <EuiLoadingSpinner size="l" />}
            </EuiFlexItem>
            <EuiFlexItem grow={2}>
              {isLoading ? (
                <EuiText>
                  <small>Creating your project...</small>
                </EuiText>
              ) : (
                <EuiText>
                  <EuiIcon
                    color={euiTheme.colors.success}
                    type="checkInCircleFilled"
                    css={css`
                      margin-right: 5px;
                    `}
                  />
                  <small>Your project is ready!</small>
                </EuiText>
              )}
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton
                size="s"
                disabled={isLoading ? true : false}
                fill
                onClick={() =>
                  router.push(
                    {
                      pathname: '../guided-setup',
                      query: {
                        solution,
                      },
                    },
                    '../guided-setup'
                  )
                }>
                Continue
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiHorizontalRule />
          <EuiTextAlign textAlign="center">
            <EuiTitle size="s">
              <h3>Project loading screen</h3>
            </EuiTitle>
            {/* <EuiSpacer size="s" />
            <EuiText>
              <small>
                These root credentials are shown only once. <br />
                They provide super user access to your deployment. Keep them
                safe.
              </small>
            </EuiText>
            <EuiSpacer size="xl" />
            <EuiPanel
              color="subdued"
              paddingSize="l"
              css={css`
                max-width: 400px;
                margin: auto;
              `}>
              <EuiTextColor color={euiTheme.colors.accent}>
                Username
              </EuiTextColor>
              <EuiCode
                transparentBackground
                css={css`
                  display: block;
                  color: #000;
                `}>
                elastic
              </EuiCode>
              <EuiSpacer size="xl" />
              <EuiTextColor color={euiTheme.colors.accent}>
                Password
              </EuiTextColor>
              <EuiCode
                transparentBackground
                css={css`
                  display: block;
                  color: #000;
                `}>
                93jfufew73jrjfewiws
              </EuiCode>
              <EuiSpacer size="l" />
            </EuiPanel> */}
          </EuiTextAlign>
          <EuiSpacer size="xxl" />
        </>
      ) : (
        <>
          <EuiFlexGroup alignItems="center" justifyContent="space-between">
            <EuiFlexItem grow={false}>
              {isLoading && <EuiLoadingSpinner size="l" />}
            </EuiFlexItem>
            <EuiFlexItem grow={2}>
              {isLoading ? (
                <EuiText>
                  <small>
                    Creating your deployment (takes about five minutes)
                  </small>
                </EuiText>
              ) : (
                <EuiText>
                  <EuiIcon
                    color={euiTheme.colors.success}
                    type="checkInCircleFilled"
                    css={css`
                      margin-right: 5px;
                    `}
                  />
                  <small>Your deployment is ready!</small>
                </EuiText>
              )}
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton
                size="s"
                disabled={isLoading ? true : false}
                fill
                onClick={() =>
                  router.push(
                    {
                      pathname: '/guided-setup',
                      query: {
                        solution,
                      },
                    },
                    '/guided-setup'
                  )
                }>
                Continue
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiHorizontalRule />
          <EuiTextAlign textAlign="center">
            <EuiTitle size="m">
              <h3>Save the deployment credentials</h3>
            </EuiTitle>
            <EuiSpacer size="s" />
            <EuiText>
              <small>
                These root credentials are shown only once. <br />
                They provide super user access to your deployment. Keep them
                safe.
              </small>
            </EuiText>
            <EuiSpacer size="xl" />
            <EuiPanel
              color="subdued"
              paddingSize="l"
              css={css`
                max-width: 400px;
                margin: auto;
              `}>
              <EuiTextColor color={euiTheme.colors.accent}>
                Username
              </EuiTextColor>
              <EuiCode
                transparentBackground
                css={css`
                  display: block;
                  color: #000;
                `}>
                elastic
              </EuiCode>
              <EuiSpacer size="xl" />
              <EuiTextColor color={euiTheme.colors.accent}>
                Password
              </EuiTextColor>
              <EuiCode
                transparentBackground
                css={css`
                  display: block;
                  color: #000;
                `}>
                93jfufew73jrjfewiws
              </EuiCode>
              <EuiSpacer size="l" />
            </EuiPanel>
          </EuiTextAlign>
          <EuiSpacer size="xxl" />
        </>
      )}
    </EuiPanel>
  );
};

export default WaitPanel;
