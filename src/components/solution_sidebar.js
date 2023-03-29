/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { EuiAvatar, EuiSideNav, EuiSpacer, EuiTitle } from '@elastic/eui';

const SolutionSidebar = ({ stepNumber, section }) => {
  const handleClick = () => {
    console.log('clicked');
  };

  let data;

  if (section === 'Search') {
    data = [
      {
        name: 'Overview',
        id: `searchnav__0`,
      },
      {
        name: 'Content',
        id: `searchnav__1`,
        items: [
          {
            name: 'Indicies',
            id: `search__1`,
            onClick: handleClick,
            className: 'search-tour-1',
          },
          {
            name: 'Crawlers and connectors',
            id: `search__2`,
            onClick: handleClick,
          },
          {
            name: 'Data enrichment',
            id: `search__3`,
            onClick: handleClick,
          },
        ],
      },
      {
        name: 'Search',
        id: `searchnav__3`,
        items: [
          {
            name: 'Engines',
            id: `search__4`,
            onClick: handleClick,
          },
          {
            name: 'Experiences',
            id: `search__5`,
            onClick: handleClick,
          },
        ],
      },
      {
        name: 'Analytics',
        id: `searchnav__4`,
        items: stepNumber === 4 && [
          {
            name: 'Buckets',
            id: `search__6`,
            onClick: handleClick,
            items: [
              {
                name: 'My Ecommerce Store',
                id: '0.1',
                onClick: handleClick,
              },
              {
                name: 'Overview',
                id: '0.2',
                onClick: () => console.log('clicked'),
                className: 'search-tour-5',
                isSelected: true,
              },
              {
                name: 'Event Logs',
                id: '0.3',
                onClick: handleClick,
              },
              {
                name: 'Settings',
                id: '0.4',
                onClick: handleClick,
              },
            ],
          },
        ],
      },
      {
        name: 'Legacy Products',
        id: `searchnav__5`,
        items: [
          {
            name: 'App Search',
            id: `search__7`,
            onClick: handleClick,
          },
          {
            name: 'Workplace Search',
            id: `search__8`,
            className: 'search-tour-3',
            onClick: handleClick,
          },
        ],
      },
    ];
  }

  if (section === 'Observability') {
    data = [
      {
        name: 'Overview',
        id: `observability__0`,
      },
      {
        name: 'Logs',
        id: `observability__1`,
        items: [
          {
            name: 'Stream',
            id: `observability__1`,
            onClick: handleClick,
          },
          {
            name: 'Anomalies',
            id: `observability__2`,
            onClick: handleClick,
          },
          {
            name: 'Categories',
            id: `observability__3`,
            onClick: handleClick,
            className: 'observe-tour-1',
          },
        ],
      },
      {
        name: 'Metrics',
        id: `observability__3`,
        items: [
          {
            name: 'Inventory',
            id: `observability__4`,
            onClick: handleClick,
          },
          {
            name: 'Metrics Explorer',
            id: `observability__5`,
            onClick: handleClick,
          },
        ],
      },
      {
        name: 'APM',
        id: `observability__5`,
        items: [
          {
            name: 'Services',
            id: `observability__7`,
            className: 'observe-tour-2',
            onClick: handleClick,
          },
          {
            name: 'Traces',
            id: `observability__8`,
            onClick: handleClick,
          },
          {
            name: 'Dependencies',
            id: `observability__9`,
            onClick: handleClick,
          },
          {
            name: 'Service Map',
            id: `observability__10`,
            onClick: handleClick,
          },
        ],
      },
      {
        name: 'Services',
        id: `observability__11`,
        items: [
          {
            name: 'Dashboard',
            id: `observability__12`,
            onClick: handleClick,
          },
        ],
      },
    ];
  }

  if (section === 'Monitoring') {
    data = [
      {
        name: 'Get started',
        id: `observability__0`,
      },
      {
        name: 'Dashboards',
        id: `observability__1`,
        items: [
          {
            name: 'Alerts',
            id: `observability__1`,
            onClick: handleClick,
            className: 'observability-tour-1',
          },
          {
            name: 'Rules',
            id: `observability__2`,
            onClick: handleClick,
          },
          {
            name: 'Exception lists',
            id: `observability__3`,
            onClick: handleClick,
          },
        ],
      },
      {
        name: 'Explore',
        id: `observability__3`,
        items: [
          {
            name: 'Hosts',
            id: `observability__4`,
            onClick: handleClick,
          },
          {
            name: 'Network',
            id: `observability__5`,
            onClick: handleClick,
          },
          {
            name: 'Users',
            id: `observability__6`,
            onClick: handleClick,
          },
        ],
      },
      {
        name: 'Investigate',
        id: `observability__5`,
        items: [
          {
            name: 'Timelines',
            id: `observability__7`,
            onClick: handleClick,
          },
          {
            name: 'Cases',
            id: `observability__8`,
            className: 'observability-tour-3',
            onClick: handleClick,
          },
        ],
      },
    ];
  }

  if (section === 'Security') {
    data = [
      {
        name: 'Get started',
        id: `security__0`,
      },
      {
        name: 'Dashboards',
        id: `security__1`,
        items: [
          {
            name: 'Alerts',
            id: `security__1`,
            onClick: handleClick,
            className: 'observability-tour-1',
          },
          {
            name: 'Rules',
            id: `security__2`,
            onClick: handleClick,
          },
          {
            name: 'Exception lists',
            id: `security__3`,
            onClick: handleClick,
          },
        ],
      },
      {
        name: 'Explore',
        id: `security__3`,
        items: [
          {
            name: 'Hosts',
            id: `security__4`,
            onClick: handleClick,
          },
          {
            name: 'Network',
            id: `security__5`,
            onClick: handleClick,
          },
          {
            name: 'Users',
            id: `security__6`,
            onClick: handleClick,
          },
        ],
      },
      {
        name: 'Investigate',
        id: `security__5`,
        items: [
          {
            name: 'Timelines',
            id: `securityy__7`,
            onClick: handleClick,
          },
          {
            name: 'Cases',
            id: `security__8`,
            className: 'observability-tour-3',
            onClick: handleClick,
          },
        ],
      },
    ];
  }

  return (
    <>
      <EuiTitle size="xs">
        <h2>
          <EuiAvatar
            color="plain"
            css={css`
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
              margin-right: 16px;
            `}
            iconType="logoEnterpriseSearch"
            name="Enterprise Search"
            size="m"
          />
          <strong>
            {section === 'Search' ? 'Enterprise Search' : section}
          </strong>
        </h2>
      </EuiTitle>
      <EuiSpacer />
      <EuiSideNav items={data} />
    </>
  );
};

export default SolutionSidebar;
