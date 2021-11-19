export const data = {
  name: 'Lavora con noi',
  slug: 'lavora-con-noi',
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
            value: ' ',
          },
        },
        {
          shortname: 'cover',
          name: 'cover',
          type: 'image',
          content: {
            src: '/images/lavora-con-noi/cover.jpg',
          },
        },
      ],
    },
    {
      shortname: 'spacing-block',
      name: 'Spazio negativo',
      position: 2,
      type: 'block',
      block: {
        id: 'spacing-block-123456789',
        name: 'Spacing Block',
        shortname: 'spacing-block',
      },
      fields: [
        {
          shortname: 'spacing-desktop',
          name: 'Spacing Desktop',
          type: 'string',
          content: {
            value: '-100',
          },
        },
        {
          shortname: 'spacing-mobile',
          name: 'Spacing Mobile',
          type: 'string',
          content: {
            value: '-60',
          },
        },
      ],
    },
    {
      shortname: 'titolo-1',
      name: 'Titolo 1',
      position: 2,
      type: 'block',
      block: {
        id: 'section-title-block-123456789',
        name: 'Section Title Block',
        shortname: 'section-title-block',
      },
      fields: [
        {
          shortname: 'title-label',
          name: 'Title Label',
          type: 'string',
          content: {
            value: 'Scopri che cosa',
          },
        },
        {
          shortname: 'title',
          name: 'Title',
          type: 'text',
          content: {
            value: 'Significa lavorare con noi in Alboran',
          },
        },
        {
          shortname: 'alignment',
          name: 'Alignment',
          type: 'string',
          content: {
            value: 'left',
          },
        },
        {
          shortname: 'has-line',
          name: 'Has Line',
          type: 'boolean',
          content: {
            value: 'false',
          },
        },
        {
          shortname: 'has-white-label',
          name: 'Has White Label',
          type: 'boolean',
          content: {
            value: 'true',
          },
        },
      ],
    },
    {
      shortname: 'contenuto-cosa-significa',
      name: 'Contenuto - Cosa Significa',
      position: 3,
      type: 'block',
      block: {
        id: 'image-caption-block-123456789',
        name: 'Image Caption Block',
        shortname: 'image-caption-block',
      },
      fields: [
        {
          shortname: 'paragraph',
          name: 'Paragraph',
          type: 'text',
          content: {
            value: `
            <p>
            Il principale capitale di una Cooperativa Sociale è il <strong>capitale umano</strong>, composto dai suoi dipendenti e dai suoi soci.
            </p>
            <p>
            La nostra Cooperativa promuove <strong>azioni di sviluppo e cura</strong> verso tutti i dipendenti grazie a strumenti differenziati, con l’obiettivo di favorire lo sviluppo di <strong>percorsi professionali</strong> e formativi nei quali sia possibile un apprendimento continuo atto a mantenere e, ove possibile, migliorare le proprie competenze.
            </p>
            <p>
            Abbiamo particolarmente a cuore la promozione di un <strong>senso di appartenenza</strong> organizzativa, cardine dell’abitare la cooperativa, che sostiene il lavoro quotidiano di ciascuno di noi.
            </p>
            `,
          },
        },
        {
          shortname: 'higlight-text',
          name: 'Higlight text',
          type: 'text',
          content: {
            value: `
            <p>I lavoratori sono il nucleo vitale delle attività e dei progetti imprenditoriali</p>
            `,
          },
        },
        {
          shortname: 'image-highlight',
          name: 'Image Highlight',
          type: 'image',
          content: {
            src: '/images/lavora-con-noi/magazzino.jpg',
            alt: '',
          },
        },
      ],
    },
    {
      shortname: 'titolo-sezione---offerte',
      name: 'Titolo sezione - Offerte',
      position: 4,
      type: 'block',
      block: {
        id: 'section-title-block-123456789',
        name: 'Section Title Block',
        shortname: 'section-title-block',
      },
      fields: [
        {
          shortname: 'title-label',
          name: 'Title Label',
          type: 'string',
          content: {
            value: 'Le nostre',
          },
        },
        {
          shortname: 'title',
          name: 'Title',
          type: 'text',
          content: {
            value: 'Offerte di lavoro',
          },
        },
        {
          shortname: 'alignment',
          name: 'Alignment',
          type: 'string',
          content: {
            value: 'center',
          },
        },
        {
          shortname: 'has-line',
          name: 'Has Line',
          type: 'boolean',
          content: {
            value: 'false',
          },
        },
      ],
    },
    {
      shortname: 'team',
      name: 'Team',
      position: 2,
      type: 'block',
      block: {
        id: '123o3k49010',
        name: 'Image Quote List Block',
        shortname: 'carosello-immagine-citazione',
      },
      fields: [
        {
          shortname: 'nome-1',
          name: 'Nome 1',
          type: 'fieldset',
          position: 1,
          fieldset: {
            shortname: 'team-member-quote-fieldset',
            name: 'Team Member Quote Fieldset',
            fields: [
              {
                shortname: 'image',
                name: 'Image',
                type: 'image',
                content: {
                  src: '/offerte.jpg',
                  alt: '',
                },
              },
              {
                shortname: 'name',
                name: 'Name',
                type: 'string',
                content: {
                  value: 'Lorem Ipsum',
                },
              },
              {
                shortname: 'quote',
                name: 'Quote',
                type: 'text',
                content: {
                  value: `
                  <p><strong>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</strong> </p>
                  `,
                },
              },
            ],
          },
        },
        {
          shortname: 'nome-1',
          name: 'Nome 1',
          type: 'fieldset',
          position: 1,
          fieldset: {
            shortname: 'team-member-quote-fieldset',
            name: 'Team Member Quote Fieldset',
            fields: [
              {
                shortname: 'image',
                name: 'Image',
                type: 'image',
                content: {
                  src: '/offerte.jpg',
                  alt: '',
                },
              },
              {
                shortname: 'ruolo',
                name: 'Ruolo',
                type: 'string',
                content: {
                  value: 'Lorem Ipsum',
                },
              },
              {
                shortname: 'quote',
                name: 'Quote',
                type: 'text',
                content: {
                  value: `
                  <p><strong>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</strong> </p>
                  `,
                },
              },
            ],
          },
        },
        {
          shortname: 'nome-1',
          name: 'Nome 1',
          type: 'fieldset',
          position: 1,
          fieldset: {
            shortname: 'team-member-quote-fieldset',
            name: 'Team Member Quote Fieldset',
            fields: [
              {
                shortname: 'image',
                name: 'Image',
                type: 'image',
                content: {
                  src: '/offerte.jpg',
                  alt: '',
                },
              },
              {
                shortname: 'name',
                name: 'Name',
                type: 'string',
                content: {
                  value: 'Lorem Ipsum',
                },
              },
              {
                shortname: 'quote',
                name: 'Quote',
                type: 'text',
                content: {
                  value: `
                  <p><strong>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</strong> </p>
                  `,
                },
              },
            ],
          },
        },
      ],
    },
    {
      shortname: 'titolo-sezione---storie',
      name: 'Titolo sezione - Storie',
      position: 3,
      type: 'block',
      block: {
        id: 'section-title-block-123456789',
        name: 'Section Title Block',
        shortname: 'section-title-block',
      },
      fields: [
        {
          shortname: 'title-label',
          name: 'Title Label',
          type: 'string',
          content: {
            value: 'oppure inviaci una',
          },
        },
        {
          shortname: 'title',
          name: 'Title',
          type: 'text',
          content: {
            value: 'Candidatura libera',
          },
        },
        {
          shortname: 'alignment',
          name: 'Alignment',
          type: 'string',
          content: {
            value: 'center',
          },
        },
        {
          shortname: 'has-line',
          name: 'Has Line',
          type: 'boolean',
          content: {
            value: 'false',
          },
        },
      ],
    },
    {
      shortname: 'form-candidature',
      name: 'Form Candidature',
      position: 3,
      type: 'block',
      block: {
        id: 'application-form-block-123456789',
        name: 'Application Form Block',
        shortname: 'application-form-block',
      },
      fields: [],
    },
  ],
};
