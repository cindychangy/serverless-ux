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
    <div
      css={css`
        position: relative;
        height: 100vh;
      `}>
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
          <p>Select a checkpoint below to see the flow</p>
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
              {/* <h5>Flows</h5> */}
            </EuiText>
            <EuiSpacer size="s" />
            <EuiText css={flowLink}>
              <h4>
                <EuiLink href="/ic-april/login">
                  IC April - Private Preview
                </EuiLink>
              </h4>
            </EuiText>
            <EuiSpacer size="s" />
            <EuiText css={flowLink}>
              <h4
                css={css`
                  color: #c9c9cb !important;
                  font-weight: 500 !important;
                `}>
                {/* <EuiLink href="/ic-3/trial/b/signup">
                  Gated Public Preview - IC #3 (WIP)
                </EuiLink> */}
                IC June - Gated Public Preview
              </h4>
              {/* <p>Starts a create account</p> */}
            </EuiText>
            <EuiSpacer size="s" />
            <EuiText css={flowLink}>
              <h4
                css={css`
                  color: #c9c9cb !important;
                  font-weight: 500 !important;
                `}>
                IC August - Ungated Public Preview
                {/* <EuiLink href="/ic-3/trial/b/signup">Private Preview</EuiLink> */}
              </h4>
            </EuiText>
            <EuiSpacer size="s" />
            <EuiText css={flowLink}>
              <h4
                css={css`
                  color: #c9c9cb !important;
                  font-weight: 500 !important;
                `}>
                IC October - General Access
                {/* <EuiLink href="/ic-3/trial/b/signup">Private Preview</EuiLink> */}
              </h4>
            </EuiText>

            <EuiSpacer size="s" />
          </EuiPanel>
          <EuiSpacer size="xxl" />
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
