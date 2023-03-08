/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiButton,
  EuiSpacer,
  EuiSkeletonText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiTextAlign,
  EuiIcon,
  EuiTitle,
  EuiCard,
} from '@elastic/eui';

import Navbar from '../../../components/navbar';
import { SOLUTION_CARDS } from '../../../constants/solution-cards';
import WipBadge from '../../../components/wip_badge';

const SetupFromProjectList = () => {
  const router = useRouter();

  const cardContainer = css`
    .euiCard__content {
      text-align: left;
      padding: 10px 20px;
    }
    button {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      block-size: 28px;
      font-size: 13px;
    }
  `;

  const buttonRound = css`
    border-radius: 6px !important;
    block-size: 32px !important;
    font-size: 1rem !important;
  `;

  return (
    <>
      <WipBadge />
      <Navbar
        isCloud
        icNumber="2"
        breadcrumbs={[
          {
            text: 'Cloud',
            href: 'cloud',
          },
          {
            text: 'Create',
          },
        ]}
      />
      <div
        css={css`
          max-width: 700px;
          margin: 80px auto 0 auto;
          width: 100%;
        `}>
        <EuiTextAlign textAlign="center">
          <EuiTitle size="s">
            <h1>What do you want to do with Elastic?</h1>
          </EuiTitle>
        </EuiTextAlign>
        <EuiSpacer size="xxl" />

        <EuiFlexGroup justifyContent="center">
          {SOLUTION_CARDS.map(card => (
            <EuiFlexItem key={card.title}>
              <EuiCard
                paddingSize="none"
                css={cardContainer}
                title={
                  <EuiFlexGroup alignItems="center">
                    <EuiFlexItem grow={false}>
                      <EuiIcon type={card.logo} size="m" />
                    </EuiFlexItem>
                    <EuiFlexItem
                      grow={false}
                      css={css`
                        margin-left: -16px;
                      `}>
                      {card.title}
                    </EuiFlexItem>
                  </EuiFlexGroup>
                }
                titleElement="h4"
                titleSize="xs">
                <EuiSpacer size="s" />
                <EuiSkeletonText
                  lines={4}
                  size="xs"
                  contentAriaLabel="dummy text"
                />
                <EuiSpacer size="m" />
                <EuiButton
                  fullWidth
                  css={buttonRound}
                  onClick={() =>
                    router.push(
                      {
                        pathname: 'create-project',
                        query: {
                          solution: card.solution,
                        },
                      },
                      'create-deployment'
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
