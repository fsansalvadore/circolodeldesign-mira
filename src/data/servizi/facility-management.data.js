export const data = {
  name: 'Facility Management',
  slug: 'facility-management',
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
            value: '<h1>Facility Management</h1>',
          },
        },
        {
          shortname: 'cover',
          name: 'cover',
          type: 'image',
          content: {
            src: '/images/servizi/facility-management.jpeg',
          },
        },
      ],
    },
    {
      shortname: 'che-cosa-offriamo',
      name: 'Che cosa offriamo',
      position: 2,
      type: 'block',
      block: {
        id: 'sezione-mosaico-citazione-123456789',
        name: 'Image Mosaic Caption Block',
        shortname: 'sezione-mosaico-citazione',
      },
      fields: [
        {
          shortname: 'immagine-1',
          name: 'Immagine 1',
          type: 'image',
          content: {
            src: '/image-1.jpg',
            alt: '',
          },
        },
        {
          shortname: 'immagine-2',
          name: 'Immagine 2',
          type: 'image',
          content: {
            src: '/image-1.jpg',
            alt: '',
          },
        },
        {
          shortname: 'titolo',
          name: 'Titolo',
          type: 'text',
          content: {
            value: `
              <strong>Che cosa 
              vi offriamo</strong>
            `,
          },
        },
        {
          shortname: 'paragrafo',
          name: 'Paragrafo',
          type: 'text',
          content: {
            value: `
              <p>
              Vantiamo una pluriennale esperienza nel <strong>settore delle pulizie</strong> e garantiamo a tutti i clienti spazi igienizzati.
              <br/>
              Utilizziamo  prodotti e attrezzature a <strong>basso impatto ambientale</strong>.
              <br/>
              Operiamo in showroom, negozi, uffici, aziende, appartamenti privati e enti pubblici.              
              </p>
            `,
          },
        },
      ],
    },
    {
      shortname: 'servici-specifici',
      name: 'Servizi specifici',
      position: 3,
      type: 'block',
      block: {
        id: 'servizi-specifici-123456789',
        name: 'Highlight Values Block',
        shortname: 'servizi-specifici',
      },
      fields: [
        {
          shortname: 'title-label',
          name: 'Title Label',
          type: 'string',
          position: 0,
          content: {
            value: 'Scopri i nostri',
          },
        },
        {
          shortname: 'title',
          name: 'Title',
          type: 'string',
          position: 1,
          content: {
            value: 'Servizi specifici',
          },
        },
        {
          shortname: 'lista-servizi-specifici',
          name: 'Lista Servizi Specifici',
          type: 'collection',
          position: 2,
          items: [
            {
              shortname: 'pulizie-ordinarie',
              name: 'pulizie-ordinarie',
              type: 'string',
              position: 1,
              fields: [
                {
                  shortname: 'servizio',
                  content: {
                    value: 'Pulizie ordinarie e straordinarie',
                  },
                },
              ],
            },
            {
              shortname: 'pulizie-in-quota',
              name: 'pulizie-in-quota',
              type: 'string',
              position: 2,
              fields: [
                {
                  shortname: 'servizio',
                  content: {
                    value: 'Pulizie in quota',
                  },
                },
              ],
            },
            {
              shortname: 'pulizie-in-vani-accessori',
              name: 'pulizie-in-vani-accessori',
              type: 'string',
              position: 3,
              fields: [
                {
                  shortname: 'servizio',
                  content: {
                    value: 'Pulizie in vani accessori',
                  },
                },
              ],
            },
            {
              shortname: 'pulizie-in-atmosfera-protetta-e-sterile',
              name: 'pulizie-in-atmosfera-protetta-e-sterile',
              type: 'string',
              position: 4,
              fields: [
                {
                  shortname: 'servizio',
                  content: {
                    value: 'Pulizie in atmosfera protetta e sterile',
                  },
                },
              ],
            },
            {
              shortname: 'attivita-di-sanificazione-degli-ambienti',
              name: 'attivita-di-sanificazione-degli-ambienti',
              type: 'string',
              position: 5,
              fields: [
                {
                  shortname: 'servizio',
                  content: {
                    value: 'Attività di sanificazione degli ambienti',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      shortname: 'titolo-casi-studio',
      name: 'Titolo Casi Studio',
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
            value: 'I nostri',
          },
        },
        {
          shortname: 'title',
          name: 'Title',
          type: 'text',
          content: {
            value: 'Casi studio',
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
      shortname: 'carosello-casi-studio',
      name: 'Carosello Immagine Citazione',
      position: 5,
      type: 'block',
      block: {
        id: '123o3k49010',
        name: 'Image Quote List Block',
        shortname: 'carosello-casi-studio',
      },
      fields: [
        {
          shortname: 'casi-studio',
          name: 'casi-studio',
          type: 'collection',
          position: 1,
          content: {
            items: [
              {
                shortname: 'team-member-quote-fieldset',
                name: 'Team Member Quote Fieldset',
                fields: [
                  {
                    shortname: 'immagine',
                    name: 'Immagine',
                    type: 'image',
                    content: {
                      src: '/image-1.jpg',
                      alt: '',
                    },
                  },
                  {
                    shortname: 'frase',
                    name: 'Frase',
                    type: 'text',
                    content: {
                      value: '<h3>Sanificazione Stadio San Siro - 2020</h3>',
                    },
                  },
                  {
                    shortname: 'nome',
                    name: 'Nome',
                    type: 'string',
                    content: {
                      value: 'Inserimento lavorativo bla bla bla',
                    },
                  },
                ],
              },
              {
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
                    shortname: 'quote',
                    name: 'Quote',
                    type: 'text',
                    content: {
                      value: '<h3>Sanificazione Stadio San Siro - 2020</h3>',
                    },
                  },
                  {
                    shortname: 'name',
                    name: 'Name',
                    type: 'string',
                    content: {
                      value: 'Inserimento lavorativo bla bla bla',
                    },
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      shortname: 'header-small2',
      name: 'Header Small 2',
      type: 'block',
      block: {
        id: 'sezione-a-due-colonne-con-linea-123456789',
        name: 'Two Columns With Line Block',
        shortname: 'sezione-a-due-colonne-con-linea',
      },
      fields: [
        {
          shortname: 'titolo-1',
          name: 'titolo 1 ',
          type: 'richtext',
          content: {
            value: 'Hai più di 15 dipendenti?',
          },
        },
        {
          shortname: 'paragrafo-1',
          name: 'Paragrafo',
          type: 'richtext',
          content: {
            value:
              'Allora saprai che la Legge n° 68/99 prescrive l’assunzione di personale appartenente alle <strong>categorie protette.</strong> Per l’azienda che non rispetta l’obbligo sono previste <strong>pesanti sanzioni</strong>, oltre all’impossibilità di accedere ai bandi pubblici e privati, per via del <strong>mancato ottenimento del certificato di ottemperanza.</strong>',
          },
        },
        {
          shortname: 'titolo-2',
          name: 'Titolo 2',
          type: 'richtext',
          content: {
            value: 'Perché sceglierci?',
          },
        },
        {
          shortname: 'paragrafo-2',
          name: 'Paragrafo 2',
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
              </ul>
            `,
          },
        },
      ],
    },
    {
      shortname: 'cerfiticazioni',
      name: 'Cerfiticazioni',
      position: 5,
      type: 'block',
      block: {
        id: 'sezione-certificazioni-123456789',
        name: 'Documents Block',
        shortname: 'sezione-certificazioni',
      },
      fields: [
        {
          shortname: 'title-label',
          name: 'Title Label',
          type: 'string',
          content: {
            value: 'La nostra garanzia sono',
          },
        },
        {
          shortname: 'title',
          name: 'Title',
          type: 'string',
          content: {
            value: 'Le nostre certificazioni',
          },
        },
        {
          shortname: 'lista-certificazioni',
          name: 'lista-certificazioni',
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
                    shortname: 'titolo-certificazione',
                    name: 'CERTIFICAZIONE UNI EN-ISO 9001 DAL 1995',
                    content: {
                      value: 'CERTIFICAZIONE UNI EN-ISO 9001 DAL 1995',
                    },
                  },
                  {
                    shortname: 'file',
                    name: 'CERTIFICAZIONE UNI EN-ISO 9001 DAL 1995',
                    content: {
                      label: 'CERTIFICAZIONE UNI EN-ISO 9001 DAL 1995',
                      url: '/certificazione-UNI-EN-ISO-9001-dal-1995',
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
                    shortname: 'titolo-certificazione',
                    name: 'CERTIFICAZIONE UNI EN-ISO 9001 DAL 1995',
                    content: {
                      value: 'CERTIFICAZIONE UNI EN-ISO 9001 DAL 1995',
                    },
                  },
                  {
                    shortname: 'file',
                    name: 'CERTIFICAZIONE UNI EN-ISO 9001 DAL 1995',
                    content: {
                      label: 'CERTIFICAZIONE UNI EN-ISO 9001 DAL 1995',
                      url: '/certificazione-UNI-EN-ISO-9001-dal-1995',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                shortname: 'cerfiticazione-3',
                name: 'Cerfiticazione 3',
                type: 'link',
                position: 1,
                fields: [
                  {
                    shortname: 'titolo-certificazione',
                    name: 'CERTIFICAZIONE UNI EN-ISO 9001 DAL 1995',
                    content: {
                      value: 'CERTIFICAZIONE UNI EN-ISO 9001 DAL 1995',
                    },
                  },
                  {
                    shortname: 'file',
                    name: 'CERTIFICAZIONE UNI EN-ISO 9001 DAL 1995',
                    content: {
                      label: 'CERTIFICAZIONE UNI EN-ISO 9001 DAL 1995',
                      url: '/certificazione-UNI-EN-ISO-9001-dal-1995',
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
    {
      shortname: 'service-contacts-block',
      name: 'Service Contacts Block',
      position: 6,
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
