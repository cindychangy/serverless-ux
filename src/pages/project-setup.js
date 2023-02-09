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
  EuiFieldText,
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
      <Header signedIn />
      <div
        css={css`
          max-width: 800px;
          margin: auto;
          width: 100%;
        `}>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiCard>Dedicated</EuiCard>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiCard>Serverless</EuiCard>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </>
  );
};

export default ProjectSetup;
