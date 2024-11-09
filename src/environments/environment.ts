export const environment = {
  appColors: {
    highlight: '#CC2F40'
  },
  contact: {
    name: 'Delisystem',
    socials: [
      {
        label: 'instagram',
        path: 'https://www.instagram.com/runordie_assessoria/',
      },
      {
        label: 'tiktok',
        path: 'https://www.tiktok.com/@walison_rodrigues7',
      },
    ] as {label: string, path: string, icon?: string}[]
  },

  navlinks: [
    {
      id: 'home',
      label: 'início',
    },
    {
      id: 'about',
      label: 'sobre',
    },
    {
      id: 'services',
      label: 'serviços',
    },
    {
      id: 'pricing',
      label: 'planos',
    },
    {
      id: 'testimonials',
      label: 'testemunhos',
    },
  ],
};
