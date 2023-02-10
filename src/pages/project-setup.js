/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiButton,
  EuiSpacer,
  EuiPanel,
  EuiTitle,
  EuiText,
  EuiHorizontalRule,
  EuiSkeletonTitle,
  EuiSkeletonText,
  EuiBadge,
  EuiStepsHorizontal,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiLink,
  EuiCard,
} from '@elastic/eui';

import Header from '../components/header';

const ProjectSetup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('kibana');
    }, 1500);
  };

  return (
    <>
      <Header
        signedIn
        steps={[
          {
            title: 'About you',
            status: 'complete',
            onClick: () => router.push('profile'),
          },
          {
            title: 'Choose setup',
            status: 'incomplete',
            onClick: () => router.push('projet-setup'),
          },
        ]}
      />
      <div
        css={css`
          max-width: 800px;
          margin: auto;
          width: 100%;
        `}>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiCard textAlign="left" paddingSize="l">
              <EuiTitle size="s">
                <h3>Dedicated</h3>
              </EuiTitle>
              <EuiHorizontalRule margin="s" />
              <EuiSpacer size="s" />
              <EuiSkeletonText
                lines={3}
                size="s"
                contentAriaLabel="dummy text"
              />
            </EuiCard>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiCard textAlign="left" paddingSize="l">
              <EuiTitle size="s">
                <h3>
                  Self Managed
                  <EuiBadge
                    color="accent"
                    style={{ color: '#fff', marginLeft: '5px' }}>
                    BETA
                  </EuiBadge>
                </h3>
              </EuiTitle>
              <EuiHorizontalRule margin="s" />
              <EuiSpacer size="s" />
              <EuiSkeletonText
                lines={3}
                size="s"
                contentAriaLabel="dummy text"
              />
            </EuiCard>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </>
  );
};

export default ProjectSetup;
