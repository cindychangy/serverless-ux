/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiButton,
  EuiSpacer,
  EuiBadge,
  EuiFlexGroup,
  EuiFlexItem,
  EuiTextAlign,
  EuiHorizontalRule,
  EuiText,
  EuiIcon,
  EuiTitle,
  EuiCard,
} from '@elastic/eui';

import Navbar from '../../../components/navbar';
import { SOLUTION_CARDS } from '../../../constants/cards';

const SetupFromProjectList = () => {
  const router = useRouter();

  const cardContainer = css`
    position: relative;
    .euiCard__content {
      padding: 10px 20px;
    }
  `;

  const badgeStyle = css`
    position: absolute;
    top: 10px;
    right: 10px;
  `;

  return (
    <>
      <Navbar
        isCloud
        icNumber="2"
        breadcrumbs={[
          {
            text: 'Cloud',
            href: '/ic-april/cloud',
          },
          {
            text: 'Create',
          },
        ]}
      />
      <div
        css={css`
          max-width: 740px;
          margin: 80px auto 0 auto;
          width: 100%;
        `}>
        <EuiTextAlign textAlign="center">
          <EuiTitle size="s">
            <h1>What do you want to do with Elastic?</h1>
          </EuiTitle>
        </EuiTextAlign>
        <EuiSpacer size="xxl" />

        <EuiFlexGroup justifyContent="center" gutterSize="m">
          {SOLUTION_CARDS.map(card => (
            <EuiFlexItem key={card.title}>
              <EuiCard
                paddingSize="none"
                css={cardContainer}
                title={
                  <>
                    <EuiSpacer size="s" />
                    <EuiIcon type={card.logo} size="m" />
                    <div>{card.title}</div>
                  </>
                }
                titleElement="h4"
                titleSize="xs">
                <EuiBadge color="warning" css={badgeStyle}>
                  <small>BETA</small>
                </EuiBadge>
                <EuiHorizontalRule margin="xs" />
                <EuiSpacer size="xs" />
                <EuiTextAlign align="left">
                  <EuiText size="s">
                    <p>{card.description}</p>
                  </EuiText>
                  <EuiSpacer size="m" />
                  <EuiText size="xs">
                    <h4>Includes:</h4>
                  </EuiText>
                  <EuiText size="s">
                    <p>{card.features}</p>
                  </EuiText>
                </EuiTextAlign>

                <EuiSpacer size="s" />
                <EuiButton
                  fullWidth
                  size="s"
                  onClick={() =>
                    router.push(
                      {
                        pathname: 'create-project',
                        query: {
                          solution: card.solution,
                        },
                      },
                      'create-project'
                    )
                  }>
                  Next
                </EuiButton>
              </EuiCard>
            </EuiFlexItem>
          ))}
        </EuiFlexGroup>
      </div>
    </>
  );
};

export default SetupFromProjectList;
