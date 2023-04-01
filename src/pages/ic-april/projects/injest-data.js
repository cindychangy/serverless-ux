/** @jsxImportSource @emotion/react */
import {
  EuiSpacer,
  EuiButton,
  EuiButtonEmpty,
  EuiHorizontalRule,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiLink,
  EuiTtitle,
  EuiBadge,
  EuiTitle,
} from '@elastic/eui';
import { useRouter } from 'next/router';
import CloudSubPageLayout from '../../../layouts/cloud/subpage';

const InjestDataPage = () => {
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
              isSelected: true,
            },
            {
              name: 'Performance',
              id: 'performance',
              isSelected: false,
              onClick: () =>
                router.push(
                  {
                    pathname: 'performance',
                    query: {
                      projectTitle: PROJECT_TITLE,
                    },
                    shallow: true,
                  },
                  'performance'
                ),
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
      pageTitle="Injest & data"
      breadcrumbs={BREADCRUMBS}
      navItems={SIDE_NAV}>
      <EuiHorizontalRule />

      <EuiTitle size="s">
        <h4>Ingest</h4>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiText size="s">
        <p>Manage how to transform data and load it to your project</p>
      </EuiText>
      <EuiSpacer size="xl" />
      <EuiFlexGroup direction="column" gutterSize="l">
        <EuiFlexItem>
          <EuiLink href="#">Ingest pipelines</EuiLink>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiLink href="#">Logstash pipelines</EuiLink>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="xl" />
      <EuiSpacer size="xxl" />
      <EuiTitle size="s">
        <h4>Data</h4>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiText size="s">
        <p>Manage data in your project</p>
      </EuiText>
      <EuiSpacer size="xl" />
      <EuiFlexGroup direction="column" gutterSize="l">
        <EuiFlexItem>
          <EuiLink href="#">Index management</EuiLink>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiLink href="#">Index lifecycle policies</EuiLink>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiLink href="#">Transforms</EuiLink>
        </EuiFlexItem>
      </EuiFlexGroup>
    </CloudSubPageLayout>
  );
};

export default InjestDataPage;
