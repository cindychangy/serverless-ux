export const GUIDE_DATA = [
  {
    section: 'Search',
    title: 'Build an application on top of Elasticsearch',
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    // started: false,
    media: '<img src="/images/mock-animation.gif">',
    progress: '3/4 steps complete',
    steps: [
      {
        title: 'Add data',
        description:
          '<ul><li>Select an ingestion method </li><li>Create a new Elasticsearch index.</li><li>Configure your ingestion setting.</li></ul>',
        link: {
          title: 'Getting started with Elastic Enterprise Search',
          url: '#',
        },
        stepPath: 'search/add-data',
        order: 1,
      },
      {
        title: 'Build a search experience',
        description:
          '<p>Learn how you can easily unlock the power of the Elastic search platform to build world-class search experiences for your users, customers, and employees.</p>',
        link: null,
        stepPath: 'search/build',
        order: 2,
      },
      {
        title: 'Optimize your search relevance',
        description:
          '<p style="margin-bottom: 10px;">Take a tour of Elastic’s relevance refinement tools, including</p><ul><li>Relevance and precision tuning</li><li>Adaptive relevance and curations</li><li>Snynonym management</li></ul>',
        link: null,
        stepPath: 'search/optimize',
        order: 3,
      },
      {
        title: 'Review your search analytics',
        description:
          '<p style="margin-bottom: 10px;">Explore recent activity in your search engines, including:</p><ul><li>Recent queries, clicks, and other events</li><li>Popular queries and documents</li><li>Underperforming metrics, like queries with no results</li></ul>',
        link: null,
        stepPath: 'search/review',
        order: 4,
      },
    ],
  },
  {
    section: 'Observability',
    title: 'Monitor logs',
    progress: '2/4 steps complete',
    // cardTitle: 'Observe my data',
    // cardSummary:
    //   'Choose one of our many integrations to bring your data in, and start visualizing it.',
    // cardImage: 'observability.png',
    // static: true,
    // media: null,
    intro:
      'The following steps will help you get started with monitoring. We recommend going in order. ',
    link: null,
    started: false,
    steps: [
      {
        title: 'Monitoring Step 1',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'observability/add-data',
        order: 1,
      },
      {
        title: 'Monitoring Step 2',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'observability/tour',
        order: 2,
      },
      {
        title: 'Monitoring Step 3',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'observability/alert',
        order: 3,
      },
      {
        title: 'Monitoring Step 4',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'observability/do-more',
        order: 4,
      },
    ],
  },
  {
    section: 'Security',
    title: 'Detect threats in my data with SIEM',
    // cardTitle: 'Observe my Kubernetes infrastructure',
    // cardSummary:
    //   'Monitor your Kubernetes infrastructure by consolidating your logs and metrics.',
    // cardImage: 'observability.png',
    // media: null,

    complete: true,
    intro:
      "We'll help you quickly gain visibility into your environment using Elastic's out-of-the-box integrations.",
    link: {
      title: 'Security 101 Documentation',
      url: '#',
    },
    startPageProgress: true,
    startPageSteps: 2,
    steps: [
      {
        title: 'Security step 1',
        description:
          '<ul><li>Send your data easily.</li><li>Quickly monitor popular cloud services, applications, systems, containers, and more.</li><li>Select your integrations.</li></ul>',
        stepPath: 'security/defend-data',
        order: 1,
      },
      {
        title: 'Security step 2',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'security/rules',
        order: 2,
      },
      {
        title: 'Security step 3',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'security/alerts',
        pageProgressOpen: true,
        order: 3,
      },
      {
        title: 'Security step 4',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'security/cases-investigation',
        order: 4,
      },
    ],
  },
  {
    section: 'Search',
    title: 'Add search to your website',
    complete: true,
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    steps: [
      {
        title: 'Add data',
        description:
          '<ul><li>Select an ingestion method </li><li>Create a new Elasticsearch index.</li><li>Configure your ingestion setting.</li></ul>',
        link: {
          title: 'Getting started with Elastic Enterprise Search',
          url: '#',
        },
        stepPath: 'search/add-data',
        order: 1,
      },
      {
        title: 'Build a search experience',
        description:
          '<p>Learn how you can easily unlock the power of the Elastic search platform to build world-class search experiences for your users, customers, and employees.</p>',
        link: null,
        stepPath: 'search/build',
        order: 2,
      },
      {
        title: 'Optimize your search relevance',
        description:
          '<p style="margin-bottom: 10px;">Take a tour of Elastic’s relevance refinement tools, including</p><ul><li>Relevance and precision tuning</li><li>Adaptive relevance and curations</li><li>Snynonym management</li></ul>',
        link: null,
        stepPath: 'search/optimize',
        order: 3,
      },
      {
        title: 'Review your search analytics',
        description:
          '<p style="margin-bottom: 10px;">Explore recent activity in your search engines, including:</p><ul><li>Recent queries, clicks, and other events</li><li>Popular queries and documents</li><li>Underperforming metrics, like queries with no results</li></ul>',
        link: null,
        stepPath: 'search/review',
        order: 4,
      },
    ],
  },
  {
    section: 'Observability',
    title: 'Monitor my application performance (APM/tracing)',
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    steps: [
      {
        title: 'Monitoring Step 1',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'observability/add-data',
        order: 1,
      },
      {
        title: 'Monitoring Step 2',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'observability/alert',
        order: 2,
      },
      {
        title: 'Monitoring Step 3',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'observability/tour',
        order: 3,
      },
      {
        title: 'Monitoring Step 4',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'observability/do-more',
        order: 4,
      },
    ],
  },
  {
    section: 'Security',
    title: 'Secure my hosts',
    progress: '1/4 steps complete',
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    steps: [
      {
        title: 'Security step 1',
        description:
          '<ul><li>Send your data easily.</li><li>Quickly monitor popular cloud services, applications, systems, containers, and more.</li><li>Select your integrations.</li></ul>',
        stepPath: 'security/defend-data',
        order: 1,
      },
      {
        title: 'Security step 2',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'security/rules',
        order: 2,
      },
      {
        title: 'Security step 3',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'security/alerts',
        pageProgressOpen: true,
        order: 3,
      },
      {
        title: 'Security step 4',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'security/cases-investigation',
        order: 4,
      },
    ],
  },
  {
    section: 'Search',
    title: 'Search across databases and business systems',
    progress: '1/4 steps complete',
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    steps: [
      {
        title: 'Add data',
        description:
          '<ul><li>Select an ingestion method </li><li>Create a new Elasticsearch index.</li><li>Configure your ingestion setting.</li></ul>',
        link: {
          title: 'Getting started with Elastic Enterprise Search',
          url: '#',
        },
        stepPath: 'search/add-data',
        order: 1,
      },
      {
        title: 'Build a search experience',
        description:
          '<p>Learn how you can easily unlock the power of the Elastic search platform to build world-class search experiences for your users, customers, and employees.</p>',
        link: null,
        stepPath: 'search/build',
        order: 2,
      },
      {
        title: 'Optimize your search relevance',
        description:
          '<p style="margin-bottom: 10px;">Take a tour of Elastic’s relevance refinement tools, including</p><ul><li>Relevance and precision tuning</li><li>Adaptive relevance and curations</li><li>Snynonym management</li></ul>',
        link: null,
        stepPath: 'search/optimize',
        order: 3,
      },
      {
        title: 'Review your search analytics',
        description:
          '<p style="margin-bottom: 10px;">Explore recent activity in your search engines, including:</p><ul><li>Recent queries, clicks, and other events</li><li>Popular queries and documents</li><li>Underperforming metrics, like queries with no results</li></ul>',
        link: null,
        stepPath: 'search/review',
        order: 4,
      },
    ],
  },
  {
    section: 'Observability',
    title: 'Monitor hosts',
    complete: true,
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    // started: false,
    steps: [
      {
        title: 'Add data',
        description:
          '<ul><li>Select an ingestion method </li><li>Create a new Elasticsearch index.</li><li>Configure your ingestion setting.</li></ul>',
        link: {
          title: 'Getting started with Elastic Enterprise Search',
          url: '#',
        },
        stepPath: 'search/add-data',
        order: 1,
      },
      {
        title: 'Build a search experience',
        description:
          '<p>Learn how you can easily unlock the power of the Elastic search platform to build world-class search experiences for your users, customers, and employees.</p>',
        link: null,
        stepPath: 'search/build',
        order: 2,
      },
      {
        title: 'Optimize your search relevance',
        description:
          '<p style="margin-bottom: 10px;">Take a tour of Elastic’s relevance refinement tools, including</p><ul><li>Relevance and precision tuning</li><li>Adaptive relevance and curations</li><li>Snynonym management</li></ul>',
        link: null,
        stepPath: 'search/optimize',
        order: 3,
      },
      {
        title: 'Review your search analytics',
        description:
          '<p style="margin-bottom: 10px;">Explore recent activity in your search engines, including:</p><ul><li>Recent queries, clicks, and other events</li><li>Popular queries and documents</li><li>Underperforming metrics, like queries with no results</li></ul>',
        link: null,
        stepPath: 'search/review',
        order: 4,
      },
    ],
  },
  {
    section: 'Security',
    title: 'Secure my cloud assets',
    complete: true,
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    steps: [
      {
        title: 'Security step 1',
        description:
          '<ul><li>Send your data easily.</li><li>Quickly monitor popular cloud services, applications, systems, containers, and more.</li><li>Select your integrations.</li></ul>',
        stepPath: 'security/defend-data',
        order: 1,
      },
      {
        title: 'Security step 2',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'security/rules',
        order: 2,
      },
      {
        title: 'Security step 3',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'security/alerts',
        pageProgressOpen: true,
        order: 3,
      },
      {
        title: 'Security step 4',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'security/cases-investigation',
        order: 4,
      },
    ],
  },
  {
    section: 'Observability',
    title: 'Monitor kubernetes clusters',
    complete: true,
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    // started: false,
    steps: [
      {
        title: 'Monitoring Step 1',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'observability/add-data',
        order: 1,
      },
      {
        title: 'Monitoring Step 2',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'observability/alert',
        order: 2,
      },
      {
        title: 'Monitoring Step 3',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'observability/tour',
        order: 3,
      },
      {
        title: 'Monitoring Step 4',
        description:
          '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
        link: null,
        stepPath: 'observability/do-more',
        order: 4,
      },
    ],
  },
];
