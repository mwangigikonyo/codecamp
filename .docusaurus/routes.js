
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/doc4/',
    component: ComponentCreator('/doc4/','610'),
    exact: true
  },
  {
    path: '/doc4/__docusaurus/debug',
    component: ComponentCreator('/doc4/__docusaurus/debug','b7e'),
    exact: true
  },
  {
    path: '/doc4/__docusaurus/debug/config',
    component: ComponentCreator('/doc4/__docusaurus/debug/config','919'),
    exact: true
  },
  {
    path: '/doc4/__docusaurus/debug/content',
    component: ComponentCreator('/doc4/__docusaurus/debug/content','dae'),
    exact: true
  },
  {
    path: '/doc4/__docusaurus/debug/globalData',
    component: ComponentCreator('/doc4/__docusaurus/debug/globalData','af4'),
    exact: true
  },
  {
    path: '/doc4/__docusaurus/debug/metadata',
    component: ComponentCreator('/doc4/__docusaurus/debug/metadata','e5e'),
    exact: true
  },
  {
    path: '/doc4/__docusaurus/debug/registry',
    component: ComponentCreator('/doc4/__docusaurus/debug/registry','b43'),
    exact: true
  },
  {
    path: '/doc4/__docusaurus/debug/routes',
    component: ComponentCreator('/doc4/__docusaurus/debug/routes','dd3'),
    exact: true
  },
  {
    path: '/doc4/blog',
    component: ComponentCreator('/doc4/blog','967'),
    exact: true
  },
  {
    path: '/doc4/blog/archive',
    component: ComponentCreator('/doc4/blog/archive','3d1'),
    exact: true
  },
  {
    path: '/doc4/blog/first-blog-post',
    component: ComponentCreator('/doc4/blog/first-blog-post','c15'),
    exact: true
  },
  {
    path: '/doc4/blog/long-blog-post',
    component: ComponentCreator('/doc4/blog/long-blog-post','80c'),
    exact: true
  },
  {
    path: '/doc4/blog/mdx-blog-post',
    component: ComponentCreator('/doc4/blog/mdx-blog-post','78e'),
    exact: true
  },
  {
    path: '/doc4/blog/tags',
    component: ComponentCreator('/doc4/blog/tags','5ef'),
    exact: true
  },
  {
    path: '/doc4/blog/tags/docusaurus',
    component: ComponentCreator('/doc4/blog/tags/docusaurus','ace'),
    exact: true
  },
  {
    path: '/doc4/blog/tags/facebook',
    component: ComponentCreator('/doc4/blog/tags/facebook','79e'),
    exact: true
  },
  {
    path: '/doc4/blog/tags/hello',
    component: ComponentCreator('/doc4/blog/tags/hello','b3d'),
    exact: true
  },
  {
    path: '/doc4/blog/tags/hola',
    component: ComponentCreator('/doc4/blog/tags/hola','735'),
    exact: true
  },
  {
    path: '/doc4/blog/welcome',
    component: ComponentCreator('/doc4/blog/welcome','5f1'),
    exact: true
  },
  {
    path: '/doc4/docs/tags',
    component: ComponentCreator('/doc4/docs/tags','c2e'),
    exact: true
  },
  {
    path: '/doc4/markdown-page',
    component: ComponentCreator('/doc4/markdown-page','f42'),
    exact: true
  },
  {
    path: '/doc4/docs',
    component: ComponentCreator('/doc4/docs','554'),
    routes: [
      {
        path: '/doc4/docs/intro',
        component: ComponentCreator('/doc4/docs/intro','443'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/doc4/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/doc4/docs/tutorial-basics/congratulations','364'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/doc4/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/doc4/docs/tutorial-basics/create-a-blog-post','5c7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/doc4/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/doc4/docs/tutorial-basics/create-a-document','3c4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/doc4/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/doc4/docs/tutorial-basics/create-a-page','6ec'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/doc4/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/doc4/docs/tutorial-basics/deploy-your-site','f86'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/doc4/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/doc4/docs/tutorial-basics/markdown-features','aea'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/doc4/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/doc4/docs/tutorial-extras/manage-docs-versions','ad2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/doc4/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/doc4/docs/tutorial-extras/translate-your-site','533'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
