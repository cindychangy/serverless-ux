/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiText,
  EuiButton,
} from '@elastic/eui';

const Header = ({ accountType, signedIn }) => {
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
          <EuiFlexGroup justifyContent="flexEnd" alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiButton minWidth={0} fill>
                Log out
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
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
                  login
                    ? () => handleClick('/8.6/signup')
                    : () => handleClick('/8.6')
                }>
                {login ? 'Sign up' : 'Log in'}
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        )}
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
      </div>
    </>
  );
};

export default Header;
