/* eslint-disable @next/next/no-img-element */
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

const IndexPage = () => {
  const router = useRouter();

  const flowLink = css`
    h4 {
      margin-block-end: 0 !important;
      margin-top: 10px;
    }

    p {
      font-size: 13px;
      color: #6b6f7f;
    }
  `;

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div
        css={css`
          position: relative;
          z-index: 2;
          margin-top: 150px;
        `}>
        <EuiImage
          size={140}
          src={'/images/logo-elastic.png'}
          alt="Elastic logo"
          css={css`
            position: absolute;
            left: 50%;
            transform: translate(-50%, -85%);
          `}
        />
        {/* <EuiTitle
          size="m"
          css={css`
            text-align: center;
          `}>
          <h3>Serverless UX Prototype</h3>
        </EuiTitle> */}
        <div
          css={css`
            max-width: 300px;
            margin: 40px auto;
          `}>
          <EuiPanel paddingSize="xl">
            <EuiText
              css={css`
                text-transform: uppercase;
                color: #6b6f7f;
                letter-spacing: 2px;
              `}>
              <h5>Choose your flow</h5>
            </EuiText>
            <EuiSpacer size="s" />
            <EuiText css={flowLink}>
              <EuiLink>
                <h4>New user</h4>
              </EuiLink>
              <p>starts from marketing page</p>
            </EuiText>
            <EuiSpacer size="s" />
            <EuiText css={flowLink}>
              <EuiLink>
                <h4>Existing user</h4>
              </EuiLink>
              <p>starts from login</p>
            </EuiText>

            <EuiSpacer size="m" />
            <EuiText css={flowLink}>
              <EuiLink>
                <h4>Billing admin</h4>
              </EuiLink>
            </EuiText>
            <EuiSpacer size="m" />
            <EuiText css={flowLink}>
              <EuiLink>
                <h4>Org admin</h4>
              </EuiLink>
            </EuiText>
            <EuiSpacer size="m" />
            <EuiText css={flowLink}>
              <EuiLink>
                <h4>Project viewer</h4>
              </EuiLink>
            </EuiText>
          </EuiPanel>
        </div>
      </div>
      <EuiImage
        src={'/images/landing-page-bg.svg'}
        alt="background image"
        size={400}
        css={css`
          position: absolute;
          top: 0;
          left: 0;
        `}
      />
      <EuiImage
        src={'/images/landing-page-bg-2.svg'}
        alt="background image"
        size={400}
        css={css`
          position: absolute;
          bottom: 0;
          right: 0;
        `}
      />
    </div>
  );
};

export default IndexPage;
