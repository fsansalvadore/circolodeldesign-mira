export const data = {
  name: 'Società trasparente',
  slug: 'societa-trasparente',
  blocks: [
    {
      shortname: 'hero-block',
      name: 'Contatti - Hero',
      position: 1,
      type: 'block',
      block: {
        id: 'hero-block-123456789',
        name: 'Hero Block',
        shortname: 'hero-block',
      },
      fields: [
        {
          shortname: 'heading',
          name: 'Heading',
          type: 'richtext',
          content: {
            value: 'Società trasparente',
          },
        },
        {
          shortname: 'cover',
          name: 'cover',
          type: 'image',
          content: {
            src: '/images/società-trasparente.png',
          },
        },
      ],
    },
    {
      shortname: 'certificazioni',
      name: 'Cerfiticazioni',
      position: 2,
      type: 'block',
      block: {
        id: 'sezione-certificazioni-123456789',
        name: 'Attestazioni block',
        shortname: 'attestazioni-block',
      },
      fields: [
        {
          shortname: 'lista-attestazioni',
          name: 'lista-attestazioni',
          type: 'collection',
          position: 2,
          content: {
            items: [
              {
                shortname: 'cerfiticazione-1',
                name: 'Cerfiticazione 1',
                type: 'link',
                position: 1,
                fields: [
                  {
                    shortname: 'titolo',
                    name: 'Griglia di rilevazione',
                    content: {
                      value: '<h1>Griglia di rilevazione</h1>',
                    },
                  },
                  {
                    shortname: 'file',
                    name: 'Griglia di rilevazione',
                    content: {
                      label: 'Griglia di rilevazione',
                      url: '/griglia-di-rilevazione',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                shortname: 'cerfiticazione-2',
                name: 'Cerfiticazione 2',
                type: 'link',
                position: 1,
                fields: [
                  {
                    shortname: 'titolo',
                    name: 'Attestazione',
                    content: {
                      value: 'Attestazione',
                    },
                  },
                  {
                    shortname: 'file',
                    name: 'Attestazione',
                    content: {
                      label: 'Attestazione',
                      url: '/attestazione',
                      target: '_blank',
                    },
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ]
}