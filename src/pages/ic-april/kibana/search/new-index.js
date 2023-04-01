/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { EuiButton } from '@elastic/eui';
import KibanaLayout from '../../../../layouts/kibana/page';

const BREADCRUMBS = [
  {
    text: 'Search',
    href: '#',
  },
  {
    text: 'Setup guide',
    href: '../../',
  },
  {
    text: 'Step 1: add data',
  },
];

const SIDEBAR = [
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
        className: 'search-tour-1',
      },
      {
        name: 'Crawlers and connectors',
        id: `search__2`,
      },
      {
        name: 'Data enrichment',
        id: `search__3`,
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
      },
      {
        name: 'Experiences',
        id: `search__5`,
      },
    ],
  },
  {
    name: 'Analytics',
    id: `searchnav__4`,
    items: [
      {
        name: 'Buckets',
        id: `search__6`,
        onClick: () => console.log('clicked'),
        items: [
          {
            name: 'My Ecommerce Store',
            id: '0.1',
          },
          {
            name: 'Overview',
            id: '0.2',
            className: 'search-tour-5',
            isSelected: true,
          },
          {
            name: 'Event Logs',
            id: '0.3',
          },
          {
            name: 'Settings',
            id: '0.4',
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
      },
      {
        name: 'Workplace Search',
        id: `search__8`,
        className: 'search-tour-3',
      },
    ],
  },
];

const NewIndexPage = () => {
  const router = useRouter();
  const [guideOpen, setGuideOpen] = useState(false);

  const handleStep = () => {
    setGuideOpen(!guideOpen);
  };

  return (
    <KibanaLayout
      title="Add data"
      section="Search"
      breadcrumbs={BREADCRUMBS}
      sidebar={SIDEBAR}
      guideOpen={guideOpen}
      stepNumber={1}>
      <EuiButton onClick={handleStep} fill>
        Complete this step
      </EuiButton>
    </KibanaLayout>
  );
};

export default NewIndexPage;
