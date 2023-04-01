export const GUIDES_SEARCH = [
  {
    section: 'Search',
    title: 'Build an application on top of Elasticsearch',
    intro:
      "We'll help you build a search experience with your data using Elastic's web crawler, connectors, and APIs.",
    link: {
      title: 'Learn more about Elasticsearch',
      url: '#',
    },
    media: '<img src="/images/mock-animation.gif">',
    steps: [
      {
        title: 'Add data',
        description:
          '<p>Ingest your data, create an index, and enrich your data with customizable ingest and inference pipelines.</p>',
        link: {
          title: 'Getting started with Elastic Enterprise Search',
          url: '#',
        },
        stepPath: '../search/new-index',
        order: 1,
      },
      {
        title: 'Build a search experience',
        description:
          "<p>Learn more about Elastic's Search UI, try our Search UI tutorial for Elasticsearch, and build a search experience.</p>",
        link: null,
        stepPath: '../search/search-experiences',
        order: 2,
      },
    ],
  },
  {
    section: 'Search',
    title: 'Add search to your website',
    intro:
      "We'll help you build a search experience with your data using Elastic's web crawler, connectors, and APIs.",
    steps: [
      {
        title: 'Add data',
        description:
          '<p>Ingest your data, create an index, and enrich your data with customizable ingest and inference pipelines.</p>',
        link: {
          title: 'Getting started with Elastic Enterprise Search',
          url: '#',
        },
        stepPath: 'search/add-data',
        order: 1,
      },
      {
        title: 'Build a search experience on your website',
        description:
          "<p>Learn more about Elastic's Search UI, try our Search UI tutorial for Elasticsearch, and build a search experience.</p>",
        link: null,
        stepPath: 'search/build',
        order: 2,
      },
    ],
  },
  {
    section: 'Search',
    title: 'Search across databases and business systems',
    intro:
      "We'll help you build a search experience with your data using Elastic's web crawler, connectors, and APIs.",
    steps: [
      {
        title: 'Add data',
        description:
          '<p>Ingest your data, create an index, and enrich your data with customizable ingest and inference pipelines.</p>',
        link: {
          title: 'Getting started with Elastic Enterprise Search',
          url: '#',
        },
        stepPath: 'search/add-data',
        order: 1,
      },
      {
        title: 'Build a search experience across databases',
        description:
          '<p>Learn how you can easily unlock the power of the Elastic search platform to build world-class search experiences for your users, customers, and employees.</p>',
        link: null,
        stepPath: 'search/build',
        order: 2,
      },
    ],
  },
];

export const GUIDES_OBS = [
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
    section: 'Observability',
    title: 'Monitor kubernetes clusters',
    complete: true,
    intro:
      "We'll help you connect Elastic and Kubernetes to start collecting and analyzing logs and metrics.",
    link: {
      title: 'Learn more',
      url: '#',
    },
    steps: [
      {
        title: 'Add data',
        description:
          '<ul><li>To get your Kubernetes data flowing, install Elastic Agent in the Kubernetes cluster you want to monitor. Once Elastic Agent is deployed, you can optionally add kube-state-metrics for a more comprehensive metrics coverage.</li><li><a href="#">Learn more</a></li></ul>',
        link: null,
        stepPath: 'observability/add-data',
        order: 1,
      },
      {
        title: 'Explore Kubernetes metrics and logs',
        description:
          '<ul><li>Visualize and analyze your Kubernetes environment.</li></ul>',
        link: null,
        stepPath: 'observability/alert',
        order: 2,
      },
      {
        title: 'Tour Elastic Observability',
        description:
          '<ul><li>Get familiar with the rest of Elastic Observability.</li></ul>',
        link: null,
        stepPath: 'observability/tour',
        order: 3,
      },
    ],
  },
];

export const GUIDES_SECURITY = [
  {
    section: 'Security',
    title: 'Detect threats in my data with SIEM',
    complete: true,
    intro:
      "There are many ways to get your SIEM data into Elastic. In this guide, we'll help you get set up quickly using the Elastic Defend integration.",
    link: {
      title: 'Learn more',
      url: '#',
    },
    startPageProgress: true,
    startPageSteps: 2,
    steps: [
      {
        title: 'Add data with Elastic Defend',
        description:
          '<ul><li>Install Elastic Agent and its Elastic Defend integration on one of your computers to get SIEM data flowing.</li></ul>',
        stepPath: 'security/defend-data',
        order: 1,
      },
      {
        title: 'TUrn on rules',
        description:
          '<ul><li>Load the Elastic prebuilt rules, select the rules you want, and enable them to generate alerts.</li></ul>',
        link: null,
        stepPath: 'security/rules',
        order: 2,
      },
      {
        title: 'Manage alerts and cases',
        description:
          '<ul><li>Learn how to view and triage alerts with cases.</li></ul>',
        link: null,
        stepPath: 'security/alerts',
        pageProgressOpen: true,
        order: 3,
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
];

export const GUIDES_ALL = [
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
