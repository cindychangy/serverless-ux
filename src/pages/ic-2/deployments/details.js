/** @jsxImportSource @emotion/react */
import {
  EuiSpacer,
  EuiButton,
  EuiBetaBadge,
  EuiHorizontalRule,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiLink,
  EuiCode,
  EuiButtonIcon,
  EuiFieldText,
  EuiTitle,
  EuiFilterGroup,
  EuiFilterButton,
  EuiCard,
  EuiSkeletonText,
  EuiIcon,
} from '@elastic/eui';
import { useRouter } from 'next/router';
import CloudSubPageLayout from '../../../layouts/cloud/sub_page';
import { css } from '@emotion/react';

const DeploymentDetailPage = () => {
  const router = useRouter();
  const DEPLOYMENT_TITLE = router.query.projectTitle;

  const instanceCard = css`
    background: #f5f7fa;
    width: 100%;
    padding: 40px;
  `;

  const BREADCRUMBS = [
    {
      text: 'Cloud',
      href: '/ic-2/cloud',
    },
    {
      text: 'Deployments',
      href: 'list',
    },
    {
      text: DEPLOYMENT_TITLE ? DEPLOYMENT_TITLE : 'My project',
    },
  ];

  const SIDE_NAV = [
    {
      name: 'Deployments',
      id: 'deployments',
      isSelected: false,
      onClick: () => router.push('/ic-2/deployments/list'),
    },
    {
      name: 'Projects',
      id: 'projects',
      isSelected: false,
      onClick: () => router.push('/ic-2/projects/list'),
      items: [
        {
          name: DEPLOYMENT_TITLE ? DEPLOYMENT_TITLE : 'My deployment',
          id: 'access-logs',
          isSelected: true,
          onClick: () => router.push('#'),
          forceOpen: true,
          items: [
            {
              name: 'Ingest data',
              id: 'ingest-data',
              isSelected: false,
              onClick: () => router.push('#'),
            },
            {
              name: 'Performance',
              id: 'performance',
              isSelected: false,
              onClick: () => router.push('#'),
            },
            {
              name: 'Security',
              id: 'security',
              isSelected: false,
              onClick: () => router.push('#'),
            },
          ],
        },
      ],
    },
  ];

  const PROJECT_ENDPOINTS = [
    {
      title: 'Elasticsearch',
      clusterLink: true,
    },
    {
      title: 'Kibana',
      openLink: true,
    },
    {
      title: 'APM',
      openLink: true,
    },
    {
      title: 'FLeet',
      openLink: true,
    },
    {
      title: 'Enterprise Search',
    },
  ];

  return (
    <CloudSubPageLayout
      pageTitle={DEPLOYMENT_TITLE ? DEPLOYMENT_TITLE : 'My project'}
      breadcrumbs={BREADCRUMBS}
      navItems={SIDE_NAV}
      headerActions={[
        <EuiButton fill iconType="arrowDown" iconSide="right">
          Actions
        </EuiButton>,
        <EuiButton>Open Kibana</EuiButton>,
      ]}>
      <EuiSpacer size="l" />
      <EuiFlexGroup alignItems="center">
        <EuiFlexItem grow={false}>
          <EuiBetaBadge
            label="HEALTHY"
            css={css`
              background: #6dccb1;
              padding: 2px 12px;
              box-shadow: none;
            `}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiText size="s" color="subdued">
            GCP - Iowa (us-central1)
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiText size="s" color="subdued">
            Deployment ID e606ea
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiButtonIcon
            color="primary"
            onClick={() => {}}
            iconType="copy"
            aria-label="Copy"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiHorizontalRule />
      <EuiSpacer size="xxl" />
      <EuiFlexGroup justifyContent="spaceBetween">
        <EuiFlexItem grow={2}>
          <EuiText size="xs">
            <strong>Deployment name</strong>
          </EuiText>
          <EuiSpacer size="s" />
          <EuiFlexGroup alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiFieldText
                value={DEPLOYMENT_TITLE ? DEPLOYMENT_TITLE : 'My deployment'}
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiLink href="#">Edit</EuiLink>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>

        <EuiFlexItem grow={1}>
          <EuiText size="xs">
            <strong>Custom endpoint alias</strong>
          </EuiText>
          <EuiFlexGroup alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiText size="s">
                {DEPLOYMENT_TITLE ? DEPLOYMENT_TITLE : 'My deployment'}-e606ea
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiLink href="#">Edit</EuiLink>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>

        <EuiFlexItem grow={1}>
          <EuiText size="xs">
            <strong>Deployment version</strong>
          </EuiText>
          <EuiFlexGroup alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiText size="s">v8.6.1</EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiLink href="#">Upgrade</EuiLink>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="xxl" />

      <EuiFlexGroup justifyContent="spaceBetween" alignItems="flexStart">
        <EuiFlexItem grow={2}>
          <EuiText size="xs">
            <strong>Applications</strong>
          </EuiText>
          <EuiSpacer size="l" />
          {PROJECT_ENDPOINTS.map(detail => (
            <EuiFlexGroup key={detail.content}>
              <EuiFlexItem
                grow={false}
                css={css`
                  width: 180px;
                `}>
                <EuiText size="s">
                  <strong>{detail.title}</strong>
                </EuiText>
                <EuiSpacer size="s" />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiLink href="#">Copy endpoint</EuiLink>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiLink href="#">
                  {!detail.clusterLink ? 'Copy component ID' : 'Copy cluser ID'}
                </EuiLink>
              </EuiFlexItem>
              {detail.openLink && (
                <EuiFlexItem grow={false}>
                  <EuiLink href="#">Open</EuiLink>
                </EuiFlexItem>
              )}
            </EuiFlexGroup>
          ))}
        </EuiFlexItem>
        <EuiFlexItem grow={1}>
          <EuiText size="xs">
            <strong>Hardware profile</strong>
          </EuiText>
          <EuiSpacer size="m" />
          <EuiFlexGroup alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiText size="s">Storage optimized</EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiLink href="#">Edit</EuiLink>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
        <EuiFlexItem grow={1}>
          <EuiText size="xs">
            <strong>Cloud ID</strong>
          </EuiText>
          <EuiSpacer size="l" />
          <EuiCode
            css={css`
              width: 295px;
              line-height: 1.3;
              padding: 10px;
            `}>
            test:dXMtZWFzdC0xLmF3cy5mb3VuZC5pbyQ
            <br />
            yZjNkMmVhOGViZmI0Y2NmOGE5Y2EzZTEyZTJ
            <br />
            mMTAxMCQyNjliZTFmY2E1MTI0ZjJmODRiMjN
            <br />
            jNTRmZmEzMjkyOQ==
          </EuiCode>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="xxl" />
      <EuiFlexGroup direction="column">
        <EuiFlexItem>
          <EuiText size="xs">
            <strong>Tags</strong>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiLink href="#">Add tags</EuiLink>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="m" />
      <EuiSpacer size="xxl" />
      <EuiFlexGroup justifyContent="spaceBetween">
        <EuiFlexItem>
          <EuiTitle size="s">
            <h4>Instances</h4>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiFilterGroup>
            <EuiFilterButton
              hasActiveFilters={false}
              onClick={() => {}}
              iconType="arrowDown">
              Health
            </EuiFilterButton>
            <EuiFilterButton
              hasActiveFilters={false}
              onClick={() => {}}
              iconType="arrowDown">
              Instance Configuration
            </EuiFilterButton>
            <EuiFilterButton
              hasActiveFilters={false}
              onClick={() => {}}
              iconType="arrowDown">
              Data tier
            </EuiFilterButton>
          </EuiFilterGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="m" />

      <EuiFlexGroup>
        <EuiFlexItem>
          <div css={instanceCard}>
            <EuiCard
              title={
                <EuiFlexGroup alignItems="center" gutterSize="s">
                  <EuiFlexItem grow={false}>
                    <EuiIcon type="logoElasticsearch" size="m" />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiText>
                      <strong>Instance #1</strong>
                    </EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
              }
              textAlign="left">
              <EuiSkeletonText
                lines={2}
                size="s"
                contentAriaLabel="dummy text"
              />
              <EuiSpacer size="m" />
              <EuiSkeletonText
                lines={3}
                size="s"
                contentAriaLabel="dummy text"
              />
            </EuiCard>
            <EuiSpacer size="m" />
            <EuiCard
              title={
                <EuiFlexGroup alignItems="center" gutterSize="s">
                  <EuiFlexItem grow={false}>
                    <EuiIcon type="logoEnterpriseSearch" size="m" />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiText>
                      <strong>Instance #0</strong>
                    </EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
              }
              textAlign="left">
              <EuiSkeletonText
                lines={2}
                size="s"
                contentAriaLabel="dummy text"
              />
            </EuiCard>
          </div>
        </EuiFlexItem>

        <EuiFlexItem>
          <div css={instanceCard}>
            <EuiCard
              title={
                <EuiFlexGroup alignItems="center" gutterSize="s">
                  <EuiFlexItem grow={false}>
                    <EuiIcon type="logoElasticsearch" size="m" />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiText>
                      <strong>Tiebreaker #2</strong>
                    </EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
              }
              textAlign="left">
              <EuiSkeletonText
                lines={2}
                size="s"
                contentAriaLabel="dummy text"
              />
              <EuiSpacer size="m" />
              <EuiSkeletonText
                lines={3}
                size="s"
                contentAriaLabel="dummy text"
              />
            </EuiCard>
            <EuiSpacer size="m" />
            <EuiCard
              title={
                <EuiFlexGroup alignItems="center" gutterSize="s">
                  <EuiFlexItem grow={false}>
                    <EuiIcon type="logoObservability" size="m" />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiText>
                      <strong>Instance #0</strong>
                    </EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
              }
              textAlign="left">
              <EuiSkeletonText
                lines={2}
                size="s"
                contentAriaLabel="dummy text"
              />
            </EuiCard>
          </div>
        </EuiFlexItem>

        <EuiFlexItem>
          <div css={instanceCard}>
            <EuiCard
              title={
                <EuiFlexGroup alignItems="center" gutterSize="s">
                  <EuiFlexItem grow={false}>
                    <EuiIcon type="logoElasticsearch" size="m" />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiText>
                      <strong>Instance #0</strong>
                    </EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
              }
              textAlign="left">
              <EuiSkeletonText
                lines={2}
                size="s"
                contentAriaLabel="dummy text"
              />
              <EuiSpacer size="m" />
              <EuiSkeletonText
                lines={3}
                size="s"
                contentAriaLabel="dummy text"
              />
            </EuiCard>
            <EuiSpacer size="m" />
            <EuiCard
              title={
                <EuiFlexGroup alignItems="center" gutterSize="s">
                  <EuiFlexItem grow={false}>
                    <EuiIcon type="logoKibana" size="m" />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiText>
                      <strong>Instance #0</strong>
                    </EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
              }
              textAlign="left">
              <EuiSkeletonText
                lines={2}
                size="s"
                contentAriaLabel="dummy text"
              />
            </EuiCard>
          </div>
        </EuiFlexItem>
      </EuiFlexGroup>
    </CloudSubPageLayout>
  );
};

export default DeploymentDetailPage;
