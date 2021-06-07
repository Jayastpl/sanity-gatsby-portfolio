export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60bde260f1071176ff10d078',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-hs2f7g1p',
                  apiId: '930d335e-c47e-40e8-b521-06ddf951d8e4'
                },
                {
                  buildHookId: '60bde260c609841eac849717',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-yic53z4f',
                  apiId: 'ee0c127d-bb78-4b32-882f-a828bc03a067'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jayastpl/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-yic53z4f.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
