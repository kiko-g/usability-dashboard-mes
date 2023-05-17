import type { IWizardGroup } from '../@types';

export const mockWizardData: IWizardGroup[] = [
  {
    name: 'Create Employee',
    stats: {
      avgScore: 100,
      avgTimespan: 46.584,
      completed: 1,
      notCompleted: 0,
      totalErrors: 0,
      totalBackSteps: 0,
      avgErrors: 0,
      avgBackSteps: 0,
      completedRatio: 1,
      total: 1,
    },
    wizards: [
      {
        component: 'wizard-168420837143587',
        name: 'Create Employee',
        events: [
          { time: '2023-05-16T03:39:31.463Z', path: '/Entity/Employee', action: 'Start' },
          {
            time: '2023-05-16T03:39:31.617Z',
            path: '/Entity/Employee',
            action: 'Activate Step cmf.core.businessControls.wizardCreate.step.details',
          },
          {
            time: '2023-05-16T03:40:17.745Z',
            path: '/Entity/Employee',
            action: 'Success Step cmf.core.businessControls.wizardCreate.step.details',
          },
          { time: '2023-05-16T03:40:18.047Z', path: '/Entity/Employee', action: 'Complete' },
        ],
        score: 100,
        timespan: 46.584,
        completed: true,
        errorCount: 0,
        backStepCount: 0,
      },
    ],
  },
  {
    name: 'Create New Augmented Reality Tag',
    stats: {
      avgScore: 99,
      avgTimespan: 113.955,
      completed: 2,
      notCompleted: 1,
      totalErrors: 0,
      totalBackSteps: 0,
      avgErrors: 0,
      avgBackSteps: 0,
      completedRatio: 0.6666666666666666,
      total: 3,
    },
    wizards: [
      {
        component: 'wizard-168357091638068',
        name: 'Create New Augmented Reality Tag',
        events: [
          { time: '2023-05-08T18:35:16.414Z', path: '/Administration/AugmentedReality', action: 'Start' },
          {
            time: '2023-05-08T18:35:16.580Z',
            path: '/Administration/AugmentedReality',
            action: 'Activate Step cmf.core.augmentedreality.wizardCreateEditEntityTag.step.details',
          },
          {
            time: '2023-05-08T18:35:54.658Z',
            path: '/Administration/AugmentedReality',
            action: 'Success Step cmf.core.augmentedreality.wizardCreateEditEntityTag.step.details',
          },
          { time: '2023-05-08T18:35:54.851Z', path: '/Administration/AugmentedReality', action: 'Complete' },
        ],
        score: 100,
        timespan: 38.437,
        completed: true,
        errorCount: 0,
        backStepCount: 0,
      },
      {
        component: 'wizard-168373558363277',
        name: 'Create New Augmented Reality Tag',
        events: [
          { time: '2023-05-10T16:19:43.643Z', path: '/Administration/AugmentedReality', action: 'Start' },
          {
            time: '2023-05-10T16:19:43.784Z',
            path: '/Administration/AugmentedReality',
            action: 'Activate Step cmf.core.augmentedreality.wizardCreateEditEntityTag.step.details',
          },
          {
            time: '2023-05-10T16:21:13.642Z',
            path: '/Administration/AugmentedReality',
            action: 'Success Step cmf.core.augmentedreality.wizardCreateEditEntityTag.step.details',
          },
          { time: '2023-05-10T16:21:13.746Z', path: '/Administration/AugmentedReality', action: 'Complete' },
        ],
        score: 100,
        timespan: 90.103,
        completed: true,
        errorCount: 0,
        backStepCount: 0,
      },
      {
        component: 'wizard-1683735958646106',
        name: 'Create New Augmented Reality Tag',
        events: [
          { time: '2023-05-10T16:25:58.657Z', path: '/Administration/AugmentedReality', action: 'Start' },
          {
            time: '2023-05-10T16:25:58.789Z',
            path: '/Administration/AugmentedReality',
            action: 'Activate Step cmf.core.augmentedreality.wizardCreateEditEntityTag.step.details',
          },
          { time: '2023-05-10T16:29:31.982Z', path: '/Administration/AugmentedReality', action: 'Cancel' },
        ],
        score: 97,
        timespan: 213.325,
        completed: false,
        errorCount: 0,
        backStepCount: 0,
      },
    ],
  },
  {
    name: 'Create Container',
    stats: {
      avgScore: 85,
      avgTimespan: 36.434,
      completed: 0,
      notCompleted: 1,
      totalErrors: 1,
      totalBackSteps: 1,
      avgErrors: 1,
      avgBackSteps: 1,
      completedRatio: 0,
      total: 1,
    },
    wizards: [
      {
        component: 'wizard-1684192743412563',
        name: 'Create Container',
        events: [
          { time: '2023-05-15T23:19:03.420Z', path: '/Entity/Container', action: 'Start' },
          {
            time: '2023-05-15T23:19:03.521Z',
            path: '/Entity/Container',
            action: 'Activate Step cmf.core.businessControls.wizardCreate.step.details',
          },
          {
            time: '2023-05-15T23:19:36.281Z',
            path: '/Entity/Container',
            action: 'Success Step cmf.core.businessControls.wizardCreate.step.details',
          },
          { time: '2023-05-15T23:19:36.432Z', path: '/Entity/Container', action: 'Error' },
          {
            time: '2023-05-15T23:19:36.452Z',
            path: '/Entity/Container',
            action: 'Activate Step cmf-core-controls-wizardStep-564',
          },
          {
            time: '2023-05-15T23:19:38.442Z',
            path: '/Entity/Container',
            action: 'Back Step cmf.core.businessControls.wizardCreate.step.details',
          },
          {
            time: '2023-05-15T23:19:38.466Z',
            path: '/Entity/Container',
            action: 'Activate Step cmf.core.businessControls.wizardCreate.step.details',
          },
          {
            time: '2023-05-15T23:19:39.852Z',
            path: '/Entity/Container',
            action: 'Next Step cmf-core-controls-wizardStep-564',
          },
          {
            time: '2023-05-15T23:19:39.854Z',
            path: '/Entity/Container',
            action: 'Success Step cmf.core.businessControls.wizardCreate.step.details',
          },
        ],
        score: 85,
        timespan: 36.434,
        completed: false,
        errorCount: 1,
        backStepCount: 1,
      },
    ],
  },
  {
    name: 'Create Area',
    stats: {
      avgScore: 82,
      avgTimespan: 23.125333333333334,
      completed: 0,
      notCompleted: 3,
      totalErrors: 3,
      totalBackSteps: 4,
      avgErrors: 1,
      avgBackSteps: 1.3333333333333333,
      completedRatio: 0,
      total: 3,
    },
    wizards: [
      {
        component: 'wizard-168423247652696',
        name: 'Create Area',
        events: [
          { time: '2023-05-16T10:21:16.540Z', path: '/Entity/Area', action: 'Start' },
          {
            time: '2023-05-16T10:21:16.695Z',
            path: '/Entity/Area',
            action: 'Activate Step cmf.core.businessControls.wizardCreate.step.details',
          },
        ],
        score: 100,
        timespan: 0.155,
        completed: false,
        errorCount: 0,
        backStepCount: 0,
      },
      {
        component: 'wizard-1684176743528121',
        name: 'Create Area',
        events: [
          { time: '2023-05-15T18:52:23.550Z', path: '/Entity/Area', action: 'Start' },
          {
            time: '2023-05-15T18:52:23.723Z',
            path: '/Entity/Area',
            action: 'Activate Step cmf.core.businessControls.wizardCreate.step.details',
          },
          {
            time: '2023-05-15T18:52:44.218Z',
            path: '/Entity/Area',
            action: 'Fail Step cmf.core.businessControls.wizardCreate.step.details',
          },
          { time: '2023-05-15T18:52:52.721Z', path: '/Entity/Area', action: 'Next Step attributesSelector' },
          {
            time: '2023-05-15T18:52:52.725Z',
            path: '/Entity/Area',
            action: 'Success Step cmf.core.businessControls.wizardCreate.step.details',
          },
          { time: '2023-05-15T18:52:52.754Z', path: '/Entity/Area', action: 'Activate Step attributesSelector' },
          {
            time: '2023-05-15T18:52:54.932Z',
            path: '/Entity/Area',
            action: 'Back Step cmf.core.businessControls.wizardCreate.step.details',
          },
          {
            time: '2023-05-15T18:52:54.958Z',
            path: '/Entity/Area',
            action: 'Activate Step cmf.core.businessControls.wizardCreate.step.details',
          },
          { time: '2023-05-15T18:52:56.279Z', path: '/Entity/Area', action: 'Next Step attributesSelector' },
          {
            time: '2023-05-15T18:52:56.282Z',
            path: '/Entity/Area',
            action: 'Success Step cmf.core.businessControls.wizardCreate.step.details',
          },
          { time: '2023-05-15T18:52:56.300Z', path: '/Entity/Area', action: 'Activate Step attributesSelector' },
          { time: '2023-05-15T18:53:02.998Z', path: '/Entity/Area', action: 'Success Step attributesSelector' },
          { time: '2023-05-15T18:53:03.063Z', path: '/Entity/Area', action: 'Error' },
          {
            time: '2023-05-15T18:53:03.091Z',
            path: '/Entity/Area',
            action: 'Activate Step cmf-core-controls-wizardStep-122',
          },
          { time: '2023-05-15T18:53:05.332Z', path: '/Entity/Area', action: 'Back Step attributesSelector' },
          { time: '2023-05-15T18:53:05.347Z', path: '/Entity/Area', action: 'Activate Step attributesSelector' },
          {
            time: '2023-05-15T18:53:07.448Z',
            path: '/Entity/Area',
            action: 'Success Step cmf-core-controls-wizardStep-122',
          },
          { time: '2023-05-15T18:53:07.452Z', path: '/Entity/Area', action: 'Success Step attributesSelector' },
          { time: '2023-05-15T18:53:07.488Z', path: '/Entity/Area', action: 'Error' },
          {
            time: '2023-05-15T18:53:07.509Z',
            path: '/Entity/Area',
            action: 'Activate Step cmf-core-controls-wizardStep-122',
          },
          { time: '2023-05-15T18:53:08.830Z', path: '/Entity/Area', action: 'Back Step attributesSelector' },
          { time: '2023-05-15T18:53:08.846Z', path: '/Entity/Area', action: 'Activate Step attributesSelector' },
          {
            time: '2023-05-15T18:53:09.380Z',
            path: '/Entity/Area',
            action: 'Back Step cmf.core.businessControls.wizardCreate.step.details',
          },
          {
            time: '2023-05-15T18:53:09.404Z',
            path: '/Entity/Area',
            action: 'Activate Step cmf.core.businessControls.wizardCreate.step.details',
          },
          { time: '2023-05-15T18:53:10.678Z', path: '/Entity/Area', action: 'Cancel' },
        ],
        score: 49,
        timespan: 47.128,
        completed: false,
        errorCount: 3,
        backStepCount: 4,
      },
      {
        component: 'wizard-1684176817142244',
        name: 'Create Area',
        events: [
          { time: '2023-05-15T18:53:37.151Z', path: '/Entity/Area', action: 'Start' },
          {
            time: '2023-05-15T18:53:37.273Z',
            path: '/Entity/Area',
            action: 'Activate Step cmf.core.businessControls.wizardCreate.step.details',
          },
          { time: '2023-05-15T18:53:56.319Z', path: '/Entity/Area', action: 'Next Step attributesSelector' },
          {
            time: '2023-05-15T18:53:56.323Z',
            path: '/Entity/Area',
            action: 'Success Step cmf.core.businessControls.wizardCreate.step.details',
          },
          { time: '2023-05-15T18:53:56.347Z', path: '/Entity/Area', action: 'Activate Step attributesSelector' },
          { time: '2023-05-15T18:53:59.244Z', path: '/Entity/Area', action: 'Cancel' },
        ],
        score: 97,
        timespan: 22.093,
        completed: false,
        errorCount: 0,
        backStepCount: 0,
      },
    ],
  },
];
