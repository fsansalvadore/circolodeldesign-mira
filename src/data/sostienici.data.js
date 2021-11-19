export const data = {
  name: 'Sostienici',
  slug: 'sostienici',
  blocks: [
    {
      shortname: 'hero-donation-block',
      name: 'Sostienici - Hero',
      position: 1,
      type: 'block',
      block: {
        id: 'hero-donation-block-123456789',
        name: 'Hero Donation Block',
        shortname: 'hero-donation-block',
      },
      fields: [
        {
          shortname: 'option-1',
          name: 'Option 1',
          type: 'string',
          content: {
            value: '€10,00',
            amount: 10,
          },
        },
        {
          shortname: 'option-2',
          name: 'Option 2',
          type: 'string',
          content: {
            value: '€25,00',
            amount: 25,
          },
        },
        {
          shortname: 'option-3',
          name: 'Option 3',
          type: 'string',
          content: {
            value: '€50,00',
            amount: 50,
          },
        },
        {
          shortname: 'option-4',
          name: 'Option 4',
          type: 'string',
          content: {
            value: '€75,00',
            amount: 75,
          },
        },
        {
          shortname: 'option-5',
          name: 'Option 5',
          type: 'string',
          content: {
            value: '€100,00',
            amount: 100,
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
            value: 'Avete permesso di realizzare',
          },
        },
        {
          shortname: 'title',
          name: 'Title',
          type: 'text',
          content: {
            value: 'Queste storie',
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
                  src: '/storie.jpg',
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
                  src: '/storie.jpg',
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
                  src: '/storie.jpg',
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
      shortname: 'sezione-a-due-colonne-con-linea',
      name: 'Two Columns With Line Block',
      position: 3,
      type: 'block',
      block: {
        id: 'header-small-block-123456789',
        name: 'Header Small Block',
        shortname: 'header-small-block',
      },
      fields: [
        {
          shortname: 'title-1',
          name: 'Title 1 ',
          type: 'richtext',
          content: {
            value: 'Dona il tuo 5x1000',
          },
        },
        {
          shortname: 'paragraph',
          name: 'Paragraph',
          type: 'richtext',
          content: {
            value:
              'Firma la <strong>dichiarazione dei redditi (730, CUD, UNICO)</strong> nel primo riquadro in alto a sinista: sostegno del volentariato e delle altre organizzazioni non lucrative di attività sociali e scrivi il nostro <strong>codice fiscale:</strong>',
          },
        },
        {
          shortname: 'title-2',
          name: 'Title 2',
          type: 'richtext',
          content: {
            value: 'Perché?',
          },
        },
        {
          shortname: 'list-items',
          name: 'List Items',
          type: 'richtext',
          content: {
            value: `
            <ul>
            <li>
              <h3>Non ti costa nulla, non è una tassa in più!</h3>
            </li>
            <li>
              <h3>Non sostituisce l’8x1000 destinato alle confessioni religiose</h3>
            </li>
            <li>
              <h3>Da oltre 20 anni aiutiamo persone svantaggiate o disabili ad 
            </li>
            </ul>`,
          },
        },
      ],
    },
  ],
};
