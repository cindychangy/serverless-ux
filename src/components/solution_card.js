/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import {
  EuiCard,
  EuiBadge,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiTextAlign,
  EuiText,
  EuiSpacer,
  EuiHorizontalRule,
} from '@elastic/eui';
import { css } from '@emotion/react';

const cardContainer = css`
  position: relative;
  .euiCard__content {
    padding: 10px 20px;
  }
  button {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    block-size: 28px;
    font-size: 13px;
  }
`;

const buttonSmall = css`
  button {
    block-size: 21px;
    font-size: 12px;
  }
`;

const badgeStyle = css`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 10px;
`;

const SolutionCard = ({ title, logo, description, features }) => {
  return (
    <EuiCard
      paddingSize="none"
      css={[cardContainer, buttonSmall]}
      // selectable={{
      //   onClick: () => setSolution(card.solution),
      //   isSelected: solution === card.solution,
      // }}
      title={
        <>
          <EuiSpacer size="s" />
          <EuiIcon type={logo} size="m" />
          <div>{title}</div>
        </>
      }
      titleElement="h4"
      titleSize="xs">
      <EuiBadge color="warning" css={badgeStyle}>
        BETA
      </EuiBadge>
      <EuiHorizontalRule margin="s" />
      <EuiSpacer size="s" />
      <EuiTextAlign align="left">
        <EuiText size="s">
          <p>{description}</p>
        </EuiText>
        <EuiSpacer size="m" />
        <EuiText size="xs">
          <h5>INCLUDES:</h5>
        </EuiText>
        <EuiText size="s">
          <p>{features}</p>
        </EuiText>
      </EuiTextAlign>

      <EuiSpacer size="s" />
    </EuiCard>
  );
};

export default SolutionCard;
