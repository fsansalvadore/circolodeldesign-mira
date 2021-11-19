export const data = {
  name: 'Home Page',
  slug: 'index',
  blocks: [
    {
      shortname: 'homepage-hero-block',
      name: 'Homepage Hero',
      position: 1,
      type: 'block',
      block: {
        id: 'hero-block-123456789',
        name: 'Hero Block',
        shortname: 'hero-block-home',
      },
      fields: [
        {
          shortname: 'label',
          name: 'Label',
          type: 'string',
          content: { value: 'La nostra missione è:' },
        },
        {
          shortname: 'heading',
          name: 'Heading',
          type: 'richtext',
          content: {
            value:
              '<h1>Sviluppare nuove <u>possibilità</u>, creare <u>connessioni</u> e <u>contaminazioni</u></h1>',
          },
        },
        {
          shortname: 'link',
          name: 'Link',
          type: 'link',
          content: {
            label: 'Scopri di più',
            url: '#benefici',
            target: '',
          },
        },
        {
          shortname: 'cover-image',
          name: 'Cover Image',
          type: 'gif',
          content: {
            src: '/hp-cover.jpeg',
          },
        },
      ],
    },
    {
      shortname: 'titolo-sezione---lavora',
      name: 'Titolo sezione - Lavora',
      position: 3,
      type: 'block',
      block: {
        id: 'section-title-block-123456789',
        name: 'Section Title Block',
        shortname: 'section-title-block',
      },
      fields: [
        {
          shortname: 'anchor',
          name: 'Anchor',
          type: 'string',
          content: {
            value: 'benefici',
          },
        },
        {
          shortname: 'title-label',
          name: 'Title Label',
          type: 'string',
          content: {
            value: 'I benefici di',
          },
        },
        {
          shortname: 'title',
          name: 'Title',
          type: 'text',
          content: {
            value: 'Lavorare con noi',
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
      shortname: 'header-small2',
      name: 'Header Small 2',
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
                <p>La convenzione in art.14 consente l’<strong>assunzione</strong> del lavoratore con disabilità <strong>da parte della cooperativa</strong> a fronte di una commessa di lavoro affidata dall’azienda.</p>
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
      shortname: 'titolo-sezione---servizi',
      name: 'Titolo sezione - Servizi',
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
            value: 'Scopri tutti',
          },
        },
        {
          shortname: 'title',
          name: 'Title',
          type: 'text',
          content: {
            value: 'I nostri servizi',
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
      shortname: 'call-to-action-cover-block',
      name: 'Call To Action Cover Block',
      position: 5,
      type: 'block',
      block: {
        id: '123o3k490101',
        name: 'Call To Action Cover Block',
        shortname: 'call-to-action-cover-block',
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
            src: '/images/servizi/pulizie-e-sanificazioni.jpg',
            alt: '',
          },
        },
        {
          shortname: 'heading',
          name: 'Heading',
          type: 'text',
          content: {
            value: 'Pulizie e sanificazioni',
          },
        },
        {
          shortname: 'link',
          name: 'Link',
          type: 'link',
          content: {
            label: 'Scopri di più',
            url: '/servizi/pulizie-e-sanificazioni',
            target: '',
          },
        },
      ],
    },
    {
      shortname: 'call-to-action-cover-block',
      name: 'Call To Action Cover Block',
      position: 5,
      type: 'block',
      block: {
        id: '123o3k490101',
        name: 'Call To Action Cover Block',
        shortname: 'call-to-action-cover-block',
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
            src: '/images/servizi/logistica-e-magazzini.jpeg',
            alt: '',
          },
        },
        {
          shortname: 'heading',
          name: 'Heading',
          type: 'text',
          content: {
            value: 'Logistica e Magazzini',
          },
        },
        {
          shortname: 'link',
          name: 'Link',
          type: 'link',
          content: {
            label: 'Scopri di più',
            url: '/servizi/logistica-e-magazzini',
            target: '',
          },
        },
      ],
    },
    {
      shortname: 'call-to-action-cover-block',
      name: 'Call To Action Cover Block',
      position: 6,
      type: 'block',
      block: {
        id: '123o3k490101',
        name: 'Call To Action Cover Block',
        shortname: 'call-to-action-cover-block',
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
          shortname: 'heading',
          name: 'Heading',
          type: 'text',
          content: {
            value: 'Assemblaggi e cartotecnica',
          },
        },
        {
          shortname: 'image',
          name: 'Image',
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
            label: 'Scopri di più',
            url: '/servizi/assemblaggi-e-cartotecnica',
            target: '',
          },
        },
      ],
    },
    {
      shortname: 'call-to-action-cover-block',
      name: 'Call To Action Cover Block',
      position: 7,
      type: 'block',
      block: {
        id: '123o3k490101',
        name: 'Call To Action Cover Block',
        shortname: 'call-to-action-cover-block',
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
            src: '/images/servizi/digital-transformation.jpeg',
            alt: '',
          },
        },
        {
          shortname: 'heading',
          name: 'Heading',
          type: 'text',
          content: {
            value: 'Digital Transformation',
          },
        },
        {
          shortname: 'link',
          name: 'Link',
          type: 'link',
          content: {
            label: 'Scopri di più',
            url: '/servizi/digital-transformation',
            target: '',
          },
        },
      ],
    },
    {
      shortname: 'call-to-action-cover-block',
      name: 'Call To Action Cover Block',
      position: 8,
      type: 'block',
      block: {
        id: '123o3k490101',
        name: 'Call To Action Cover Block',
        shortname: 'call-to-action-cover-block',
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
            src: '/images/servizi/facility-management.jpeg',
            alt: '',
          },
        },
        {
          shortname: 'heading',
          name: 'Heading',
          type: 'text',
          content: {
            value: 'Facility Management',
          },
        },
        {
          shortname: 'link',
          name: 'Link',
          type: 'link',
          content: {
            label: 'Scopri di più',
            url: '/servizi/facility-management',
            target: '',
          },
        },
      ],
    },
    {
      shortname: 'call-to-action-cover-block',
      name: 'Call To Action Cover Block',
      position: 9,
      type: 'block',
      block: {
        id: '123o3k490101',
        name: 'Call To Action Cover Block',
        shortname: 'call-to-action-cover-block',
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
            src: '/images/servizi/servizi-bibliotecari.jpeg',
            alt: '',
          },
        },
        {
          shortname: 'heading',
          name: 'Heading',
          type: 'text',
          content: {
            value: 'Servizi bibliotecari',
          },
        },
        {
          shortname: 'link',
          name: 'Link',
          type: 'link',
          content: {
            label: 'Scopri di più',
            url: '/servizi/servizi-bibliotecari',
            target: '',
          },
        },
      ],
    },
    {
      shortname: 'call-to-action-cover-block',
      name: 'Call To Action Cover Block',
      position: 10,
      type: 'block',
      block: {
        id: '123o3k490101',
        name: 'Call To Action Cover Block',
        shortname: 'call-to-action-cover-block',
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
            src: '/images/servizi/ambiente-e-sostenibilita.jpg',
            alt: '',
          },
        },
        {
          shortname: 'heading',
          name: 'Heading',
          type: 'text',
          content: {
            value: 'Green management',
          },
        },
        {
          shortname: 'link',
          name: 'Link',
          type: 'link',
          content: {
            label: 'Scopri di più',
            url: '/servizi/green-management',
            target: '',
          },
        },
      ],
    },
    {
      shortname: 'call-to-action-cover-block',
      name: 'Call To Action Cover Block',
      position: 11,
      type: 'block',
      block: {
        id: '123o3k490101',
        name: 'Call To Action Cover Block',
        shortname: 'call-to-action-cover-block',
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
            src: '/images/servizi/realizzazione-video.jpg',
            alt: '',
          },
        },
        {
          shortname: 'heading',
          name: 'Heading',
          type: 'text',
          content: {
            value: 'Realizzazione Video',
          },
        },
        {
          shortname: 'link',
          name: 'Link',
          type: 'link',
          content: {
            label: 'Scopri di più',
            url: '/servizi/realizzazione-video',
            target: '',
          },
        },
      ],
    },
    {
      shortname: 'titolo-sezione---Dicono di noi',
      name: 'Titolo sezione - Dicono',
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
            value: 'che cosa',
          },
        },
        {
          shortname: 'title',
          name: 'Title',
          type: 'text',
          content: {
            value: 'Dicono di noi',
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
      shortname: 'testimonials',
      name: 'Testimonials',
      position: 13,
      type: 'block',
      block: {
        id: '176435218',
        name: 'Testimonials Block',
        shortname: 'testimonials-block',
      },
      fields: [
        {
          shortname: 'nome-1',
          name: 'Nome 1',
          type: 'fieldset',
          position: 1,
          fieldset: {
            shortname: 'testimonial-fieldset',
            name: 'Testimonial Fieldset',
            fields: [
              {
                shortname: 'image',
                name: 'Image',
                type: 'image',
                content: {
                  src: '/testimonial-1.png',
                  alt: '',
                },
              },
              {
                shortname: 'name',
                name: 'Name',
                type: 'string',
                content: {
                  value: 'nome e cognome',
                },
              },
              {
                shortname: 'ruolo',
                name: 'Ruolo',
                type: 'string',
                content: {
                  value: 'CEO',
                },
              },
              {
                shortname: 'quote',
                name: 'Quote',
                type: 'richtext',
                content: {
                  value:
                    '<strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam sed neque interdum semper eget vel odio. </strong>',
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
            shortname: 'testimonial-fieldset',
            name: 'Testimonial Fieldset',
            fields: [
              {
                shortname: 'image',
                name: 'Image',
                type: 'image',
                content: {
                  src: '/testimonial-1.png',
                  alt: '',
                },
              },
              {
                shortname: 'name',
                name: 'Name',
                type: 'string',
                content: {
                  value: 'nome e cognome',
                },
              },
              {
                shortname: 'ruolo',
                name: 'Ruolo',
                type: 'string',
                content: {
                  value: 'CEO',
                },
              },
              {
                shortname: 'quote',
                name: 'Quote',
                type: 'richtext',
                content: {
                  value:
                    '<strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam sed neque interdum semper eget vel odio. </strong>',
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
            shortname: 'testimonial-fieldset',
            name: 'Testimonial Fieldset',
            fields: [
              {
                shortname: 'image',
                name: 'Image',
                type: 'image',
                content: {
                  src: '/testimonial-1.png',
                  alt: '',
                },
              },
              {
                shortname: 'name',
                name: 'Name',
                type: 'string',
                content: {
                  value: 'nome e cognome',
                },
              },
              {
                shortname: 'ruolo',
                name: 'Ruolo',
                type: 'string',
                content: {
                  value: 'CEO',
                },
              },
              {
                shortname: 'quote',
                name: 'Quote',
                type: 'string',
                content: {
                  value:
                    '<strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam sed neque interdum semper eget vel odio.</strong>',
                },
              },
            ],
          },
        },
      ],
    },
    {
      shortname: 'titolo-sezione---Partner',
      name: 'Titolo sezione - Partner',
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
            value: 'I partner ed i clienti che',
          },
        },
        {
          shortname: 'title',
          name: 'Title',
          type: 'text',
          content: {
            value: 'Ci hanno scelto',
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
      shortname: 'affiliate-slider-block',
      name: 'Affiliate Slider Block',
      position: 15,
      type: 'block',
      block: {
        id: 'slider-123456',
        name: 'Affiliate Slider Block',
        shortname: 'affiliate-slider-block',
      },
      fields: [
        {
          shortname: 'logo-1',
          name: 'Logo 1',
          type: 'fieldset',
          position: 1,
          fieldset: {
            shortname: 'logo-banner',
            name: 'Logo Banner',
            fields: [
              {
                shortname: 'logo',
                name: 'Logo',
                type: 'image',
                content: {
                  src: '/affiliate-logo.jpg',
                  alt: '',
                },
              },
            ],
          },
        },
        {
          shortname: 'logo-1',
          name: 'Logo 1',
          type: 'fieldset',
          position: 1,
          fieldset: {
            shortname: 'logo-banner',
            name: 'Logo Banner',
            fields: [
              {
                shortname: 'logo',
                name: 'Logo',
                type: 'image',
                content: {
                  src: '/affiliate-logo.jpg',
                  alt: '',
                },
              },
            ],
          },
        },
        {
          shortname: 'logo-1',
          name: 'Logo 1',
          type: 'fieldset',
          position: 1,
          fieldset: {
            shortname: 'logo-banner',
            name: 'Logo Banner',
            fields: [
              {
                shortname: 'logo',
                name: 'Logo',
                type: 'image',
                content: {
                  src: '/affiliate-logo.jpg',
                  alt: '',
                },
              },
            ],
          },
        },
      ],
    },
  ],
};
