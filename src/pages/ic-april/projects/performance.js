/** @jsxImportSource @emotion/react */
/* eslint-disable @next/next/no-img-element */
import {
  EuiSpacer,
  EuiSwitch,
  EuiHorizontalRule,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiLink,
  EuiTitle,
} from '@elastic/eui';
import { useRouter } from 'next/router';
import CloudSubPageLayout from '../../../layouts/cloud/subpage';
import { css } from '@emotion/react';

const PerformancePage = () => {
  const router = useRouter();
  const PROJECT_TITLE = router.query.projectTitle;

  const BREADCRUMBS = [
    {
      text: 'Cloud',
      href: '/ic-april/cloud',
    },
    {
      text: 'Projects',
      href: 'list',
    },
    {
      text: PROJECT_TITLE ? PROJECT_TITLE : 'My project',
    },
  ];

  const SIDE_NAV = [
    {
      name: 'Deployments',
      id: 'deployments',
      isSelected: false,
      onClick: () => router.push('/ic-april/deployments/list'),
    },
    {
      name: 'Projects',
      id: 'projects',
      isSelected: false,
      onClick: () => router.push('/ic-april/projects/list'),
      items: [
        {
          name: PROJECT_TITLE ? PROJECT_TITLE : 'My project',
          id: 'my-project',
          isSelected: false,
          onClick: () =>
            router.push(
              {
                pathname: 'details',
                query: {
                  projectTitle: PROJECT_TITLE,
                },
                shallow: true,
              },
              'details'
            ),
          forceOpen: true,
          items: [
            {
              name: 'Ingest data',
              id: 'ingest-data',
              isSelected: false,
              onClick: () =>
                router.push(
                  {
                    pathname: 'ingest-data',
                    query: {
                      projectTitle: PROJECT_TITLE,
                    },
                    shallow: true,
                  },
                  'injest-data'
                ),
            },
            {
              name: 'Performance',
              id: 'performance',
              isSelected: true,
            },
            {
              name: 'Security',
              id: 'security',
              isSelected: false,
              onClick: () =>
                router.push(
                  {
                    pathname: 'security',
                    query: {
                      projectTitle: PROJECT_TITLE,
                    },
                    shallow: true,
                  },
                  'security'
                ),
            },
          ],
        },
      ],
    },
  ];

  return (
    <CloudSubPageLayout
      pageTitle="Performance"
      breadcrumbs={BREADCRUMBS}
      navItems={SIDE_NAV}>
      <EuiHorizontalRule />

      <EuiTitle size="s">
        <h4>Search performance</h4>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiText size="s">
        <p>
          See how your project has performed based on current search power
          settings
        </p>
      </EuiText>
      <img
        src="/images/chart.png"
        alt="chart"
        width="550"
        css={css`
          margin-left: -15px;
        `}
      />

      <EuiSpacer size="xl" />
      <EuiSpacer size="xxl" />
      <EuiTitle size="s">
        <h4>Search autoscaling</h4>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiText size="s">
        <p>Search capacity is automatically scaled as your workload changes</p>
      </EuiText>
      <EuiSpacer size="xl" />
      <EuiFlexGroup
        alignContent="center"
        css={css`
          max-width: 800px;
        `}>
        <EuiFlexItem grow={1}>
          <EuiTitle size="xxs">
            <h5>Maximum autoscaling threshold</h5>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={1}>
          <EuiSwitch label="Enabled" checked onChange={() => {}} />
        </EuiFlexItem>
        <EuiFlexItem grow={1}>
          <EuiLink href="#">Advanced controls</EuiLink>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="xl" />
      <EuiSpacer size="xxl" />
      <EuiTitle size="s">
        <h4>Cost</h4>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiText size="s">
        <p>
          See how your project has performed based on current search power
          settings
        </p>
      </EuiText>
      <EuiSpacer size="xl" />
      <EuiText>
        <p>
          Go to <a href="#">Billing</a> to see your project costs on current
          search power settings
        </p>
      </EuiText>
    </CloudSubPageLayout>
  );
};

export default PerformancePage;
