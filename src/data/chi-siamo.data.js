export const data = {
  name: 'Chi Siamo',
  slug: 'chi-siamo',
  blocks: [
    {
      shortname: 'hero-block',
      name: 'Chi Siamo - Hero',
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
            value: '<h1>Alboran:<br/>Chi siamo</h1>',
          },
        },
        {
          shortname: 'cover-image',
          name: 'cover',
          type: 'image',
          content: {
            src: '/images/chi-siamo-cover.jpg',
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
            value: 'Ci caratterizza e anima il nostro agire',
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
      ],
    },
    {
      shortname: 'contenuto-cosa-ci-anima',
      name: 'Contenuto - Cosa ci anima',
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
                Siamo una Cooperativa di tipo B, svolgiamo attività di <strong>inserimento lavorativo</strong> di <strong>persone svantaggiate</strong> (ai sensi della Legge 381/91).
                Promuoviamo l’integrazione sociale partendo dalla straordinarietà dei singoli individui.
                Crediamo fortemente che l’<strong>attività lavorativa</strong> aiuti a concretizzare processi di <strong>reinserimento sociale</strong>.
              </p>
              <p>
                Da oltre 25 anni riscopriamo giorno per giorno il <strong>valore del lavorare insieme</strong> con passione.
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
              <p>Chi ci sceglie lo fa perché oltre che avere uno scopo sociale orientato alle persone siamo in grado di fornire qualità, efficienza ed efficacia nei servizi che offriamo</p>
            `,
          },
        },
        {
          shortname: 'image-small-1',
          name: 'Image Small 1',
          type: 'image',
          content: {
            src: '/image-1.jpg',
            alt: '',
          },
        },
        {
          shortname: 'image-small-2',
          name: 'Image Small 2',
          type: 'image',
          content: {
            src: '/image-1.jpg',
            alt: '',
          },
        },
        {
          shortname: 'image-highlight',
          name: 'Image Highlight',
          type: 'image',
          content: {
            src: '/image-1.jpg',
            alt: '',
          },
        },
      ],
    },
    {
      shortname: 'titolo-sezione---Su-cosa-non-scendiamo-a-compromessi',
      name: 'Titolo sezione - Su cosa non scendiamo a compromessi',
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
            value: 'Scopri su cosa',
          },
        },
        {
          shortname: 'title',
          name: 'Title',
          type: 'text',
          content: {
            value: 'Non scendiamo mai a compromessi',
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
            value: 'true',
          },
        },
      ],
    },
    {
      shortname: 'griglia---valori',
      name: 'Griglia - Valori',
      position: 5,
      type: 'block',
      block: {
        id: 'features-grid-block-123456789',
        name: 'Features Grid Block',
        shortname: 'features-grid-block',
      },
      fields: [
        {
          shortname: 'inclusione',
          name: 'Inclusione',
          type: 'fieldset',
          position: 1,
          fieldset: {
            shortname: 'feature-fieldset',
            name: 'Feature Fieldset',
            fields: [
              {
                shortname: 'icon',
                name: 'Icon',
                type: 'image',
                content: {
                  src: '/together.svg',
                  alt: '',
                },
              },
              {
                shortname: 'label',
                name: 'Label',
                type: 'string',
                content: {
                  value: 'Inclusione',
                },
              },
              {
                shortname: 'title',
                name: 'Title',
                type: 'string',
                content: {
                  value: 'Consideriamo tutti senza pregiudizi',
                },
              },
              {
                shortname: 'paragraph',
                name: 'Paragraph',
                type: 'text',
                content: {
                  value:
                    '<p>Accogliamo le persone con cuore, per farle sentire come a casa. Siamo curiosi e ascoltiamo ogni volta che possiamo. Facciamo in modo che gli altri sappiano che teniamo a loro</p>',
                },
              },
            ],
          },
        },
        {
          shortname: 'inclusione',
          name: 'Inclusione',
          type: 'fieldset',
          position: 2,
          fieldset: {
            shortname: 'feature-fieldset',
            name: 'Feature Fieldset',
            fields: [
              {
                shortname: 'icon',
                name: 'Icon',
                type: 'image',
                content: {
                  src: '/together.svg',
                  alt: '',
                },
              },
              {
                shortname: 'label',
                name: 'Label',
                type: 'string',
                content: {
                  value: 'Inclusione',
                },
              },
              {
                shortname: 'title',
                name: 'Title',
                type: 'string',
                content: {
                  value: 'Consideriamo tutti senza pregiudizi',
                },
              },
              {
                shortname: 'paragraph',
                name: 'Paragraph',
                type: 'text',
                content: {
                  value:
                    '<p>Accogliamo le persone con cuore, per farle sentire come a casa. Siamo curiosi e ascoltiamo ogni volta che possiamo. Facciamo in modo che gli altri sappiano che teniamo a loro</p>',
                },
              },
            ],
          },
        },
        {
          shortname: 'inclusione',
          name: 'Inclusione',
          type: 'fieldset',
          position: 3,
          fieldset: {
            shortname: 'feature-fieldset',
            name: 'Feature Fieldset',
            fields: [
              {
                shortname: 'icon',
                name: 'Icon',
                type: 'image',
                content: {
                  src: '/together.svg',
                  alt: '',
                },
              },
              {
                shortname: 'label',
                name: 'Label',
                type: 'string',
                content: {
                  value: 'Inclusione',
                },
              },
              {
                shortname: 'title',
                name: 'Title',
                type: 'string',
                content: {
                  value: 'Consideriamo tutti senza pregiudizi',
                },
              },
              {
                shortname: 'paragraph',
                name: 'Paragraph',
                type: 'text',
                content: {
                  value:
                    '<p>Accogliamo le persone con cuore, per farle sentire come a casa. Siamo curiosi e ascoltiamo ogni volta che possiamo. Facciamo in modo che gli altri sappiano che teniamo a loro</p>',
                },
              },
            ],
          },
        },
        {
          shortname: 'inclusione',
          name: 'Inclusione',
          type: 'fieldset',
          position: 4,
          fieldset: {
            shortname: 'feature-fieldset',
            name: 'Feature Fieldset',
            fields: [
              {
                shortname: 'icon',
                name: 'Icon',
                type: 'image',
                content: {
                  src: '/together.svg',
                  alt: '',
                },
              },
              {
                shortname: 'label',
                name: 'Label',
                type: 'string',
                content: {
                  value: 'Inclusione',
                },
              },
              {
                shortname: 'title',
                name: 'Title',
                type: 'string',
                content: {
                  value: 'Consideriamo tutti senza pregiudizi',
                },
              },
              {
                shortname: 'paragraph',
                name: 'Paragraph',
                type: 'text',
                content: {
                  value:
                    '<p>Accogliamo le persone con cuore, per farle sentire come a casa. Siamo curiosi e ascoltiamo ogni volta che possiamo. Facciamo in modo che gli altri sappiano che teniamo a loro</p>',
                },
              },
            ],
          },
        },
        {
          shortname: 'inclusione',
          name: 'Inclusione',
          type: 'fieldset',
          position: 5,
          fieldset: {
            shortname: 'feature-fieldset',
            name: 'Feature Fieldset',
            fields: [
              {
                shortname: 'icon',
                name: 'Icon',
                type: 'image',
                content: {
                  src: '/together.svg',
                  alt: '',
                },
              },
              {
                shortname: 'label',
                name: 'Label',
                type: 'string',
                content: {
                  value: 'Inclusione',
                },
              },
              {
                shortname: 'title',
                name: 'Title',
                type: 'string',
                content: {
                  value: 'Consideriamo tutti senza pregiudizi',
                },
              },
              {
                shortname: 'paragraph',
                name: 'Paragraph',
                type: 'text',
                content: {
                  value:
                    '<p>Accogliamo le persone con cuore, per farle sentire come a casa. Siamo curiosi e ascoltiamo ogni volta che possiamo. Facciamo in modo che gli altri sappiano che teniamo a loro</p>',
                },
              },
            ],
          },
        },
        {
          shortname: 'inclusione',
          name: 'Inclusione',
          type: 'fieldset',
          position: 6,
          fieldset: {
            shortname: 'feature-fieldset',
            name: 'Feature Fieldset',
            fields: [
              {
                shortname: 'icon',
                name: 'Icon',
                type: 'image',
                content: {
                  src: '/together.svg',
                  alt: '',
                },
              },
              {
                shortname: 'label',
                name: 'Label',
                type: 'string',
                content: {
                  value: 'Inclusione',
                },
              },
              {
                shortname: 'title',
                name: 'Title',
                type: 'string',
                content: {
                  value: 'Consideriamo tutti senza pregiudizi',
                },
              },
              {
                shortname: 'paragraph',
                name: 'Paragraph',
                type: 'text',
                content: {
                  value:
                    '<p>Accogliamo le persone con cuore, per farle sentire come a casa. Siamo curiosi e ascoltiamo ogni volta che possiamo. Facciamo in modo che gli altri sappiano che teniamo a loro</p>',
                },
              },
            ],
          },
        },
      ],
    },
    {
      shortname: 'stats-grid',
      name: 'Stats Grid',
      position: 6,
      type: 'block',
      block: {
        id: 'stats-grid-block-123456789',
        name: 'Stats Grid Block',
        shortname: 'stats-grid-block',
      },
      fields: [
        {
          shortname: 'title-label',
          name: 'Title Label',
          type: 'string',
          position: 1,
          content: {
            value: 'I numeri che ci rendono orgogliosi',
          },
        },
        {
          shortname: 'stats',
          name: 'Stats',
          type: 'list-repeater',
          position: 2,
          fields: [
            {
              shortname: 'stats-1',
              name: 'stats-1',
              type: 'fieldset',
              position: 1,
              fieldset: {
                shortname: 'stats-number-fieldset',
                name: 'Stats Number Fieldset',
                fields: [
                  {
                    shortname: 'value',
                    name: 'Value',
                    type: 'string',
                    content: {
                      value: '117',
                    },
                  },
                  {
                    shortname: 'label',
                    name: 'Label',
                    type: 'string',
                    content: {
                      value: 'Lavoratori',
                    },
                  },
                ],
              },
            },
            {
              shortname: 'stats-2',
              name: 'stats-2',
              type: 'fieldset',
              position: 2,
              fieldset: {
                shortname: 'stats-number-fieldset',
                name: 'Stats Number Fieldset',
                fields: [
                  {
                    shortname: 'value',
                    name: 'Value',
                    type: 'string',
                    content: {
                      value: '108',
                    },
                  },
                  {
                    shortname: 'label',
                    name: 'Label',
                    type: 'string',
                    content: {
                      value: 'Soci',
                    },
                  },
                ],
              },
            },
            {
              shortname: 'stats-3',
              name: 'stats-3',
              type: 'fieldset',
              position: 3,
              fieldset: {
                shortname: 'stats-number-fieldset',
                name: 'Stats Number Fieldset',
                fields: [
                  {
                    shortname: 'value',
                    name: 'Value',
                    type: 'string',
                    content: {
                      value: '40',
                    },
                  },
                  {
                    shortname: 'label',
                    name: 'Label',
                    type: 'string',
                    content: {
                      value: 'inserimenti lavorativi',
                    },
                  },
                ],
              },
            },
            {
              shortname: 'stats-4',
              name: 'stats-4',
              type: 'fieldset',
              position: 4,
              fieldset: {
                shortname: 'stats-number-fieldset',
                name: 'Stats Number Fieldset',
                fields: [
                  {
                    shortname: 'value',
                    name: 'Value',
                    type: 'string',
                    content: {
                      value: '53%',
                    },
                  },
                  {
                    shortname: 'label',
                    name: 'Label',
                    type: 'string',
                    content: {
                      value: 'donne',
                    },
                  },
                ],
              },
            },
            {
              shortname: 'stats-5',
              name: 'stats-5',
              type: 'fieldset',
              position: 5,
              fieldset: {
                shortname: 'stats-number-fieldset',
                name: 'Stats Number Fieldset',
                fields: [
                  {
                    shortname: 'value',
                    name: 'Value',
                    type: 'string',
                    content: {
                      value: '78%',
                    },
                  },
                  {
                    shortname: 'label',
                    name: 'Label',
                    type: 'string',
                    content: {
                      value: 'a tempo indeterminato',
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      shortname: 'titolo-sezione---da-dove-siamo-partiti',
      name: 'Titolo sezione - Da dove siamo partiti',
      position: 7,
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
            value: 'Scopri',
          },
        },
        {
          shortname: 'title',
          name: 'Title',
          type: 'text',
          content: {
            value: 'Un percorso lungo più di 25 anni',
          },
        },
        {
          shortname: 'alignment',
          name: 'Alignment',
          type: 'string',
          content: {
            value: 'right',
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
      shortname: 'image-paragraph-block',
      name: 'Image Paragraph block',
      position: 8,
      type: 'block',
      block: {
        id: '123o3k49010',
        name: 'Image Paragraph block',
        shortname: 'image-paragraph-block',
      },
      fields: [
        {
          shortname: 'is-inverted',
          name: 'Is Inverted',
          type: 'boolean',
          content: {
            value: 'false',
          },
        },
        {
          shortname: 'image',
          name: 'Image',
          type: 'image',
          content: {
            src: '/image-2.jpg',
            alt: '',
          },
        },
        {
          shortname: 'heading',
          name: 'Heading',
          type: 'text',
          content: {
            value: 'La nostra storia inizia da un porto molto lontano',
          },
        },
        {
          shortname: 'paragraph',
          name: 'Paragraph',
          type: 'text',
          content: {
            value: `
              <p>Corre l’anno <strong>1994</strong>: un gruppo di 9 coraggiosi avventurieri decide di fondare una Cooperativa Sociale di tipo A che si occupa di <strong>attività culturali e per il tempo libero</strong>.</p>
              <p>Il nome scelto è Alboran: Il <strong>mare di Alboran</strong> è la parte più occidentale del Mediterraneo, da sempre considerato da antichi e moderni navigatori un mare di buon auspicio perché se attraversato in un senso rappresenta l'avventura, la scoperta, la novità mentre se attraversato nell'altro senso rappresenta il ritorno a <strong>casa</strong>, la <strong>sicurezza</strong>, la <strong>tranquillità</strong>.</p>
            `,
          },
        },
      ],
    },
    {
      shortname: 'image-paragraph-block',
      name: 'Image Paragraph block',
      position: 9,
      type: 'block',
      block: {
        id: '123o3k49010',
        name: 'Image Paragraph block',
        shortname: 'image-paragraph-block',
      },
      fields: [
        {
          shortname: 'is-inverted',
          name: 'Is Inverted',
          type: 'boolean',
          content: {
            value: 'true',
          },
        },
        {
          shortname: 'image',
          name: 'Image',
          type: 'image',
          content: {
            src: '/image-1.jpg',
            alt: '',
          },
        },
        {
          shortname: 'heading',
          name: 'Heading',
          type: 'text',
          content: {
            value: 'I cambiamenti di rotta',
          },
        },
        {
          shortname: 'paragraph',
          name: 'Paragraph',
          type: 'text',
          content: {
            value: `
              <p>Corre l’anno <strong>1994</strong>: un gruppo di 9 coraggiosi avventurieri decide di fondare una Cooperativa Sociale di tipo A che si occupa di <strong>attività culturali e per il tempo libero</strong>.</p>
              <p>Il nome scelto è Alboran: Il <strong>mare di Alboran</strong> è la parte più occidentale del Mediterraneo, da sempre considerato da antichi e moderni navigatori un mare di buon auspicio perché se attraversato in un senso rappresenta l'avventura, la scoperta, la novità mentre se attraversato nell'altro senso rappresenta il ritorno a <strong>casa</strong>, la <strong>sicurezza</strong>, la <strong>tranquillità</strong>.</p>
            `,
          },
        },
      ],
    },
    {
      shortname: 'image-paragraph-block',
      name: 'Image Paragraph block',
      position: 10,
      type: 'block',
      block: {
        id: '123o3k49010',
        name: 'Image Paragraph block',
        shortname: 'image-paragraph-block',
      },
      fields: [
        {
          shortname: 'is-inverted',
          name: 'Is Inverted',
          type: 'boolean',
          content: {
            value: 'false',
          },
        },
        {
          shortname: 'image',
          name: 'Image',
          type: 'image',
          content: {
            src: '/image-2.jpg',
            alt: '',
          },
        },
        {
          shortname: 'heading',
          name: 'Heading',
          type: 'text',
          content: {
            value: 'Con il vento in poppa',
          },
        },
        {
          shortname: 'paragraph',
          name: 'Paragraph',
          type: 'text',
          content: {
            value: `
              <p>Corre l’anno <strong>1994</strong>: un gruppo di 9 coraggiosi avventurieri decide di fondare una Cooperativa Sociale di tipo A che si occupa di <strong>attività culturali e per il tempo libero</strong>.</p>
              <p>Il nome scelto è Alboran: Il <strong>mare di Alboran</strong> è la parte più occidentale del Mediterraneo, da sempre considerato da antichi e moderni navigatori un mare di buon auspicio perché se attraversato in un senso rappresenta l'avventura, la scoperta, la novità mentre se attraversato nell'altro senso rappresenta il ritorno a <strong>casa</strong>, la <strong>sicurezza</strong>, la <strong>tranquillità</strong>.</p>
            `,
          },
        },
      ],
    },
    {
      shortname: 'image-paragraph-block',
      name: 'Image Paragraph block',
      position: 11,
      type: 'block',
      block: {
        id: '123o3k49010',
        name: 'Image Paragraph block',
        shortname: 'image-paragraph-block',
      },
      fields: [
        {
          shortname: 'is-inverted',
          name: 'Is Inverted',
          type: 'boolean',
          content: {
            value: 'true',
          },
        },
        {
          shortname: 'image',
          name: 'Image',
          type: 'image',
          content: {
            src: '/image-1.jpg',
            alt: '',
          },
        },
        {
          shortname: 'heading',
          name: 'Heading',
          type: 'text',
          content: {
            value: 'Verso terre inesplorate',
          },
        },
        {
          shortname: 'paragraph',
          name: 'Paragraph',
          type: 'text',
          content: {
            value: `
              <p>Corre l’anno <strong>1994</strong>: un gruppo di 9 coraggiosi avventurieri decide di fondare una Cooperativa Sociale di tipo A che si occupa di <strong>attività culturali e per il tempo libero</strong>.</p>
              <p>Il nome scelto è Alboran: Il <strong>mare di Alboran</strong> è la parte più occidentale del Mediterraneo, da sempre considerato da antichi e moderni navigatori un mare di buon auspicio perché se attraversato in un senso rappresenta l'avventura, la scoperta, la novità mentre se attraversato nell'altro senso rappresenta il ritorno a <strong>casa</strong>, la <strong>sicurezza</strong>, la <strong>tranquillità</strong>.</p>
              <p>Corre l’anno <strong>1994</strong>: un gruppo di 9 coraggiosi avventurieri decide di fondare una Cooperativa Sociale di tipo A che si occupa di <strong>attività culturali e per il tempo libero</strong>.</p>
              <p>Il nome scelto è Alboran: Il <strong>mare di Alboran</strong> è la parte più occidentale del Mediterraneo, da sempre considerato da antichi e moderni navigatori un mare di buon auspicio perché se attraversato in un senso rappresenta l'avventura, la scoperta, la novità mentre se attraversato nell'altro senso rappresenta il ritorno a <strong>casa</strong>, la <strong>sicurezza</strong>, la <strong>tranquillità</strong>.</p>
            `,
          },
        },
      ],
    },
    {
      shortname: 'titolo-sezione---team',
      name: 'Titolo sezione - Team',
      position: 12,
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
            value: 'Le persone del',
          },
        },
        {
          shortname: 'title',
          name: 'Title',
          type: 'text',
          content: {
            value: 'Nostro team',
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
      position: 13,
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
                  src: '/image-1.jpg',
                  alt: '',
                },
              },
              {
                shortname: 'name',
                name: 'Name',
                type: 'string',
                content: {
                  value: 'Nome Cognome',
                },
              },
              {
                shortname: 'ruolo',
                name: 'Ruolo',
                type: 'string',
                content: {
                  value: 'Presidente della cooperativa',
                },
              },
              {
                shortname: 'quote',
                name: 'Quote',
                type: 'text',
                content: {
                  value: `
                  <h3>Il mio motto:</h3>
                  <p>
                  “Non siamo ricchi in base a ciò che possediamo, ma in base a ciò che
                  possiamo fare senza possedere nulla.”
                  </p>
                  <h3>Cosa mi piace di Alboran:</h3>
                  <p>L’unicità e le potenzialità</p>
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
                  src: '/image-1.jpg',
                  alt: '',
                },
              },
              {
                shortname: 'name',
                name: 'Name',
                type: 'string',
                content: {
                  value: 'Nome Cognome',
                },
              },
              {
                shortname: 'ruolo',
                name: 'Ruolo',
                type: 'string',
                content: {
                  value: 'Presidente della cooperativa',
                },
              },
              {
                shortname: 'quote',
                name: 'Quote',
                type: 'text',
                content: {
                  value: `
                  <h3>Il mio motto:</h3>
                  <p>
                  “Non siamo ricchi in base a ciò che possediamo, ma in base a ciò che
                  possiamo fare senza possedere nulla.”
                  </p>
                  <h3>Cosa mi piace di Alboran:</h3>
                  <p>L’unicità e le potenzialità</p>
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
                  src: '/image-1.jpg',
                  alt: '',
                },
              },
              {
                shortname: 'name',
                name: 'Name',
                type: 'string',
                content: {
                  value: 'Nome Cognome',
                },
              },
              {
                shortname: 'ruolo',
                name: 'Ruolo',
                type: 'string',
                content: {
                  value: 'Presidente della cooperativa',
                },
              },
              {
                shortname: 'quote',
                name: 'Quote',
                type: 'text',
                content: {
                  value: `
                  <h3>Il mio motto:</h3>
                  <p>
                  “Non siamo ricchi in base a ciò che possediamo, ma in base a ciò che
                  possiamo fare senza possedere nulla.”
                  </p>
                  <h3>Cosa mi piace di Alboran:</h3>
                  <p>L’unicità e le potenzialità</p>
                  `,
                },
              },
            ],
          },
        },
      ],
    },
    {
      shortname: 'titolo-sezione---team',
      name: 'Titolo sezione - Bilancio',
      position: 14,
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
            value: 'Sfoglia i nostri',
          },
        },
        {
          shortname: 'title',
          name: 'Title',
          type: 'text',
          content: {
            value: 'Bilanci sociali',
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
      shortname: 'tasto---tutti-i-bilanci',
      name: 'Tasto - Tutti i bilanci',
      position: 15,
      type: 'block',
      block: {
        id: 'button-block-123456789',
        name: 'Button Block',
        shortname: 'button-block',
      },
      fields: [
        {
          shortname: 'button',
          name: 'Button',
          type: 'link',
          content: {
            label: 'Visualizza tutti',
            url: '/bilanci',
            target: '',
          },
        },
      ],
    },
    {
      shortname: 'sfoglia-bilanci',
      name: 'Sfoglia Bilanci',
      position: 16,
      type: 'block',
      block: {
        id: 'interactive-pdf-block-123456789',
        name: 'Interactive PDF Blocm',
        shortname: 'interactive-pdf-block',
      },
      fields: [
        {
          shortname: 'link',
          name: 'Link',
          type: 'link',
          content: {
            label: 'Sfoglia',
            url: '/asd',
            target: '',
          },
        },
        {
          shortname: 'image',
          name: 'Image',
          type: 'image',
          content: {
            src: '/image-1.jpg',
            alt: '',
          },
        },
      ],
    },
  ],
};
