import type { ButtonType, IExecutionViewGroup, ITrackerEventGroup, IWizardGroup, Visits } from '@/@types'

export const mockVisitsData: Visits = {
  os: [{ name: 'Windows', value: 8 }],
  screens: [
    { name: '1920x1080', value: 7 },
    { name: '1280x720', value: 1 },
  ],
  devices: [
    { name: 'Desktop', value: 8 },
    { name: 'Camera', value: 0 },
    { name: 'Car browser', value: 0 },
    { name: 'Console', value: 0 },
    { name: 'Feature phone', value: 0 },
    { name: 'Peripheral', value: 0 },
    { name: 'Phablet', value: 0 },
    { name: 'Portable media player', value: 0 },
    { name: 'Smart display', value: 0 },
    { name: 'Smartphone', value: 0 },
    { name: 'Smart speaker', value: 0 },
    { name: 'Tablet', value: 0 },
    { name: 'Tv', value: 0 },
    { name: 'Wearable', value: 0 },
  ],
  browsers: [{ name: 'Firefox', value: 8 }],
  pagesExpanded: [
    { name: 'Entity', value: 14 },
    { name: 'LandingPage', value: 13 },
    { name: 'Administration', value: 12 },
    { name: 'Apps', value: 5 },
    { name: 'Home', value: 3 },
    { name: 'Reports', value: 2 },
    { name: 'Automation', value: 2 },
    { name: 'Page URL not defined', value: 2 },
    { name: 'Quality', value: 2 },
    { name: 'Report', value: 2 },
    { name: 'Login', value: 1 },
    { name: 'SystemIntegrations', value: 1 },
    { name: 'TestEntityPropertyEditor', value: 1 },
  ],
  pagesFlat: [
    { name: 'Apps', value: 5 },
    { name: 'LandingPage/Administration', value: 4 },
    { name: 'LandingPage/BusinessData', value: 4 },
    { name: 'Administration/AugmentedReality', value: 3 },
    { name: 'Home', value: 3 },
    { name: 'Administration/Apps', value: 2 },
    { name: 'Administration/Queries', value: 2 },
    { name: 'Administration/Query/2305160621190000001', value: 2 },
    { name: 'Entity/Area?entityType=Area', value: 2 },
    { name: 'Entity/SetupMatrix?entityType=SetupMatrix', value: 2 },
    { name: 'LandingPage/Quality', value: 2 },
    { name: 'Reports', value: 2 },
    { name: 'Page URL not defined', value: 2 },
    { name: 'Administration/Table/GenericTable/2305160621190000001', value: 1 },
    { name: 'Administration/Tables', value: 1 },
    { name: 'Administration/UIPage', value: 1 },
    { name: 'Automation/ConnectIoT', value: 1 },
    { name: 'Automation/FactoryAutomation', value: 1 },
    { name: 'Entity/Container/2305160621190000013/View/Details', value: 1 },
    { name: 'Entity/Container?entityType=Container', value: 1 },
    { name: 'Entity/DataCollectionLimitSet?entityType=DataCollectionLimitSet', value: 1 },
    { name: 'Entity/Employee/2305160621190000001/View/Details', value: 1 },
    { name: 'Entity/Employee?entityType=Employee', value: 1 },
    { name: 'Entity/MaintenancePlan?entityType=MaintenancePlan', value: 1 },
    { name: 'Entity/Schedule?entityType=Schedule', value: 1 },
    { name: 'Entity/SetupMatrix/2305160621190000002/View/Details', value: 1 },
    { name: 'Entity/Team/2305160621190000001/View/Details', value: 1 },
    { name: 'Entity/Team?entityType=Team', value: 1 },
    { name: 'LandingPage/Automation', value: 1 },
    { name: 'LandingPage/CoreExamples', value: 1 },
    { name: 'LandingPage/DataPlatform', value: 1 },
    { name: 'Login', value: 1 },
    { name: 'Quality/ChangeSets', value: 1 },
    { name: 'Quality/Documents', value: 1 },
    {
      name: 'Report/1fb244d5-f327-43cb-a55f-b5a210ffba31?path=/Reports-MESDevelopment/Performance/Material Step Cycle Time DWH',
      value: 1,
    },
    {
      name: 'Report/4511f9e4-fcbb-4806-b4b4-8e6c5f31030d?path=/Reports-MESDevelopment/Material History/Material Genealogy',
      value: 1,
    },
    { name: 'SystemIntegrations', value: 1 },
    { name: 'TestEntityPropertyEditor', value: 1 },
  ],
  transitions: [
    {
      pageUrl: '/Apps',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [
          { label: 'localhost/Reports', referrals: 3 },
          { label: 'localhost/Entity/Employee?entityType=Employee', referrals: 1 },
          { label: 'localhost/Entity/SetupMatrix?entityType=SetupMatrix', referrals: 1 },
          { label: 'localhost/LandingPage/DataPlatform', referrals: 1 },
          { label: 'localhost/Login', referrals: 1 },
        ],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 8, entries: 1, exits: 0 },
        followingPages: [
          { label: 'localhost/Home', referrals: 2 },
          { label: 'localhost/Administration/AugmentedReality', referrals: 1 },
          { label: 'localhost/LandingPage/BusinessData', referrals: 1 },
          { label: 'localhost/LandingPage/DataPlatform', referrals: 1 },
          { label: 'localhost/LandingPage/Quality', referrals: 1 },
          { label: 'Others', referrals: 2 },
        ],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'direct', visits: 1, details: [] }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FApps&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/LandingPage/Administration',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [
          { label: 'localhost/Home', referrals: 2 },
          { label: 'localhost/LandingPage/BusinessData', referrals: 2 },
          { label: 'localhost/Administration/Apps', referrals: 1 },
          { label: 'localhost/Entity/Employee?entityType=Employee', referrals: 1 },
          { label: 'localhost/SystemIntegrations', referrals: 1 },
        ],
        previousSiteSearches: [],
        pageMetrics: { loops: 1, pageviews: 9, entries: 1, exits: 0 },
        followingPages: [
          { label: 'localhost/Administration/Apps', referrals: 2 },
          { label: 'localhost/Administration/Queries', referrals: 2 },
          { label: 'localhost/Administration/AugmentedReality', referrals: 1 },
          { label: 'localhost/Administration/Tables', referrals: 1 },
          { label: 'localhost/Administration/UIPage', referrals: 1 },
          { label: 'Others', referrals: 1 },
        ],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'direct', visits: 1, details: [] }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FLandingPage%2FAdministration&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/LandingPage/BusinessData',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [
          { label: 'localhost/LandingPage/Quality', referrals: 5 },
          { label: 'localhost/Administration/Apps', referrals: 1 },
          { label: 'localhost/Administration/Queries', referrals: 1 },
          { label: 'localhost/Apps', referrals: 1 },
          { label: 'localhost/Entity/DataCollectionLimitSet?entityType=DataCollectionLimitSet', referrals: 1 },
          { label: 'Others', referrals: 1 },
        ],
        previousSiteSearches: [],
        pageMetrics: { loops: 1, pageviews: 13, entries: 2, exits: 0 },
        followingPages: [
          { label: 'localhost/Entity/Area?entityType=Area', referrals: 2 },
          { label: 'localhost/LandingPage/Administration', referrals: 2 },
          { label: 'localhost/Entity/Container?entityType=Container', referrals: 1 },
          { label: 'localhost/Entity/DataCollectionLimitSet?entityType=DataCollectionLimitSet', referrals: 1 },
          { label: 'localhost/Entity/Employee?entityType=Employee', referrals: 1 },
          { label: 'Others', referrals: 5 },
        ],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'direct', visits: 2, details: [] }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FLandingPage%2FBusinessData&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Administration/AugmentedReality',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [
          { label: 'localhost/Apps', referrals: 1 },
          { label: 'localhost/LandingPage/Administration', referrals: 1 },
        ],
        previousSiteSearches: [],
        pageMetrics: { loops: 3, pageviews: 6, entries: 1, exits: 3 },
        followingPages: [],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'direct', visits: 1, details: [] }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FAdministration%2FAugmentedReality&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Home',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [
          { label: 'localhost/Apps', referrals: 2 },
          { label: 'localhost/Entity/Schedule?entityType=Schedule', referrals: 1 },
          { label: 'localhost/Quality/Documents', referrals: 1 },
        ],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 4, entries: 0, exits: 0 },
        followingPages: [
          { label: 'localhost/LandingPage/Administration', referrals: 2 },
          { label: 'localhost/LandingPage/BusinessData', referrals: 1 },
          { label: 'localhost/Reports', referrals: 1 },
        ],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FHome&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Administration/Apps',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/LandingPage/Administration', referrals: 2 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 2, entries: 0, exits: 0 },
        followingPages: [
          { label: 'localhost/LandingPage/Administration', referrals: 1 },
          { label: 'localhost/LandingPage/BusinessData', referrals: 1 },
        ],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FAdministration%2FApps&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Administration/Queries',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/LandingPage/Administration', referrals: 2 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 2, entries: 0, exits: 0 },
        followingPages: [
          { label: 'localhost/Administration/Query/2305160621190000001', referrals: 1 },
          { label: 'localhost/LandingPage/BusinessData', referrals: 1 },
        ],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FAdministration%2FQueries&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Administration/Query/2305160621190000001',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/Administration/Queries', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 2, entries: 1, exits: 2 },
        followingPages: [],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'direct', visits: 1, details: [] }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FAdministration%2FQuery%2F2305160621190000001&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Entity/Area?entityType=Area',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/LandingPage/BusinessData', referrals: 2 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 2, entries: 0, exits: 2 },
        followingPages: [],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FEntity%2FArea%3FentityType%3DArea&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Entity/SetupMatrix?entityType=SetupMatrix',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/LandingPage/BusinessData', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 2, entries: 1, exits: 0 },
        followingPages: [
          { label: 'localhost/Apps', referrals: 1 },
          { label: 'localhost/Entity/SetupMatrix/2305160621190000002/View/Details', referrals: 1 },
        ],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'direct', visits: 1, details: [] }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FEntity%2FSetupMatrix%3FentityType%3DSetupMatrix&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/LandingPage/Quality',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [
          { label: 'localhost/Reports', referrals: 4 },
          { label: 'localhost/Apps', referrals: 1 },
          { label: 'localhost/Entity/Container/2305160621190000013/View/Details', referrals: 1 },
          { label: 'localhost/Entity/MaintenancePlan?entityType=MaintenancePlan', referrals: 1 },
          { label: 'localhost/LandingPage/BusinessData', referrals: 1 },
          { label: 'Others', referrals: 1 },
        ],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 9, entries: 0, exits: 0 },
        followingPages: [
          { label: 'localhost/LandingPage/BusinessData', referrals: 5 },
          { label: 'localhost/Automation/ConnectIoT', referrals: 1 },
          { label: 'localhost/LandingPage/Automation', referrals: 1 },
          { label: 'localhost/Quality/ChangeSets', referrals: 1 },
          { label: 'localhost/Quality/Documents', referrals: 1 },
        ],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FLandingPage%2FQuality&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Reports',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [
          { label: 'localhost/LandingPage/DataPlatform', referrals: 2 },
          {
            label:
              'localhost/Report/4511f9e4-fcbb-4806-b4b4-8e6c5f31030d?path=%2FReports-MESDevelopment%2FMaterial%20History%2FMaterial%20Genealogy',
            referrals: 2,
          },
          { label: 'localhost/Administration/UIPage', referrals: 1 },
          { label: 'localhost/Apps', referrals: 1 },
          { label: 'localhost/Entity/Team/2305160621190000001/View/Details', referrals: 1 },
          { label: 'Others', referrals: 3 },
        ],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 10, entries: 0, exits: 0 },
        followingPages: [
          { label: 'localhost/LandingPage/Quality', referrals: 4 },
          { label: 'localhost/Apps', referrals: 3 },
          { label: 'localhost/LandingPage/Automation', referrals: 1 },
          {
            label:
              'localhost/Report/1fb244d5-f327-43cb-a55f-b5a210ffba31?path=%2FReports-MESDevelopment%2FPerformance%2FMaterial%20Step%20Cycle%20Time%20DWH',
            referrals: 1,
          },
          {
            label:
              'localhost/Report/4511f9e4-fcbb-4806-b4b4-8e6c5f31030d?path=%2FReports-MESDevelopment%2FMaterial%20History%2FMaterial%20Genealogy',
            referrals: 1,
          },
        ],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FReports&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '',
      info: null,
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Administration/Table/GenericTable/2305160621190000001',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/Administration/Tables', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 1, entries: 0, exits: 0 },
        followingPages: [{ label: 'localhost/Entity/Employee?entityType=Employee', referrals: 1 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FAdministration%2FTable%2FGenericTable%2F2305160621190000001&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Administration/Tables',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/LandingPage/Administration', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 1, entries: 0, exits: 0 },
        followingPages: [{ label: 'localhost/Administration/Table/GenericTable/2305160621190000001', referrals: 1 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FAdministration%2FTables&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Administration/UIPage',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/LandingPage/Administration', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 1, entries: 0, exits: 0 },
        followingPages: [{ label: 'localhost/Reports', referrals: 1 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FAdministration%2FUIPage&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Automation/ConnectIoT',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [
          { label: 'localhost/LandingPage/Automation', referrals: 1 },
          { label: 'localhost/LandingPage/Quality', referrals: 1 },
        ],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 2, entries: 0, exits: 0 },
        followingPages: [
          { label: 'localhost/Automation/FactoryAutomation', referrals: 1 },
          { label: 'localhost/LandingPage/Automation', referrals: 1 },
        ],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FAutomation%2FConnectIoT&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Automation/FactoryAutomation',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [
          { label: 'localhost/Automation/ConnectIoT', referrals: 1 },
          { label: 'localhost/LandingPage/Automation', referrals: 1 },
        ],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 2, entries: 0, exits: 0 },
        followingPages: [{ label: 'localhost/LandingPage/Automation', referrals: 2 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FAutomation%2FFactoryAutomation&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Entity/Container/2305160621190000013/View/Details',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/Entity/Container?entityType=Container', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 1, entries: 0, exits: 0 },
        followingPages: [{ label: 'localhost/LandingPage/Quality', referrals: 1 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FEntity%2FContainer%2F2305160621190000013%2FView%2FDetails&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Entity/Container?entityType=Container',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/LandingPage/BusinessData', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 1, entries: 0, exits: 0 },
        followingPages: [{ label: 'localhost/Entity/Container/2305160621190000013/View/Details', referrals: 1 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FEntity%2FContainer%3FentityType%3DContainer&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Entity/DataCollectionLimitSet?entityType=DataCollectionLimitSet',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/LandingPage/BusinessData', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 1, entries: 0, exits: 0 },
        followingPages: [{ label: 'localhost/LandingPage/BusinessData', referrals: 1 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FEntity%2FDataCollectionLimitSet%3FentityType%3DDataCollectionLimitSet&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Entity/Employee/2305160621190000001/View/Details',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/Entity/Employee?entityType=Employee', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 1, entries: 0, exits: 0 },
        followingPages: [{ label: 'localhost/Entity/Employee?entityType=Employee', referrals: 1 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FEntity%2FEmployee%2F2305160621190000001%2FView%2FDetails&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Entity/Employee?entityType=Employee',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [
          { label: 'localhost/Administration/Table/GenericTable/2305160621190000001', referrals: 1 },
          { label: 'localhost/Entity/Employee/2305160621190000001/View/Details', referrals: 1 },
          { label: 'localhost/LandingPage/BusinessData', referrals: 1 },
        ],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 3, entries: 0, exits: 0 },
        followingPages: [
          { label: 'localhost/Apps', referrals: 1 },
          { label: 'localhost/Entity/Employee/2305160621190000001/View/Details', referrals: 1 },
          { label: 'localhost/LandingPage/Administration', referrals: 1 },
        ],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FEntity%2FEmployee%3FentityType%3DEmployee&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Entity/MaintenancePlan?entityType=MaintenancePlan',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/LandingPage/BusinessData', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 1, entries: 0, exits: 0 },
        followingPages: [{ label: 'localhost/LandingPage/Quality', referrals: 1 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FEntity%2FMaintenancePlan%3FentityType%3DMaintenancePlan&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Entity/Schedule?entityType=Schedule',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/LandingPage/BusinessData', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 1, entries: 0, exits: 0 },
        followingPages: [{ label: 'localhost/Home', referrals: 1 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FEntity%2FSchedule%3FentityType%3DSchedule&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Entity/SetupMatrix/2305160621190000002/View/Details',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/Entity/SetupMatrix?entityType=SetupMatrix', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 1, entries: 0, exits: 1 },
        followingPages: [],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FEntity%2FSetupMatrix%2F2305160621190000002%2FView%2FDetails&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Entity/Team/2305160621190000001/View/Details',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/Entity/Team?entityType=Team', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 1, entries: 0, exits: 0 },
        followingPages: [{ label: 'localhost/Reports', referrals: 1 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FEntity%2FTeam%2F2305160621190000001%2FView%2FDetails&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Entity/Team?entityType=Team',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/LandingPage/BusinessData', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 1, entries: 0, exits: 0 },
        followingPages: [{ label: 'localhost/Entity/Team/2305160621190000001/View/Details', referrals: 1 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FEntity%2FTeam%3FentityType%3DTeam&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/LandingPage/Automation',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [
          { label: 'localhost/Automation/FactoryAutomation', referrals: 2 },
          { label: 'localhost/Automation/ConnectIoT', referrals: 1 },
          { label: 'localhost/LandingPage/Quality', referrals: 1 },
          { label: 'localhost/Quality/ChangeSets', referrals: 1 },
          { label: 'localhost/Reports', referrals: 1 },
        ],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 6, entries: 0, exits: 0 },
        followingPages: [
          { label: 'localhost/LandingPage/DataPlatform', referrals: 2 },
          { label: 'localhost/Automation/ConnectIoT', referrals: 1 },
          { label: 'localhost/Automation/FactoryAutomation', referrals: 1 },
          { label: 'localhost/Quality/ChangeSets', referrals: 1 },
          { label: 'localhost/Reports', referrals: 1 },
        ],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FLandingPage%2FAutomation&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/LandingPage/CoreExamples',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/LandingPage/DataPlatform', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 1, entries: 0, exits: 0 },
        followingPages: [{ label: 'localhost/TestEntityPropertyEditor', referrals: 1 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FLandingPage%2FCoreExamples&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/LandingPage/DataPlatform',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [
          { label: 'localhost/LandingPage/Automation', referrals: 2 },
          { label: 'localhost/Apps', referrals: 1 },
          { label: 'localhost/TestEntityPropertyEditor', referrals: 1 },
        ],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 4, entries: 0, exits: 0 },
        followingPages: [
          { label: 'localhost/Reports', referrals: 2 },
          { label: 'localhost/Apps', referrals: 1 },
          { label: 'localhost/LandingPage/CoreExamples', referrals: 1 },
        ],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FLandingPage%2FDataPlatform&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Login',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [],
        previousSiteSearches: [],
        pageMetrics: { loops: 2, pageviews: 3, entries: 1, exits: 0 },
        followingPages: [{ label: 'localhost/Apps', referrals: 1 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'direct', visits: 1, details: [] }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FLogin&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Quality/ChangeSets',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [
          { label: 'localhost/LandingPage/Automation', referrals: 1 },
          { label: 'localhost/LandingPage/Quality', referrals: 1 },
        ],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 2, entries: 0, exits: 0 },
        followingPages: [
          { label: 'localhost/LandingPage/Automation', referrals: 1 },
          { label: 'localhost/Quality/Documents', referrals: 1 },
        ],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FQuality%2FChangeSets&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/Quality/Documents',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [
          { label: 'localhost/LandingPage/Quality', referrals: 1 },
          { label: 'localhost/Quality/ChangeSets', referrals: 1 },
        ],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 2, entries: 0, exits: 0 },
        followingPages: [
          { label: 'localhost/Home', referrals: 1 },
          { label: 'localhost/LandingPage/Quality', referrals: 1 },
        ],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FQuality%2FDocuments&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl:
        '/Report/1fb244d5-f327-43cb-a55f-b5a210ffba31?path=%2FReports-MESDevelopment%2FPerformance%2FMaterial%20Step%20Cycle%20Time%20DWH',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/Reports', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 1, entries: 0, exits: 0 },
        followingPages: [{ label: 'localhost/Reports', referrals: 1 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FReport%2F1fb244d5-f327-43cb-a55f-b5a210ffba31%3Fpath%3D%252FReports-MESDevelopment%252FPerformance%252FMaterial%2520Step%2520Cycle%2520Time%2520DWH&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl:
        '/Report/4511f9e4-fcbb-4806-b4b4-8e6c5f31030d?path=%2FReports-MESDevelopment%2FMaterial%20History%2FMaterial%20Genealogy',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [
          { label: 'localhost/Apps', referrals: 1 },
          { label: 'localhost/Reports', referrals: 1 },
        ],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 2, entries: 0, exits: 0 },
        followingPages: [{ label: 'localhost/Reports', referrals: 2 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FReport%2F4511f9e4-fcbb-4806-b4b4-8e6c5f31030d%3Fpath%3D%252FReports-MESDevelopment%252FMaterial%2520History%252FMaterial%2520Genealogy&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/SystemIntegrations',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/LandingPage/Administration', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 1, entries: 0, exits: 0 },
        followingPages: [{ label: 'localhost/LandingPage/Administration', referrals: 1 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FSystemIntegrations&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
    {
      pageUrl: '/TestEntityPropertyEditor',
      info: {
        date: 'Apr 29 – May 22, 2023',
        previousPages: [{ label: 'localhost/LandingPage/CoreExamples', referrals: 1 }],
        previousSiteSearches: [],
        pageMetrics: { loops: 0, pageviews: 1, entries: 0, exits: 0 },
        followingPages: [{ label: 'localhost/LandingPage/DataPlatform', referrals: 1 }],
        followingSiteSearches: [],
        outlinks: [],
        downloads: [],
        referrers: [{ label: 'Direct entries', shortName: 'Direct Entry', visits: 0 }],
      },
      apiUrl:
        'http://localhost:80/index.php?module=API&method=Transitions.getTransitionsForAction&actionType=url&actionName=https%3A%2F%2Flocalhost%2FTestEntityPropertyEditor&idSite=1&period=range&date=2023-04-29,today&format=JSON&token_auth=8a396695bcb95af437f0e8c3a5fdee83&force_api_session=1',
    },
  ],
  overview: {
    nb_visits: 8,
    nb_actions: 415,
    max_actions: 178,
    bounce_count: 1,
    sum_visit_length: 6493,
    nb_visits_new: 1,
    nb_actions_new: 15,
    max_actions_new: 15,
    bounce_rate_new: '0%',
    nb_actions_per_visit_new: 15,
    avg_time_on_site_new: '32 min 7s',
    nb_visits_returning: 7,
    nb_actions_returning: 400,
    max_actions_returning: 178,
    bounce_rate_returning: '14%',
    nb_actions_per_visit_returning: 57.1,
    avg_time_on_site_returning: '10 min 52s',
    Referrers_visitorsFromSearchEngines: 0,
    Referrers_visitorsFromSocialNetworks: 0,
    Referrers_visitorsFromDirectEntry: 8,
    Referrers_visitorsFromWebsites: 0,
    Referrers_visitorsFromCampaigns: 0,
    Referrers_distinctSearchEngines: 0,
    Referrers_distinctSocialNetworks: 0,
    Referrers_distinctKeywords: 0,
    Referrers_distinctWebsites: 0,
    Referrers_distinctWebsitesUrls: 0,
    Referrers_distinctCampaigns: 0,
    Referrers_visitorsFromDirectEntry_percent: '100%',
    Referrers_visitorsFromSearchEngines_percent: '0%',
    Referrers_visitorsFromCampaigns_percent: '0%',
    Referrers_visitorsFromSocialNetworks_percent: '0%',
    Referrers_visitorsFromWebsites_percent: '0%',
    PagePerformance_network_time: 0.041,
    PagePerformance_network_hits: 11,
    PagePerformance_servery_time: 19.883,
    PagePerformance_server_hits: 11,
    PagePerformance_transfer_time: 0,
    PagePerformance_transfer_hits: 11,
    PagePerformance_domprocessing_time: 2.172,
    PagePerformance_domprocessing_hits: 11,
    PagePerformance_domcompletion_time: 42.545,
    PagePerformance_domcompletion_hits: 11,
    PagePerformance_onload_time: 0.539,
    PagePerformance_onload_hits: 11,
    PagePerformance_pageload_time: 65.18,
    PagePerformance_pageload_hits: 11,
    avg_time_network: '0s',
    avg_time_server: '1.81s',
    avg_time_transfer: '0s',
    avg_time_dom_processing: '0.2s',
    avg_time_dom_completion: '3.87s',
    avg_time_on_load: '0.05s',
    avg_page_load_time: '5.93s',
    nb_conversions: 0,
    nb_visits_converted: 0,
    revenue: 0,
    conversion_rate: '0%',
    nb_conversions_new_visit: 0,
    nb_visits_converted_new_visit: 0,
    revenue_new_visit: 0,
    conversion_rate_new_visit: '0%',
    nb_conversions_returning_visit: 0,
    nb_visits_converted_returning_visit: 0,
    revenue_returning_visit: 0,
    conversion_rate_returning_visit: '0%',
    nb_pageviews: 113,
    nb_uniq_pageviews: 60,
    nb_downloads: 0,
    nb_uniq_downloads: 0,
    nb_outlinks: 0,
    nb_uniq_outlinks: 0,
    nb_searches: 0,
    nb_keywords: 0,
    bounce_rate: '13%',
    nb_actions_per_visit: 51.9,
    avg_time_on_site: '13 min 32s',
  },
}

export const mockButtonData: ButtonType[] = [
  {
    name: 'Generic.Refresh',
    clickCount: 3,
    buttonClicks: [
      {
        component: 'base-action-button-168357090867432',
        path: '/Administration/Apps',
        time: '2023-05-08T18:35:10.699Z',
      },
      {
        component: 'base-action-button-168417673091728',
        path: '/Administration/Apps',
        time: '2023-05-15T18:52:13.504Z',
      },
      {
        component: 'base-action-button-16842092666011528',
        path: '/Entity/SetupMatrix/2305160621190000002/View/Details',
        time: '2023-05-16T09:53:39.485Z',
      },
    ],
  },
  {
    name: 'Admin.AugmentedReality.Create',
    clickCount: 3,
    buttonClicks: [
      {
        component: 'base-action-button-168357091488260',
        path: '/Administration/AugmentedReality',
        time: '2023-05-08T18:35:16.355Z',
      },
      {
        component: 'base-action-button-168373539558832',
        path: '/Administration/AugmentedReality',
        time: '2023-05-10T16:19:43.610Z',
      },
      {
        component: 'base-action-button-168373539558832',
        path: '/Administration/AugmentedReality',
        time: '2023-05-10T16:25:58.621Z',
      },
    ],
  },
  {
    name: 'Generic.Delete',
    clickCount: 1,
    buttonClicks: [
      {
        component: 'base-action-button-168373539559035',
        path: '/Administration/AugmentedReality',
        time: '2023-05-10T16:19:29.512Z',
      },
    ],
  },
  {
    name: 'Generic.EntityCreate',
    clickCount: 13,
    buttonClicks: [
      { component: 'base-action-button-168420836954979', path: '/Entity/Employee', time: '2023-05-16T03:39:31.377Z' },
      { component: 'base-action-button-168423247565081', path: '/Entity/Area', time: '2023-05-16T10:21:16.485Z' },
      { component: 'base-action-button-1684176741952106', path: '/Entity/Area', time: '2023-05-15T18:52:23.483Z' },
      { component: 'base-action-button-1684176741952106', path: '/Entity/Area', time: '2023-05-15T18:53:37.107Z' },
      { component: 'base-action-button-1684192741621553', path: '/Entity/Container', time: '2023-05-15T23:19:03.384Z' },
      {
        component: 'base-action-button-1684192818197725',
        path: '/Entity/MaintenancePlan',
        time: '2023-05-15T23:20:25.041Z',
      },
      { component: 'base-action-button-1684208751570505', path: '/Entity/Schedule', time: '2023-05-16T03:45:52.692Z' },
      { component: 'base-action-button-1684208751570505', path: '/Entity/Schedule', time: '2023-05-16T03:46:10.577Z' },
      { component: 'base-action-button-1684208779968749', path: '/Entity/Team', time: '2023-05-16T03:46:21.395Z' },
      {
        component: 'base-action-button-1684208972424955',
        path: '/Administration/UIPage',
        time: '2023-05-16T03:49:36.063Z',
      },
      {
        component: 'base-action-button-16842091520401089',
        path: '/Entity/DataCollectionLimitSet',
        time: '2023-05-16T03:52:33.271Z',
      },
      {
        component: 'base-action-button-16842092536971505',
        path: '/Entity/SetupMatrix',
        time: '2023-05-16T03:54:15.707Z',
      },
      {
        component: 'base-action-button-16842308204811588',
        path: '/Entity/SetupMatrix',
        time: '2023-05-16T09:53:41.244Z',
      },
    ],
  },
  {
    name: 'Camera.Scan.Code',
    clickCount: 1,
    buttonClicks: [
      {
        component: 'base-action-button-1683736095993132',
        path: '/Administration/AugmentedReality',
        time: '2023-05-10T16:29:02.832Z',
      },
    ],
  },
  {
    name: 'System.Import',
    clickCount: 2,
    buttonClicks: [
      {
        component: 'base-action-button-1684192818191721',
        path: '/Entity/MaintenancePlan',
        time: '2023-05-15T23:25:17.591Z',
      },
      { component: 'base-action-button-1684208452199224', path: '/Entity/Employee', time: '2023-05-16T03:44:54.345Z' },
    ],
  },
  {
    name: 'Generic.XMLExport',
    clickCount: 1,
    buttonClicks: [
      {
        component: 'base-action-button-1684192818198726',
        path: '/Entity/MaintenancePlan',
        time: '2023-05-15T23:26:16.822Z',
      },
    ],
  },
  {
    name: 'Generic.Edit',
    clickCount: 4,
    buttonClicks: [
      {
        component: 'base-action-button-1684208418302131',
        path: '/Entity/Employee/2305160621190000001/View/Details',
        time: '2023-05-16T03:40:22.087Z',
      },
      {
        component: 'base-action-button-1684208790418783',
        path: '/Entity/Team/2305160621190000001/View/Details',
        time: '2023-05-16T03:46:45.063Z',
      },
      {
        component: 'base-action-button-16842092666111531',
        path: '/Entity/SetupMatrix/2305160621190000002/View/Details',
        time: '2023-05-16T03:54:28.644Z',
      },
      {
        component: 'base-action-button-16842092666111531',
        path: '/Entity/SetupMatrix/2305160621190000002/View/Details',
        time: '2023-05-16T09:53:30.022Z',
      },
    ],
  },
  {
    name: 'Generic.Comment',
    clickCount: 1,
    buttonClicks: [
      {
        component: 'base-action-button-1684208418305134',
        path: '/Entity/Employee/2305160621190000001/View/Details',
        time: '2023-05-16T03:40:31.962Z',
      },
    ],
  },
  {
    name: 'Generic.LayoutPersonalization.Save',
    clickCount: 3,
    buttonClicks: [
      {
        component: 'base-action-button-1684208418312141',
        path: '/Entity/Employee/2305160621190000001/View/Details',
        time: '2023-05-16T03:40:44.052Z',
      },
      {
        component: 'base-action-button-16841932391791242',
        path: '/Quality/Documents',
        time: '2023-05-15T23:27:22.175Z',
      },
      {
        component: 'base-action-button-16841932507951277',
        path: '/Quality/ChangeSets',
        time: '2023-05-15T23:27:34.459Z',
      },
    ],
  },
  {
    name: 'Generic.MassUpdate',
    clickCount: 1,
    buttonClicks: [
      { component: 'base-action-button-1684208452200225', path: '/Entity/Employee', time: '2023-05-16T03:45:00.229Z' },
    ],
  },
  {
    name: 'Generic.Export',
    clickCount: 1,
    buttonClicks: [
      { component: 'base-action-button-1684208452206231', path: '/Entity/Employee', time: '2023-05-16T03:41:05.085Z' },
    ],
  },
  {
    name: 'System.Tables.Create',
    clickCount: 1,
    buttonClicks: [
      {
        component: 'base-action-button-1684208590038296',
        path: '/Administration/Tables',
        time: '2023-05-16T03:43:12.882Z',
      },
    ],
  },
  {
    name: 'System.Tables.GenerateSchema',
    clickCount: 1,
    buttonClicks: [
      {
        component: 'base-action-button-1684208666253341',
        path: '/Administration/Table/GenericTable/2305160621190000001',
        time: '2023-05-16T03:44:34.400Z',
      },
    ],
  },
  {
    name: 'OData.GenerateURL',
    clickCount: 1,
    buttonClicks: [
      {
        component: 'base-action-button-16841933239771547',
        path: '/Administration/Queries',
        time: '2023-05-15T23:28:46.666Z',
      },
    ],
  },
  {
    name: 'Admin.Queries.Create',
    clickCount: 1,
    buttonClicks: [
      {
        component: 'base-action-button-16841933239881548',
        path: '/Administration/Queries',
        time: '2023-05-15T23:28:52.055Z',
      },
    ],
  },
]

export const mockWizardData: ITrackerEventGroup[] = [
  {
    component: 'wizard-168632012800196',
    name: 'Create Area',
    events: [
      {
        time: '2023-06-09T14:15:28.034Z',
        path: '/Entity/Area',
        action: 'New Steps: {"current":0,"total":0,"visible":0}',
      },
      { time: '2023-06-09T14:15:28.035Z', path: '/Entity/Area', action: 'Start' },
      {
        time: '2023-06-09T14:15:28.074Z',
        path: '/Entity/Area',
        action: 'New Steps: {"current":0,"total":4,"visible":2}',
      },
      {
        time: '2023-06-09T14:15:28.224Z',
        path: '/Entity/Area',
        action: 'Activate Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      { time: '2023-06-09T14:16:11.647Z', path: '/Entity/Area', action: 'Next Step: attributesSelector' },
      {
        time: '2023-06-09T14:16:11.648Z',
        path: '/Entity/Area',
        action: 'Success Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      { time: '2023-06-09T14:16:11.668Z', path: '/Entity/Area', action: 'Activate Step: attributesSelector' },
      { time: '2023-06-09T14:16:15.021Z', path: '/Entity/Area', action: 'Success Step: attributesSelector' },
      { time: '2023-06-09T14:16:15.126Z', path: '/Entity/Area', action: 'Error' },
      {
        time: '2023-06-09T14:16:15.146Z',
        path: '/Entity/Area',
        action: 'Activate Step: cmf-core-controls-wizardStep-97',
      },
      { time: '2023-06-09T14:16:17.168Z', path: '/Entity/Area', action: 'Back Step: attributesSelector' },
      { time: '2023-06-09T14:16:17.180Z', path: '/Entity/Area', action: 'Activate Step: attributesSelector' },
      {
        time: '2023-06-09T14:16:17.923Z',
        path: '/Entity/Area',
        action: 'Back Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      {
        time: '2023-06-09T14:16:17.945Z',
        path: '/Entity/Area',
        action: 'Activate Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      { time: '2023-06-09T14:16:23.734Z', path: '/Entity/Area', action: 'Next Step: attributesSelector' },
      {
        time: '2023-06-09T14:16:23.734Z',
        path: '/Entity/Area',
        action: 'Success Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      { time: '2023-06-09T14:16:23.750Z', path: '/Entity/Area', action: 'Activate Step: attributesSelector' },
      { time: '2023-06-09T14:16:24.645Z', path: '/Entity/Area', action: 'Next Step: cmf-core-controls-wizardStep-97' },
      { time: '2023-06-09T14:16:24.646Z', path: '/Entity/Area', action: 'Success Step: attributesSelector' },
      {
        time: '2023-06-09T14:16:24.657Z',
        path: '/Entity/Area',
        action: 'Activate Step: cmf-core-controls-wizardStep-97',
      },
      { time: '2023-06-09T14:16:30.253Z', path: '/Entity/Area', action: 'Activate Step: attributesSelector' },
      { time: '2023-06-09T14:16:30.262Z', path: '/Entity/Area', action: 'Activate Step: attributesSelector' },
      {
        time: '2023-06-09T14:16:30.839Z',
        path: '/Entity/Area',
        action: 'Activate Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      {
        time: '2023-06-09T14:16:30.850Z',
        path: '/Entity/Area',
        action: 'Activate Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      { time: '2023-06-09T14:22:51.035Z', path: '/Entity/Area', action: 'Next Step: attributesSelector' },
      {
        time: '2023-06-09T14:22:51.037Z',
        path: '/Entity/Area',
        action: 'Success Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      { time: '2023-06-09T14:22:51.058Z', path: '/Entity/Area', action: 'Activate Step: attributesSelector' },
      {
        time: '2023-06-09T14:22:53.019Z',
        path: '/Entity/Area',
        action: 'Back Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      {
        time: '2023-06-09T14:22:53.066Z',
        path: '/Entity/Area',
        action: 'Activate Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      { time: '2023-06-09T14:23:12.515Z', path: '/Entity/Area', action: 'Next Step: attributesSelector' },
      {
        time: '2023-06-09T14:23:12.516Z',
        path: '/Entity/Area',
        action: 'Success Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      { time: '2023-06-09T14:23:12.532Z', path: '/Entity/Area', action: 'Activate Step: attributesSelector' },
      { time: '2023-06-09T14:23:14.132Z', path: '/Entity/Area', action: 'Next Step: cmf-core-controls-wizardStep-97' },
      { time: '2023-06-09T14:23:14.133Z', path: '/Entity/Area', action: 'Success Step: attributesSelector' },
      {
        time: '2023-06-09T14:23:14.143Z',
        path: '/Entity/Area',
        action: 'Activate Step: cmf-core-controls-wizardStep-97',
      },
      { time: '2023-06-09T14:23:18.430Z', path: '/Entity/Area', action: 'Cancel: {"current":2,"total":5,"visible":3}' },
    ],
  },
  {
    component: 'wizard-168666475756240',
    name: 'Create Master Data Package',
    events: [
      {
        time: '2023-06-13T13:59:17.572Z',
        path: '/Administration/MasterDataPackage',
        action: 'New Steps: {"current":0,"total":0,"visible":0}',
      },
      { time: '2023-06-13T13:59:17.573Z', path: '/Administration/MasterDataPackage', action: 'Start' },
      {
        time: '2023-06-13T13:59:17.594Z',
        path: '/Administration/MasterDataPackage',
        action: 'New Steps: {"current":0,"total":4,"visible":1}',
      },
      {
        time: '2023-06-13T13:59:17.642Z',
        path: '/Administration/MasterDataPackage',
        action: 'Activate Step: cmf-core-controls-wizardStep-46',
      },
      {
        time: '2023-06-13T13:59:31.041Z',
        path: '/Administration/MasterDataPackage',
        action: 'Success Step: cmf-core-controls-wizardStep-46',
      },
      {
        time: '2023-06-13T13:59:31.387Z',
        path: '/Administration/MasterDataPackage',
        action: 'Close: {"current":0,"total":4,"visible":0}',
      },
      {
        time: '2023-06-13T13:59:31.391Z',
        path: '/Administration/MasterDataPackage',
        action: 'Complete: {"current":0,"total":4,"visible":0}',
      },
    ],
  },
  {
    component: 'wizard-168666477365378',
    name: 'Load Master Data Package',
    events: [
      {
        time: '2023-06-13T13:59:33.671Z',
        path: '/Entity/MasterDataPackage/2306130033290000010/View/Details',
        action: 'New Steps: {"current":0,"total":1,"visible":1}',
      },
      {
        time: '2023-06-13T13:59:33.672Z',
        path: '/Entity/MasterDataPackage/2306130033290000010/View/Details',
        action: 'Start',
      },
      {
        time: '2023-06-13T13:59:33.998Z',
        path: '/Entity/MasterDataPackage/2306130033290000010/View/Details',
        action: 'Activate Step: sampleStep',
      },
      {
        time: '2023-06-13T13:59:35.816Z',
        path: '/Entity/MasterDataPackage/2306130033290000010/View/Details',
        action: 'Success Step: sampleStep',
      },
      {
        time: '2023-06-13T13:59:36.231Z',
        path: '/Entity/MasterDataPackage/2306130033290000010/View/Details',
        action: 'Close: {"current":0,"total":1,"visible":1}',
      },
      {
        time: '2023-06-13T13:59:36.235Z',
        path: '/Entity/MasterDataPackage/2306130033290000010/View/Details',
        action: 'Complete: {"current":0,"total":1,"visible":1}',
      },
    ],
  },
  {
    component: 'wizard-1686320608247331',
    name: 'Create DataCollection',
    events: [
      {
        time: '2023-06-09T14:23:28.259Z',
        path: '/Entity/DataCollection',
        action: 'New Steps: {"current":0,"total":0,"visible":0}',
      },
      { time: '2023-06-09T14:23:28.260Z', path: '/Entity/DataCollection', action: 'Start' },
      {
        time: '2023-06-09T14:23:28.281Z',
        path: '/Entity/DataCollection',
        action: 'New Steps: {"current":0,"total":4,"visible":3}',
      },
      { time: '2023-06-09T14:23:28.397Z', path: '/Entity/DataCollection', action: 'Activate Step: changeSetSelector' },
      {
        time: '2023-06-09T14:23:45.597Z',
        path: '/Entity/DataCollection',
        action: 'Next Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      { time: '2023-06-09T14:23:45.599Z', path: '/Entity/DataCollection', action: 'Success Step: changeSetSelector' },
      {
        time: '2023-06-09T14:23:45.616Z',
        path: '/Entity/DataCollection',
        action: 'Activate Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      { time: '2023-06-09T14:23:51.828Z', path: '/Entity/DataCollection', action: 'Next Step: attributesSelector' },
      {
        time: '2023-06-09T14:23:51.831Z',
        path: '/Entity/DataCollection',
        action: 'Success Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      { time: '2023-06-09T14:23:51.862Z', path: '/Entity/DataCollection', action: 'Activate Step: attributesSelector' },
      { time: '2023-06-09T14:23:54.512Z', path: '/Entity/DataCollection', action: 'Success Step: attributesSelector' },
      { time: '2023-06-09T14:23:54.580Z', path: '/Entity/DataCollection', action: 'Error' },
      {
        time: '2023-06-09T14:23:54.609Z',
        path: '/Entity/DataCollection',
        action: 'Activate Step: cmf-core-controls-wizardStep-332',
      },
      { time: '2023-06-09T14:23:56.817Z', path: '/Entity/DataCollection', action: 'Activate Step: attributesSelector' },
      { time: '2023-06-09T14:23:56.828Z', path: '/Entity/DataCollection', action: 'Activate Step: attributesSelector' },
      { time: '2023-06-09T14:23:56.838Z', path: '/Entity/DataCollection', action: 'Activate Step: attributesSelector' },
      {
        time: '2023-06-09T14:23:58.904Z',
        path: '/Entity/DataCollection',
        action: 'Activate Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      {
        time: '2023-06-09T14:23:58.918Z',
        path: '/Entity/DataCollection',
        action: 'Activate Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      {
        time: '2023-06-09T14:23:58.935Z',
        path: '/Entity/DataCollection',
        action: 'Activate Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      {
        time: '2023-06-09T14:24:07.165Z',
        path: '/Entity/DataCollection',
        action: 'Success Step: cmf-core-controls-wizardStep-332',
      },
      { time: '2023-06-09T14:24:07.166Z', path: '/Entity/DataCollection', action: 'Success Step: attributesSelector' },
      {
        time: '2023-06-09T14:24:07.166Z',
        path: '/Entity/DataCollection',
        action: 'Success Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      { time: '2023-06-09T14:24:07.241Z', path: '/Entity/DataCollection', action: 'Error' },
      {
        time: '2023-06-09T14:24:07.266Z',
        path: '/Entity/DataCollection',
        action: 'Activate Step: cmf-core-controls-wizardStep-332',
      },
      { time: '2023-06-09T14:24:10.875Z', path: '/Entity/DataCollection', action: 'Activate Step: attributesSelector' },
      { time: '2023-06-09T14:24:10.885Z', path: '/Entity/DataCollection', action: 'Activate Step: attributesSelector' },
      { time: '2023-06-09T14:24:10.902Z', path: '/Entity/DataCollection', action: 'Activate Step: attributesSelector' },
      {
        time: '2023-06-09T14:24:11.967Z',
        path: '/Entity/DataCollection',
        action: 'Activate Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      {
        time: '2023-06-09T14:24:11.977Z',
        path: '/Entity/DataCollection',
        action: 'Activate Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      {
        time: '2023-06-09T14:24:11.992Z',
        path: '/Entity/DataCollection',
        action: 'Activate Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      { time: '2023-06-09T14:24:18.405Z', path: '/Entity/DataCollection', action: 'Next Step: attributesSelector' },
      {
        time: '2023-06-09T14:24:18.406Z',
        path: '/Entity/DataCollection',
        action: 'Success Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      { time: '2023-06-09T14:24:18.425Z', path: '/Entity/DataCollection', action: 'Activate Step: attributesSelector' },
      {
        time: '2023-06-09T14:24:19.242Z',
        path: '/Entity/DataCollection',
        action: 'Next Step: cmf-core-controls-wizardStep-332',
      },
      { time: '2023-06-09T14:24:19.242Z', path: '/Entity/DataCollection', action: 'Success Step: attributesSelector' },
      {
        time: '2023-06-09T14:24:19.256Z',
        path: '/Entity/DataCollection',
        action: 'Activate Step: cmf-core-controls-wizardStep-332',
      },
      {
        time: '2023-06-09T14:24:21.917Z',
        path: '/Entity/DataCollection',
        action: 'Cancel: {"current":3,"total":5,"visible":4}',
      },
    ],
  },
  {
    component: 'wizard-1686320617257358',
    name: 'Create Change Set',
    events: [
      {
        time: '2023-06-09T14:23:37.269Z',
        path: '/Entity/DataCollection',
        action: 'New Steps: {"current":0,"total":0,"visible":0}',
      },
      { time: '2023-06-09T14:23:37.271Z', path: '/Entity/DataCollection', action: 'Start' },
      {
        time: '2023-06-09T14:23:37.341Z',
        path: '/Entity/DataCollection',
        action: 'New Steps: {"current":0,"total":4,"visible":2}',
      },
      { time: '2023-06-09T14:23:37.707Z', path: '/Entity/DataCollection', action: 'Activate Step: general_data_step' },
      {
        time: '2023-06-09T14:23:41.110Z',
        path: '/Entity/DataCollection',
        action: 'Cancel: {"current":0,"total":4,"visible":2}',
      },
    ],
  },
  {
    component: 'wizard-1686409005776174',
    name: 'Create Area',
    events: [
      {
        time: '2023-06-10T14:56:45.798Z',
        path: '/Entity/Area',
        action: 'New Steps: {"current":0,"total":0,"visible":0}',
      },
      { time: '2023-06-10T14:56:45.798Z', path: '/Entity/Area', action: 'Start' },
      {
        time: '2023-06-10T14:56:45.843Z',
        path: '/Entity/Area',
        action: 'New Steps: {"current":0,"total":4,"visible":2}',
      },
      {
        time: '2023-06-10T14:56:45.966Z',
        path: '/Entity/Area',
        action: 'Activate Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      { time: '2023-06-10T14:57:09.497Z', path: '/Entity/Area', action: 'Next Step: attributesSelector' },
      {
        time: '2023-06-10T14:57:09.497Z',
        path: '/Entity/Area',
        action: 'Success Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      { time: '2023-06-10T14:57:09.524Z', path: '/Entity/Area', action: 'Activate Step: attributesSelector' },
      { time: '2023-06-10T14:57:11.564Z', path: '/Entity/Area', action: 'Cancel: {"current":1,"total":4,"visible":2}' },
    ],
  },
  {
    component: 'wizard-1686413815185330',
    name: 'Create Area',
    events: [
      {
        time: '2023-06-10T16:16:55.208Z',
        path: '/Entity/Area',
        action: 'New Steps: {"current":0,"total":0,"visible":0}',
      },
      { time: '2023-06-10T16:16:55.210Z', path: '/Entity/Area', action: 'Start' },
      {
        time: '2023-06-10T16:16:55.232Z',
        path: '/Entity/Area',
        action: 'New Steps: {"current":0,"total":4,"visible":2}',
      },
      {
        time: '2023-06-10T16:16:55.329Z',
        path: '/Entity/Area',
        action: 'Activate Step: cmf.core.businessControls.wizardCreate.step.details',
      },
      { time: '2023-06-10T16:16:58.435Z', path: '/Entity/Area', action: 'Cancel: {"current":0,"total":4,"visible":2}' },
    ],
  },
  {
    component: 'wizard-1686413825720529',
    name: 'Create Rule',
    events: [
      {
        time: '2023-06-10T16:17:05.726Z',
        path: '/Entity/Rule',
        action: 'New Steps: {"current":0,"total":0,"visible":0}',
      },
      { time: '2023-06-10T16:17:05.727Z', path: '/Entity/Rule', action: 'Start' },
      {
        time: '2023-06-10T16:17:05.752Z',
        path: '/Entity/Rule',
        action: 'New Steps: {"current":0,"total":4,"visible":2}',
      },
      { time: '2023-06-10T16:17:05.840Z', path: '/Entity/Rule', action: 'Activate Step: general_data_step' },
      { time: '2023-06-10T16:17:19.622Z', path: '/Entity/Rule', action: 'Next Step: attributesSelector' },
      { time: '2023-06-10T16:17:19.623Z', path: '/Entity/Rule', action: 'Success Step: general_data_step' },
      { time: '2023-06-10T16:17:19.639Z', path: '/Entity/Rule', action: 'Activate Step: attributesSelector' },
      { time: '2023-06-10T16:17:23.152Z', path: '/Entity/Rule', action: 'Success Step: attributesSelector' },
      { time: '2023-06-10T16:17:23.323Z', path: '/Entity/Rule', action: 'Close: {"current":0,"total":4,"visible":1}' },
      {
        time: '2023-06-10T16:17:23.326Z',
        path: '/Entity/Rule',
        action: 'Complete: {"current":0,"total":4,"visible":1}',
      },
    ],
  },
  {
    component: 'wizard-1686413851957606',
    name: 'Import',
    events: [
      {
        time: '2023-06-10T16:17:31.970Z',
        path: '/Entity/Rule',
        action: 'New Steps: {"current":0,"total":1,"visible":1}',
      },
      { time: '2023-06-10T16:17:31.971Z', path: '/Entity/Rule', action: 'Start' },
      {
        time: '2023-06-10T16:17:31.984Z',
        path: '/Entity/Rule',
        action: 'Activate Step: cmf-core-controls-wizardStep-607',
      },
      { time: '2023-06-10T16:17:39.480Z', path: '/Entity/Rule', action: 'Cancel: {"current":0,"total":1,"visible":1}' },
    ],
  },
  {
    component: 'wizard-1686664079682110',
    name: 'Create Master Data Package',
    events: [
      {
        time: '2023-06-13T13:47:59.693Z',
        path: '/Administration/MasterDataPackage',
        action: 'New Steps: {"current":0,"total":0,"visible":0}',
      },
      { time: '2023-06-13T13:47:59.695Z', path: '/Administration/MasterDataPackage', action: 'Start' },
      {
        time: '2023-06-13T13:47:59.718Z',
        path: '/Administration/MasterDataPackage',
        action: 'New Steps: {"current":0,"total":4,"visible":1}',
      },
      {
        time: '2023-06-13T13:47:59.790Z',
        path: '/Administration/MasterDataPackage',
        action: 'Activate Step: cmf-core-controls-wizardStep-116',
      },
      {
        time: '2023-06-13T13:48:33.764Z',
        path: '/Administration/MasterDataPackage',
        action: 'Success Step: cmf-core-controls-wizardStep-116',
      },
      {
        time: '2023-06-13T13:48:34.268Z',
        path: '/Administration/MasterDataPackage',
        action: 'Close: {"current":0,"total":4,"visible":0}',
      },
      {
        time: '2023-06-13T13:48:34.272Z',
        path: '/Administration/MasterDataPackage',
        action: 'Complete: {"current":0,"total":4,"visible":0}',
      },
    ],
  },
  {
    component: 'wizard-1686664121405148',
    name: 'Load Master Data Package',
    events: [
      {
        time: '2023-06-13T13:48:41.440Z',
        path: '/Entity/MasterDataPackage/2306130112270000004/View/Details',
        action: 'New Steps: {"current":0,"total":1,"visible":1}',
      },
      {
        time: '2023-06-13T13:48:41.442Z',
        path: '/Entity/MasterDataPackage/2306130112270000004/View/Details',
        action: 'Start',
      },
      {
        time: '2023-06-13T13:48:41.880Z',
        path: '/Entity/MasterDataPackage/2306130112270000004/View/Details',
        action: 'Activate Step: sampleStep',
      },
      {
        time: '2023-06-13T13:48:59.469Z',
        path: '/Entity/MasterDataPackage/2306130112270000004/View/Details',
        action: 'Success Step: sampleStep',
      },
      {
        time: '2023-06-13T13:48:59.980Z',
        path: '/Entity/MasterDataPackage/2306130112270000004/View/Details',
        action: 'Close: {"current":0,"total":1,"visible":1}',
      },
      {
        time: '2023-06-13T13:48:59.983Z',
        path: '/Entity/MasterDataPackage/2306130112270000004/View/Details',
        action: 'Complete: {"current":0,"total":1,"visible":1}',
      },
    ],
  },
  {
    component: 'wizard-1686664458963234',
    name: 'Load Master Data Package',
    events: [
      {
        time: '2023-06-13T13:54:18.976Z',
        path: '/Entity/MasterDataPackage/2306130112270000004/View/Execution',
        action: 'New Steps: {"current":0,"total":1,"visible":1}',
      },
      {
        time: '2023-06-13T13:54:18.978Z',
        path: '/Entity/MasterDataPackage/2306130112270000004/View/Execution',
        action: 'Start',
      },
      {
        time: '2023-06-13T13:54:19.459Z',
        path: '/Entity/MasterDataPackage/2306130112270000004/View/Execution',
        action: 'Activate Step: sampleStep',
      },
      {
        time: '2023-06-13T13:54:22.868Z',
        path: '/Entity/MasterDataPackage/2306130112270000004/View/Execution',
        action: 'Success Step: sampleStep',
      },
      {
        time: '2023-06-13T13:54:23.308Z',
        path: '/Entity/MasterDataPackage/2306130112270000004/View/Execution',
        action: 'Close: {"current":0,"total":1,"visible":1}',
      },
      {
        time: '2023-06-13T13:54:23.311Z',
        path: '/Entity/MasterDataPackage/2306130112270000004/View/Execution',
        action: 'Complete: {"current":0,"total":1,"visible":1}',
      },
    ],
  },
  {
    component: 'wizard-1687950467766148',
    name: 'Dispatch and Track-In Material',
    events: [
      {
        time: '2023-06-28T11:07:47.806Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'New Steps: {"current":0,"total":16,"visible":1}',
      },
      {
        time: '2023-06-28T11:07:47.808Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Start',
      },
      {
        time: '2023-06-28T11:07:48.525Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.dispatch',
      },
    ],
  },
  {
    component: 'wizard-1687956300732231',
    name: 'Clone Material',
    events: [
      {
        time: '2023-06-28T12:45:00.751Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'New Steps: {"current":0,"total":0,"visible":0}',
      },
      {
        time: '2023-06-28T12:45:00.752Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Start',
      },
      {
        time: '2023-06-28T12:45:00.776Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'New Steps: {"current":0,"total":2,"visible":1}',
      },
      {
        time: '2023-06-28T12:45:00.884Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Activate Step: cmf.core.businessControls.wizardCloneEntity.step.details',
      },
      {
        time: '2023-06-28T12:45:33.019Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Success Step: cmf.core.businessControls.wizardCloneEntity.step.details',
      },
      {
        time: '2023-06-28T12:45:53.991Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Complete: {"current":1,"total":3,"visible":2}',
      },
      {
        time: '2023-06-28T12:45:54.013Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Activate Step: cmf-core-controls-wizardStep-232',
      },
      {
        time: '2023-06-28T12:45:57.251Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Close: {"current":0,"total":3,"visible":1}',
      },
    ],
  },
  {
    component: 'wizard-1687957049808231',
    name: 'Dispatch and Track-In Material',
    events: [
      {
        time: '2023-06-28T12:57:29.835Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'New Steps: {"current":0,"total":16,"visible":1}',
      },
      {
        time: '2023-06-28T12:57:29.837Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Start',
      },
      {
        time: '2023-06-28T12:57:30.661Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T12:57:34.979Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T12:57:38.122Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Close: {"current":0,"total":16,"visible":0}',
      },
      {
        time: '2023-06-28T12:57:38.125Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Complete: {"current":0,"total":16,"visible":0}',
      },
    ],
  },
  {
    component: 'wizard-1687957066179276',
    name: 'Track-Out and Move-Next Material',
    events: [
      {
        time: '2023-06-28T12:57:46.182Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'New Steps: {"current":0,"total":13,"visible":2}',
      },
      {
        time: '2023-06-28T12:57:46.183Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Start',
      },
      {
        time: '2023-06-28T12:57:47.508Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackout.step.resourceState',
      },
      {
        time: '2023-06-28T12:57:49.993Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Next Step: cmf.mes.material.trackout.step.moveNext',
      },
      {
        time: '2023-06-28T12:57:49.995Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackout.step.resourceState',
      },
      {
        time: '2023-06-28T12:57:50.019Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackout.step.moveNext',
      },
      {
        time: '2023-06-28T12:57:58.308Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackout.step.moveNext',
      },
      {
        time: '2023-06-28T12:58:00.717Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Complete: {"current":2,"total":14,"visible":3}',
      },
      {
        time: '2023-06-28T12:58:00.733Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf-core-controls-wizardStep-278',
      },
      {
        time: '2023-06-28T12:58:02.629Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Close: {"current":0,"total":14,"visible":1}',
      },
    ],
  },
  {
    component: 'wizard-1687957084210329',
    name: 'Dispatch and Track-In Material',
    events: [
      {
        time: '2023-06-28T12:58:04.213Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'New Steps: {"current":0,"total":16,"visible":1}',
      },
      {
        time: '2023-06-28T12:58:04.214Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Start',
      },
      {
        time: '2023-06-28T12:58:04.966Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T12:59:04.650Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Next Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T12:59:04.653Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T12:59:04.711Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T12:59:07.240Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Next Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T12:59:07.243Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T12:59:07.269Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T12:59:14.138Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T12:59:17.852Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Error',
      },
      {
        time: '2023-06-28T12:59:17.864Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf-core-controls-wizardStep-330',
      },
    ],
  },
  {
    component: 'wizard-1687961532100580',
    name: 'Perform Setup For Material at Resource',
    events: [
      {
        time: '2023-06-28T14:12:12.131Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'New Steps: {"current":0,"total":11,"visible":1}',
      },
      {
        time: '2023-06-28T14:12:12.132Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Start',
      },
      {
        time: '2023-06-28T14:12:22.422Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Activate Step: cmf.mes.resource.performsetup.step.resource',
      },
      {
        time: '2023-06-28T14:12:25.905Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Next Step: cmf.mes.resource.performsetup.step.durables.lineFlow',
      },
      {
        time: '2023-06-28T14:12:25.907Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Success Step: cmf.mes.resource.performsetup.step.resource',
      },
      {
        time: '2023-06-28T14:12:25.945Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Activate Step: cmf.mes.resource.performsetup.step.durables.lineFlow',
      },
      {
        time: '2023-06-28T14:12:30.914Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Next Step: cmf.mes.resource.performsetup.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:12:30.917Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Success Step: cmf.mes.resource.performsetup.step.durables.lineFlow',
      },
      {
        time: '2023-06-28T14:12:30.950Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Activate Step: cmf.mes.resource.performsetup.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:12:34.385Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Next Step: cmf.mes.material.performsetup.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:12:34.388Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Success Step: cmf.mes.resource.performsetup.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:12:34.441Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Activate Step: cmf.mes.material.performsetup.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:12:35.710Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Success Step: cmf.mes.material.performsetup.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:12:37.939Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Close: {"current":0,"total":11,"visible":0}',
      },
      {
        time: '2023-06-28T14:12:37.942Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Complete: {"current":0,"total":11,"visible":0}',
      },
    ],
  },
  {
    component: 'wizard-1687962017135236',
    name: 'Dispatch and Track-In Material',
    events: [
      {
        time: '2023-06-28T14:20:17.160Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'New Steps: {"current":0,"total":16,"visible":1}',
      },
      {
        time: '2023-06-28T14:20:17.161Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Start',
      },
      {
        time: '2023-06-28T14:20:20.166Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T14:20:29.186Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Next Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:20:29.189Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T14:20:29.262Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:20:31.741Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Next Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:20:31.744Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:20:31.770Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:20:42.970Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
    ],
  },
  {
    component: 'wizard-1687962540905153',
    name: 'Dispatch and Track-In Material',
    events: [
      {
        time: '2023-06-28T14:29:00.936Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'New Steps: {"current":0,"total":16,"visible":1}',
      },
      {
        time: '2023-06-28T14:29:00.937Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Start',
      },
      {
        time: '2023-06-28T14:29:01.528Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T14:29:06.150Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Next Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:29:06.153Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T14:29:06.223Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:29:07.911Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Next Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:29:07.914Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:29:07.938Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:29:14.316Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Fail Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:29:14.333Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:29:17.747Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:29:21.612Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Error',
      },
      {
        time: '2023-06-28T14:29:21.626Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf-core-controls-wizardStep-154',
      },
      {
        time: '2023-06-28T14:29:40.957Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Back Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:29:40.973Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:29:41.613Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Cancel: {"current":2,"total":17,"visible":4}',
      },
    ],
  },
  {
    component: 'wizard-1687962638620681',
    name: 'Dispatch and Track-In Material',
    events: [
      {
        time: '2023-06-28T14:30:38.629Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'New Steps: {"current":0,"total":16,"visible":1}',
      },
      {
        time: '2023-06-28T14:30:38.630Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Start',
      },
      {
        time: '2023-06-28T14:30:39.315Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T14:30:45.341Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Next Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:30:45.344Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T14:30:45.375Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:30:50.315Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Next Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:30:50.318Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:30:50.347Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:30:53.076Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:30:56.016Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Error',
      },
      {
        time: '2023-06-28T14:30:56.033Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf-core-controls-wizardStep-682',
      },
      {
        time: '2023-06-28T14:31:00.615Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Cancel: {"current":3,"total":17,"visible":4}',
      },
    ],
  },
]

export const mockExecutionViewData: ITrackerEventGroup[] = [
  {
    component: 'execution-view-1686664443297217',
    name: 'Edit Master Data Package',
    events: [
      {
        time: '2023-06-13T13:54:16.613Z',
        path: '/Entity/MasterDataPackage/2306130112270000004/View/Execution',
        action: 'Success',
      },
      {
        time: '2023-06-13T13:54:16.635Z',
        path: '/Entity/MasterDataPackage/2306130112270000004/View/Execution',
        action: 'Close',
      },
    ],
  },
  {
    component: 'execution-view-1686664852833241',
    name: 'Edit Material',
    events: [
      { time: '2023-06-13T14:00:54.420Z', path: '/Entity/Material/2306130033290000256/View/Details', action: 'Cancel' },
    ],
  },
]

export const mockEventsData: ITrackerEventGroup[] = [
  {
    component: 'base-action-button-168795043409511',
    name: 'Material.DispatchTrackIn',
    events: [
      {
        time: '2023-06-28T11:07:47.532Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Clicked',
      },
    ],
  },
  {
    component: 'base-action-button-168795704255294',
    name: 'Material.DispatchTrackIn',
    events: [
      {
        time: '2023-06-28T12:57:29.752Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Clicked',
      },
      {
        time: '2023-06-28T12:58:04.158Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Clicked',
      },
    ],
  },
  {
    component: 'base-action-button-168795704255297',
    name: 'Material.TrackOutMoveNext',
    events: [
      {
        time: '2023-06-28T12:57:46.109Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Clicked',
      },
    ],
  },
  {
    component: 'base-action-button-168796201512094',
    name: 'Material.DispatchTrackIn',
    events: [
      {
        time: '2023-06-28T14:20:17.080Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Clicked',
      },
    ],
  },
  {
    component: 'base-action-button-168796253500710',
    name: 'Material.DispatchTrackIn',
    events: [
      {
        time: '2023-06-28T14:29:00.694Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Clicked',
      },
      {
        time: '2023-06-28T14:30:38.550Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Clicked',
      },
    ],
  },
  {
    component: 'base-action-button-1687956294154190',
    name: 'Generic.Clone',
    events: [
      {
        time: '2023-06-28T12:45:00.675Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Clicked',
      },
    ],
  },
  {
    component: 'base-action-button-1687961064202125',
    name: 'Generic.Edit',
    events: [
      {
        time: '2023-06-28T14:04:30.940Z',
        path: '/apps/MES/Entity/Resource/2306230000120001058/View/Details',
        action: 'Clicked',
      },
    ],
  },
  {
    component: 'base-action-button-1687961170503299',
    name: 'Resource View',
    events: [
      {
        time: '2023-06-28T14:06:22.500Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/View/Details',
        action: 'Clicked',
      },
    ],
  },
  {
    component: 'base-action-button-1687961190992419',
    name: 'Resource.PerformSetup',
    events: [
      {
        time: '2023-06-28T14:12:12.034Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Clicked',
      },
    ],
  },
  {
    component: 'base-action-button-1687962605093306',
    name: 'Generic.Edit',
    events: [
      {
        time: '2023-06-28T14:30:10.760Z',
        path: '/apps/MES/Entity/Resource/2306230000120001058/View/Details',
        action: 'Clicked',
      },
    ],
  },
  {
    component: 'base-action-button-1687962619281415',
    name: 'Resource View',
    events: [
      {
        time: '2023-06-28T14:30:27.283Z',
        path: '/apps/MES/Entity/Resource/2306230000120001058/View/Details',
        action: 'Clicked',
      },
    ],
  },
  {
    component: 'execution-view-1687961070987157',
    name: 'Edit Resource',
    events: [
      {
        time: '2023-06-28T14:04:34.284Z',
        path: '/apps/MES/Entity/Resource/2306230000120001058/View/Details',
        action: 'Tab Change',
      },
      {
        time: '2023-06-28T14:04:51.634Z',
        path: '/apps/MES/Entity/Resource/2306230000120001058/View/Details',
        action: 'Success',
      },
      {
        time: '2023-06-28T14:04:51.670Z',
        path: '/apps/MES/Entity/Resource/2306230000120001058/View/Details',
        action: 'Close',
      },
    ],
  },
  {
    component: 'execution-view-1687962610817338',
    name: 'Edit Resource',
    events: [
      {
        time: '2023-06-28T14:30:13.215Z',
        path: '/apps/MES/Entity/Resource/2306230000120001058/View/Details',
        action: 'Tab Change',
      },
      {
        time: '2023-06-28T14:30:19.046Z',
        path: '/apps/MES/Entity/Resource/2306230000120001058/View/Details',
        action: 'Success',
      },
      {
        time: '2023-06-28T14:30:19.079Z',
        path: '/apps/MES/Entity/Resource/2306230000120001058/View/Details',
        action: 'Close',
      },
    ],
  },
  {
    component: 'wizard-1687950467766148',
    name: 'Dispatch and Track-In Material',
    events: [
      {
        time: '2023-06-28T11:07:47.806Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'New Steps: {"current":0,"total":16,"visible":1}',
      },
      {
        time: '2023-06-28T11:07:47.808Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Start',
      },
      {
        time: '2023-06-28T11:07:48.525Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.dispatch',
      },
    ],
  },
  {
    component: 'wizard-1687956300732231',
    name: 'Clone Material',
    events: [
      {
        time: '2023-06-28T12:45:00.751Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'New Steps: {"current":0,"total":0,"visible":0}',
      },
      {
        time: '2023-06-28T12:45:00.752Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Start',
      },
      {
        time: '2023-06-28T12:45:00.776Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'New Steps: {"current":0,"total":2,"visible":1}',
      },
      {
        time: '2023-06-28T12:45:00.884Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Activate Step: cmf.core.businessControls.wizardCloneEntity.step.details',
      },
      {
        time: '2023-06-28T12:45:33.019Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Success Step: cmf.core.businessControls.wizardCloneEntity.step.details',
      },
      {
        time: '2023-06-28T12:45:53.991Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Complete: {"current":1,"total":3,"visible":2}',
      },
      {
        time: '2023-06-28T12:45:54.013Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Activate Step: cmf-core-controls-wizardStep-232',
      },
      {
        time: '2023-06-28T12:45:57.251Z',
        path: '/apps/MES/Entity/Material/2306230000120000144/View/Details',
        action: 'Close: {"current":0,"total":3,"visible":1}',
      },
    ],
  },
  {
    component: 'wizard-1687957049808231',
    name: 'Dispatch and Track-In Material',
    events: [
      {
        time: '2023-06-28T12:57:29.835Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'New Steps: {"current":0,"total":16,"visible":1}',
      },
      {
        time: '2023-06-28T12:57:29.837Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Start',
      },
      {
        time: '2023-06-28T12:57:30.661Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T12:57:34.979Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T12:57:38.122Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Close: {"current":0,"total":16,"visible":0}',
      },
      {
        time: '2023-06-28T12:57:38.125Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Complete: {"current":0,"total":16,"visible":0}',
      },
    ],
  },
  {
    component: 'wizard-1687957066179276',
    name: 'Track-Out and Move-Next Material',
    events: [
      {
        time: '2023-06-28T12:57:46.182Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'New Steps: {"current":0,"total":13,"visible":2}',
      },
      {
        time: '2023-06-28T12:57:46.183Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Start',
      },
      {
        time: '2023-06-28T12:57:47.508Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackout.step.resourceState',
      },
      {
        time: '2023-06-28T12:57:49.993Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Next Step: cmf.mes.material.trackout.step.moveNext',
      },
      {
        time: '2023-06-28T12:57:49.995Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackout.step.resourceState',
      },
      {
        time: '2023-06-28T12:57:50.019Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackout.step.moveNext',
      },
      {
        time: '2023-06-28T12:57:58.308Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackout.step.moveNext',
      },
      {
        time: '2023-06-28T12:58:00.717Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Complete: {"current":2,"total":14,"visible":3}',
      },
      {
        time: '2023-06-28T12:58:00.733Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf-core-controls-wizardStep-278',
      },
      {
        time: '2023-06-28T12:58:02.629Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Close: {"current":0,"total":14,"visible":1}',
      },
    ],
  },
  {
    component: 'wizard-1687957084210329',
    name: 'Dispatch and Track-In Material',
    events: [
      {
        time: '2023-06-28T12:58:04.213Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'New Steps: {"current":0,"total":16,"visible":1}',
      },
      {
        time: '2023-06-28T12:58:04.214Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Start',
      },
      {
        time: '2023-06-28T12:58:04.966Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T12:59:04.650Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Next Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T12:59:04.653Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T12:59:04.711Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T12:59:07.240Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Next Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T12:59:07.243Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T12:59:07.269Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T12:59:14.138Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T12:59:17.852Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Error',
      },
      {
        time: '2023-06-28T12:59:17.864Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf-core-controls-wizardStep-330',
      },
    ],
  },
  {
    component: 'wizard-1687961532100580',
    name: 'Perform Setup For Material at Resource',
    events: [
      {
        time: '2023-06-28T14:12:12.131Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'New Steps: {"current":0,"total":11,"visible":1}',
      },
      {
        time: '2023-06-28T14:12:12.132Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Start',
      },
      {
        time: '2023-06-28T14:12:22.422Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Activate Step: cmf.mes.resource.performsetup.step.resource',
      },
      {
        time: '2023-06-28T14:12:25.905Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Next Step: cmf.mes.resource.performsetup.step.durables.lineFlow',
      },
      {
        time: '2023-06-28T14:12:25.907Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Success Step: cmf.mes.resource.performsetup.step.resource',
      },
      {
        time: '2023-06-28T14:12:25.945Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Activate Step: cmf.mes.resource.performsetup.step.durables.lineFlow',
      },
      {
        time: '2023-06-28T14:12:30.914Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Next Step: cmf.mes.resource.performsetup.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:12:30.917Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Success Step: cmf.mes.resource.performsetup.step.durables.lineFlow',
      },
      {
        time: '2023-06-28T14:12:30.950Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Activate Step: cmf.mes.resource.performsetup.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:12:34.385Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Next Step: cmf.mes.material.performsetup.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:12:34.388Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Success Step: cmf.mes.resource.performsetup.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:12:34.441Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Activate Step: cmf.mes.material.performsetup.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:12:35.710Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Success Step: cmf.mes.material.performsetup.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:12:37.939Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Close: {"current":0,"total":11,"visible":0}',
      },
      {
        time: '2023-06-28T14:12:37.942Z',
        path: '/apps/MES/Entity/Resource/2306230000120001099/ResourceView',
        action: 'Complete: {"current":0,"total":11,"visible":0}',
      },
    ],
  },
  {
    component: 'wizard-1687962017135236',
    name: 'Dispatch and Track-In Material',
    events: [
      {
        time: '2023-06-28T14:20:17.160Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'New Steps: {"current":0,"total":16,"visible":1}',
      },
      {
        time: '2023-06-28T14:20:17.161Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Start',
      },
      {
        time: '2023-06-28T14:20:20.166Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T14:20:29.186Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Next Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:20:29.189Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T14:20:29.262Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:20:31.741Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Next Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:20:31.744Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:20:31.770Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:20:42.970Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
    ],
  },
  {
    component: 'wizard-1687962540905153',
    name: 'Dispatch and Track-In Material',
    events: [
      {
        time: '2023-06-28T14:29:00.936Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'New Steps: {"current":0,"total":16,"visible":1}',
      },
      {
        time: '2023-06-28T14:29:00.937Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Start',
      },
      {
        time: '2023-06-28T14:29:01.528Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T14:29:06.150Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Next Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:29:06.153Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.dispatch',
      },
      {
        time: '2023-06-28T14:29:06.223Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:29:07.911Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Next Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:29:07.914Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.bom.lineFlow',
      },
      {
        time: '2023-06-28T14:29:07.938Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:29:14.316Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Fail Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:29:14.333Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:29:17.747Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Success Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:29:21.612Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Error',
      },
      {
        time: '2023-06-28T14:29:21.626Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf-core-controls-wizardStep-154',
      },
      {
        time: '2023-06-28T14:29:40.957Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Back Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:29:40.973Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Activate Step: cmf.mes.material.trackin.step.recipe.lineFlow',
      },
      {
        time: '2023-06-28T14:29:41.613Z',
        path: '/apps/MES/Entity/Material/2306280000140000001/View/Details',
        action: 'Cancel: {"current":2,"total":17,"visible":4}',
      },
    ],
  },
]
