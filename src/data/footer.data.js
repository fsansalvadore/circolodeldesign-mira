export const data = {
  name: 'Footer',
  slug: 'footer',
  blocks: [
    {
      shortname: 'socials',
      name: 'Socials',
      position: 1,
      fields: [
        {
          shortname: 'facebook',
          name: 'Facebook',
          type: 'link',
          content: {
            label: 'Facebook',
            url: 'https://www.facebook.com/alborancoop/',
            level: 1,
          },
        },
        {
          shortname: 'linkedin',
          name: 'Linkedin',
          type: 'link',
          content: {
            label: 'Linkedin',
            url: 'https://www.linkedin.com/company/alboran-cooperativa-sociale/about/',
            level: 1,
          },
        },
        {
          shortname: 'instagram',
          name: 'Instagram',
          type: 'link',
          content: {
            label: 'instagram',
            url: 'https://www.instagram.com/alborancooperativasociale/',
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
            src: '/alboran-logo-negative.svg',
          },
        },
      ],
    },
  ],
};
