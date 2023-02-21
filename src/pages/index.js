/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiPanel,
  EuiText,
  EuiSpacer,
  EuiImage,
  EuiLink,
  useEuiTheme,
} from '@elastic/eui';

const IndexPage = () => {
  const router = useRouter();
  const { euiTheme } = useEuiTheme();

  const flowLink = css`
    h4 {
      margin-block-end: 0 !important;
      margin-top: 10px;

      a {
        font-weight: ${euiTheme.font.weight.bold};
      }
    }

    p {
      font-size: 13px;
      color: ${euiTheme.colors.darkShade};
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
        <div
          css={css`
            margin-top: 60px;
            text-align: center;
            color: ${euiTheme.colors.darkShade};
            font-size: 15px;
          `}>
          <p>Below are relevant flows for each checkpoint</p>
        </div>
        <div
          css={css`
            max-width: 400px;
            margin: 25px auto;
          `}>
          <EuiPanel paddingSize="xl">
            <EuiText
              css={css`
                text-transform: uppercase;
                color: ${euiTheme.colors.darkShade};
                letter-spacing: 2px;
              `}>
              <h5>Integration Checkpoint #2</h5>
            </EuiText>
            <EuiSpacer size="s" />
            <EuiText css={flowLink}>
              <h4>
                <EuiLink href="/ic-2/login">Exisiting users (WIP)</EuiLink>
              </h4>
              <p>Starts at login</p>
            </EuiText>
            <EuiSpacer size="s" />
            {/* <EuiText css={flowLink}>
              <h4>
                <EuiLink href="">Deployment list view</EuiLink>
              </h4>
              <p>Starts at Cloud homepage</p>
            </EuiText> */}
            <EuiSpacer size="s" />
          </EuiPanel>
          <EuiSpacer size="xxl" />
          <EuiPanel paddingSize="xl" color="transparent" hasBorder>
            <EuiText
              css={css`
                text-transform: uppercase;
                color: ${euiTheme.colors.darkShade};
                letter-spacing: 2px;
              `}>
              <h5>Integration Checkpoint #3</h5>
            </EuiText>
            <EuiSpacer size="s" />
            <EuiText css={flowLink}>
              <h4>
                <EuiLink href="/ic-3/trial/signup">Trial user v1 (WIP)</EuiLink>
              </h4>
              <p>Solution led project selection</p>
            </EuiText>
            <EuiSpacer size="s" />
            <EuiText css={flowLink}>
              <h4>
                <EuiLink href="/ic-3/trial/b/signup">
                  Trial user v2 (WIP)
                </EuiLink>
              </h4>
              <p>Project type led selection</p>
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
