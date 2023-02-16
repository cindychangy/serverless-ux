/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiButton,
  EuiSpacer,
  EuiHorizontalRule,
  EuiSkeletonText,
  EuiBadge,
  EuiAccordion,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiCard,
  EuiTitle,
} from '@elastic/eui';

import Navbar from '../../components/navbar';
import { PROJECT_SERVERLESS, PROJECT_CLASSIC } from '../../constants/global';
import { SOLUTION_CARDS } from '../../constants/solution-cards';

const ProjectSetupMin = () => {
  const router = useRouter();
  const [projectType, setProjectType] = useState(undefined);
  const [solution, setSolution] = useState(undefined);
  const [accordionTrigger, setAccordionTrigger] = useState('closed');

  const cardContainer = css`
    .euiCard__content {
      text-align: left;
      padding: 10px 20px;
    }
    button {
      border-top-right-radius: 0 !important;
      border-top-left-radius: 0 !important;
      block-size: 28px;
      font-size: 13px;
    }
  `;

  const showProjectDetails = userSelection => {
    setSolution(userSelection);

    if (userSelection) {
      setAccordionTrigger('open');
    }
  };

  return (
    <>
      <Navbar
        isCloud
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
          max-width: 800px;
          margin: auto;
          width: 100%;
        `}>
        <EuiSpacer size="xxl" />
        <EuiSpacer size="xxl" />
        <EuiFlexGroup gutterSize="m">
          {SOLUTION_CARDS.map(card => (
            <EuiFlexItem key={card.title}>
              <EuiCard
                paddingSize="none"
                css={cardContainer}
                selectable={{
                  onClick: () => showProjectDetails(card.solution),
                  isSelected: solution === card.solution,
                }}
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
                <EuiSpacer size="s" />
              </EuiCard>
            </EuiFlexItem>
          ))}
        </EuiFlexGroup>

        <EuiSpacer size="xl" />
        <EuiHorizontalRule margin="m" />
        <EuiFlexGroup justifyContent="flexEnd">
          <EuiFlexItem grow={false}>
            <EuiButton
              fill
              isDisabled={solution === undefined && true}
              onClick={() => router.push('/ic-2/create-project')}>
              Next
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </>
  );
};

export default ProjectSetupMin;
