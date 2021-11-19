export const data = {
  name: 'Servizi',
  slug: 'servizi',
  blocks: [
    {
      shortname: 'hero-block',
      name: 'Servizi - Hero',
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
            value: '<h1>Alboran:<br/>Tutti i nostri servizi</h1>',
          },
        },
        {
          shortname: 'cover',
          name: 'cover',
          type: 'image',
          content: {
            src: '/images/servizi-cover.jpg',
          },
        },
      ],
    },
    {
      shortname: 'servizi-grid-block',
      name: 'Servizi Grid Block',
      position: 2,
      type: 'block',
      block: {
        id: 'servizi-grid-123456-block',
        name: 'Servizi Grid Block',
        shortname: 'servizi-grid-block',
      },
      fields: [
        {
          shortname: 'pulizie-e-sanificazioni',
          name: 'Pulizie E Sanificazioni',
          type: 'fieldset',
          position: 1,
          fieldset: {
            shortname: 'card-fieldset',
            name: 'Card Fieldset',
            fields: [
              {
                shortname: 'header',
                name: 'Header',
                type: 'string',
                content: {
                  value: 'Pulizie e Sanificazioni',
                },
              },
              {
                shortname: 'cover',
                name: 'Cover',
                type: 'image',
                content: {
                  src: '/images/servizi/pulizie-e-sanificazioni.jpg',
                  alt: '',
                },
              },
              {
                shortname: 'link',
                name: 'Link',
                type: 'link',
                content: {
                  url: '/servizi/pulizie-e-sanificazioni',
                  alt: '',
                },
              },
            ],
          },
        },
        {
          shortname: 'green-management',
          name: 'Green management',
          type: 'fieldset',
          position: 2,
          fieldset: {
            shortname: 'card-fieldset',
            name: 'Card Fieldset',
            fields: [
              {
                shortname: 'header',
                name: 'Header',
                type: 'string',
                content: {
                  value: 'Green management',
                },
              },
              {
                shortname: 'cover',
                name: 'Cover',
                type: 'image',
                content: {
                  src: '/images/servizi/ambiente-e-sostenibilita.jpg',
                  alt: '',
                },
              },
              {
                shortname: 'link',
                name: 'Link',
                type: 'link',
                content: {
                  url: '/servizi/green-management',
                  alt: '',
                },
              },
            ],
          },
        },
        {
          shortname: 'assemblaggi-e-cartotecnica',
          name: 'Assemblaggi e Cartotecnica',
          type: 'fieldset',
          position: 3,
          fieldset: {
            shortname: 'card-fieldset',
            name: 'Card Fieldset',
            fields: [
              {
                shortname: 'header',
                name: 'Header',
                type: 'string',
                content: {
                  value: 'Assemblaggi e cartotecnica',
                },
              },
              {
                shortname: 'cover',
                name: 'Cover',
                type: 'image',
                content: {
                  src: '/images/servizi/assemblaggi-e-cartotecnica.jpg',
                  alt: '',
                },
              },
              {
                shortname: 'link',
                name: 'Link',
                type: 'link',
                content: {
                  url: '/images/servizi/assemblaggi-e-cartotecnica',
                  alt: '',
                },
              },
            ],
          },
        },
        {
          shortname: 'digital-transformation',
          name: 'Digital Transformation',
          type: 'fieldset',
          position: 3,
          fieldset: {
            shortname: 'card-fieldset',
            name: 'Card Fieldset',
            fields: [
              {
                shortname: 'header',
                name: 'Header',
                type: 'string',
                content: {
                  value: 'Digital Transformation',
                },
              },
              {
                shortname: 'cover',
                name: 'Cover',
                type: 'image',
                content: {
                  src: '/images/servizi/digital-transformation.jpeg',
                  alt: '',
                },
              },
              {
                shortname: 'link',
                name: 'Link',
                type: 'link',
                content: {
                  url: '/servizi/digital-transformation',
                  alt: '',
                },
              },
            ],
          },
        },
        {
          shortname: 'logistica-e-magazzini',
          name: 'Logistica e magazzini',
          type: 'fieldset',
          position: 3,
          fieldset: {
            shortname: 'card-fieldset',
            name: 'Card Fieldset',
            fields: [
              {
                shortname: 'header',
                name: 'Header',
                type: 'string',
                content: {
                  value: 'Logistica e magazzini',
                },
              },
              {
                shortname: 'cover',
                name: 'Cover',
                type: 'image',
                content: {
                  src: '/images/servizi/logistica-e-magazzini.jpeg',
                  alt: '',
                },
              },
              {
                shortname: 'link',
                name: 'Link',
                type: 'link',
                content: {
                  url: '/servizi/logistica-e-magazzini',
                  alt: '',
                },
              },
            ],
          },
        },
        {
          shortname: 'servizi-bibliotecari',
          name: 'LServizi bibliotecari',
          type: 'fieldset',
          position: 3,
          fieldset: {
            shortname: 'card-fieldset',
            name: 'Card Fieldset',
            fields: [
              {
                shortname: 'header',
                name: 'Header',
                type: 'string',
                content: {
                  value: 'Servizi bibliotecari',
                },
              },
              {
                shortname: 'cover',
                name: 'Cover',
                type: 'image',
                content: {
                  src: '/images/servizi/servizi-bibliotecari.jpeg',
                  alt: '',
                },
              },
              {
                shortname: 'link',
                name: 'Link',
                type: 'link',
                content: {
                  url: '/servizi/servizi-bibliotecari',
                  alt: '',
                },
              },
            ],
          },
        },
        {
          shortname: 'facility-management',
          name: 'Facility Management',
          type: 'fieldset',
          position: 3,
          fieldset: {
            shortname: 'card-fieldset',
            name: 'Card Fieldset',
            fields: [
              {
                shortname: 'header',
                name: 'Header',
                type: 'string',
                content: {
                  value: 'Facility Management',
                },
              },
              {
                shortname: 'cover',
                name: 'Cover',
                type: 'image',
                content: {
                  src: '/images/servizi/facility-management.jpeg',
                  alt: '',
                },
              },
              {
                shortname: 'link',
                name: 'Link',
                type: 'link',
                content: {
                  url: '/servizi/facility-management',
                  alt: '',
                },
              },
            ],
          },
        },
        {
          shortname: 'realizzazione-video',
          name: 'Realizzazione Video',
          type: 'fieldset',
          position: 3,
          fieldset: {
            shortname: 'card-fieldset',
            name: 'Card Fieldset',
            fields: [
              {
                shortname: 'header',
                name: 'Header',
                type: 'string',
                content: {
                  value: 'Realizzazione Video',
                },
              },
              {
                shortname: 'cover',
                name: 'Cover',
                type: 'image',
                content: {
                  src: '/images/servizi/realizzazione-video.jpg',
                  alt: '',
                },
              },
              {
                shortname: 'link',
                name: 'Link',
                type: 'link',
                content: {
                  url: '/servizi/realizzazione-video',
                  alt: '',
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
            value: 'Hai più di 15 dipendenti?',
          },
        },
        {
          shortname: 'paragraph',
          name: 'Paragraph',
          type: 'richtext',
          content: {
            value:
              'Allora saprai che la Legge n° 68/99 prescrive l’assunzione di personale appartenente alle <strong>categorie protette.</strong> Per l’azienda che non rispetta l’obbligo sono previste <strong>pesanti sanzioni</strong>, oltre all’impossibilità di accedere ai bandi pubblici e privati, per via del <strong>mancato ottenimento del certificato di ottemperanza.</strong>',
          },
        },
        {
          shortname: 'title-2',
          name: 'Title 2',
          type: 'richtext',
          content: {
            value: 'Perché sceglierci?',
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
            <h3>Per i benefici della Convenzione Art.14</h3>
            <p>La convenzione in art. 14 consente l’<strong>assunzione</strong> del lavoratore con disabilità <strong>da parte della cooperativa</strong> a fronte di una commessa di lavoro affidata dall’azienda.</p>
          </li>
          <li>
            <h3>Per la completa gestione del lavoratore</h3>
            <p>Alboran si farà <strong>carico della commessa di lavoro affidata dall’azienda nella sua globalità.</strong></p>
          </li>
          <li>
              <h3>Per rispettare la normativa vigente</h3>
              <p>Per tutta la durata della convenzione l’Azienda computa nella propria <strong>quota d’obbligo il lavoratore</strong> (Legge 68/99)</p>
            </li>
          </ul>`,
          },
        },
      ],
    },
    {
      shortname: 'service-contacts-block',
      name: 'Service Contacts Block',
      position: 4,
      type: 'block',
      block: {
        id: 'contact-form-block-123456789',
        name: 'Contact Form Block',
        shortname: 'contact-form-block',
      },
      fields: [
        {
          shortname: 'title',
          name: 'title',
          type: 'richtext',
          content: {
            value: `
              <p>
                Ti interessa questo servizio e vorresti <u>saperne di più</u>?
              </p>
              <br/>
              <p>
                Facciamo due <u>chiacchere</u>!
              </p>
            `,
          },
        },
        {
          shortname: 'form',
          name: 'Form',
          type: 'string',
          content: {
            id: '123456',
            method: 'GET',
            action: '/123456',
          },
        },
      ],
    },
  ],
};
