export const data = {
  name: 'Contatti',
  slug: 'contatti',
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
          shortname: 'cover',
          name: 'cover',
          type: 'image',
          content: {
            src: '/images/map.jpg',
          },
        },
      ],
    },
    {
      shortname: 'contact-info-form-block',
      name: 'Contact Form Info Block',
      position: 1,
      type: 'block',
      block: {
        id: 'contact-info-form-block-123456789',
        name: 'Contact Form Info Block',
        shortname: 'contact-info-form-block',
      },
      fields: [
        {
          shortname: 'heading',
          name: 'Heading',
          type: 'string',
          content: {
            value: 'Vieni a trovarci!',
          },
        },
        {
          shortname: 'address',
          name: 'Address',
          type: 'richtext',
          content: {
            value: 'Via E. Toti 6 – 20068<br/>Peschiera Borromeo (MI)',
          },
        },
        {
          shortname: 'address-link',
          name: 'address-link',
          type: 'richtext',
          content: {
            value: 'https://goo.gl/maps/rJY5gJsTs8zoFUHj8',
          },
        },
        {
          shortname: 'tel',
          name: 'Tel',
          type: 'string',
          content: {
            value: '02 55303104',
          },
        },
        {
          shortname: 'email',
          name: 'Email',
          type: 'string',
          content: {
            value: 'alboran@alboran-coop.it',
          },
        },
        {
          shortname: 'orari-apertura',
          name: 'orari-apertura',
          type: 'string',
          content: {
            value: 'Lunedì - Venerdì: 9 - 17',
          },
        },
        {
          shortname: 'orari-chiusura',
          name: 'orari-chiusura',
          type: 'string',
          content: {
            value: 'Sabato e domenica: Chiuso',
          },
        },
        {
          shortname: 'form-heading',
          name: 'form-heading',
          type: 'text',
          content: {
            value: 'Facciamo due chiacchiere!',
          },
        },
      ],
    },
    {
      shortname: 'titolo-sezione---Seguici',
      name: 'Titolo sezione - Seguici',
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
            value: ' ',
          },
        },
        {
          shortname: 'title',
          name: 'Title',
          type: 'text',
          content: {
            value: 'Seguici sui social',
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
      shortname: 'image-paragraph-block',
      name: 'Image Paragraph block',
      position: 3,
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
            src: '/lavora-con-noi.jpg',
            alt: '',
          },
        },
        {
          shortname: 'heading',
          name: 'Heading',
          type: 'text',
          content: {
            value: 'Lavora con noi!',
          },
        },
        {
          shortname: 'paragraph',
          name: 'Paragraph',
          type: 'text',
          content: {
            value: `
              <p>Entra nel team di Alboran inviando una <strong>candidatura spontanea</strong> o guardando le <strong>posizioni aperte</strong>!</p>
            `,
          },
        },
        {
          shortname: 'link',
          name: 'Link',
          type: 'link',
          content: {
            label: 'Scopri di più',
            url: '/contatti/lavora-con-noi',
          },
        },
      ],
    },
  ],
};
