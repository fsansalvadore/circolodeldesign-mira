export const data = {
  name: 'Globals',
  slug: '',
  blocks: [
    {
      shortname: 'main-navigation',
      name: 'Main Navigation',
      position: 1,
      fields: [
        {
          shortname: 'link-1',
          name: 'Heading',
          type: 'richtext',
          value:
            '<h1>Servizi di <strong>pulizia</strong> e <strong>sanificazione</strong></h1>',
        },
        {
          shortname: 'bg-video',
          name: 'Bg Video',
          type: 'string',
          value: 'https://www.youtube.com/watch?v=_zd1NdeO5G0',
        },
      ],
    },
    {
      shortname: 'image-caption-block',
      name: 'Image Caption Block',
      position: 2,
      fields: [
        {
          shortname: 'image-small-1',
          name: 'Image 1',
          type: 'image',
          src: '',
          altText: '',
        },
        {
          shortname: 'image-small-2',
          name: 'Image 2',
          type: 'image',
          src: '',
          altText: '',
        },
        {
          id: '',
          shortname: 'title',
          name: 'Title',
          type: 'richtext',
          value: 'Descrizione generale del servizio che offriamo',
        },
        {
          id: '',
          shortname: 'paragraph',
          name: 'Paragraph',
          type: 'richtext',
          value:
            'Alboran vanta una pluriennale esperienza nel settore delle pulizie con la cooperativa sociale Bottega, specializzata in questa attività. Garantiamo spazi igienizzati e sanificati utilizzando prodotti e attrezzature specifiche',
        },
      ],
    },
  ],
};
