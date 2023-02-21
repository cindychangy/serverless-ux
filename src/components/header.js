/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiText,
  EuiButton,
  EuiTitle,
  EuiStepsHorizontal,
  EuiSpacer,
  useEuiTheme,
} from '@elastic/eui';

const Header = ({ accountType, signedIn, steps, logoLarge }) => {
  const { euiTheme } = useEuiTheme();
  const stepStyles = css`
    .euiStepNumber {
      width: 24px;
      height: 24px;
      line-height: 24px;
      font-size: 12px;
    }

    .euiStepHorizontal__title {
      font-weight: ${euiTheme.font.weight.semiBold};
    }
  `;

  const router = useRouter();
  const login = accountType === 'login';

  const handleClick = route => {
    setTimeout(() => {
      router.push(route);
    }, 1000);
  };

  return (
    <>
      <div
        css={css`
          margin: 35px 30px 40px 30px;
          position: relative;
        `}>
        {signedIn ? (
          <div></div>
        ) : (
          <EuiFlexGroup justifyContent="flexEnd" alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiText textAlign="right" size="s">
                {login ? "Don't have an account?" : 'Already have an account? '}
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton
                fill
                size="s"
                minWidth={0}
                onClick={
                  login ? () => handleClick('/signup') : () => handleClick('/')
                }>
                {login ? 'Sign up' : 'Log in'}
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        )}
        {logoLarge ? (
          <EuiImage
            size={170}
            src={'/images/logo-elastic.png'}
            alt="Elastic logo"
            css={css`
              position: absolute;
              left: 50%;
              transform: translate(-50%, -85%);
            `}
          />
        ) : (
          <EuiImage
            size={100}
            src={'/images/logo-elastic.png'}
            alt="Elastic logo"
            css={css`
              position: absolute;
              left: 10px;
              top: 0;
            `}
          />
        )}

        {steps && (
          <div
            css={css`
              text-align: center;
              margin-top: -10px;
            `}>
            <EuiTitle size="l">
              <h1>Get started with Elastic</h1>
            </EuiTitle>
            <EuiSpacer size="m" />
            <div
              css={css`
                max-width: 300px;
                margin: auto;
              `}>
              <EuiStepsHorizontal
                steps={steps}
                css={stepStyles}
                onClick={() => handleClick}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
