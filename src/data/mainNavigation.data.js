export const data = {
  name: 'Main Navigation',
  slug: 'main-navigation',
  blocks: [
    {
      shortname: 'main-menu-item-1',
      name: 'Main Menu Item 1',
      position: 1,
      fields: [
        {
          shortname: 'home-page',
          name: 'Home Page',
          type: 'link',
          content: {
            label: 'Home Page',
            url: '/',
            level: 1,
          },
        },
        {
          shortname: 'chi-siamo',
          name: 'Chi siamo',
          type: 'link',
          content: {
            label: 'Chi siamo',
            url: '/chi-siamo',
            level: 1,
          },
        },
        {
          shortname: 'servizi',
          name: 'Servizi',
          type: 'link',
          content: {
            label: 'Servizi',
            url: '/servizi',
            level: 1,
          },
        },
        {
          shortname: 'contatti',
          name: 'Contatti',
          type: 'link',
          content: {
            label: 'Contatti',
            url: '/contatti',
            level: 1,
          },
        },
        {
          shortname: 'sostienici',
          name: 'Sostienici',
          type: 'link',
          content: {
            label: 'Sostienici',
            url: '/sostienici',
            level: 1,
          },
        },
      ],
    },
    {
      shortname: 'brand-logo',
      name: 'Brand Logo',
      position: 2,
      fields: [
        {
          shortname: 'logo',
          name: 'Logo',
          type: 'image',
          content: {
            alt: 'Alboran Logo',
            src: '/alboran-logo.svg',
          },
        },
      ],
    },
  ],
};
