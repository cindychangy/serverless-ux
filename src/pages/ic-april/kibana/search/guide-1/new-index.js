// /** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { EuiButton } from '@elastic/eui';
import GuideStep from '../../../../../components/guide_step';
import { GuideContext } from '../../../../../context/guide';
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
  const { guideOpen, setGuideOpen, setGuideProgress } =
    useContext(GuideContext);

  const handleStep = () => {
    setGuideOpen(!guideOpen);
    setTimeout(() => {
      setGuideProgress(1);
    }, 1000);
  };

  return (
    <GuideStep
      title="Add data"
      solution="Search"
      breadcrumbs={BREADCRUMBS}
      sidebar={SIDEBAR}
      stepNumber={1}
      guideIndex={0}>
      <EuiButton onClick={handleStep} fill>
        Complete this step
      </EuiButton>
    </GuideStep>
  );
};

export default NewIndexPage;
