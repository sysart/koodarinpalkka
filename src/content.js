const content = [
  {
    title: 'Rooli',
    shortTitle: 'role',
    description: 'Valitse parhaiten itseäsi kuvaava vaihtoehto:',
    options: [
      {
        text: 'Kykenen tiimin jäsenenä itsenäiseen työskentelyyn ilman muiden opastusta. Minulla ei ole merkittäviä tiimin toimintaan vaikuttavia vastuita.',
        id: 'pro',
      },
      {
        text: 'Vastaan tiimin tai tuotteen osalta arkkitehtuurista, suunnittelupäätöksistä tms. Vaihtoehtoisesti vastaan tiimin asiakaslupauksen täyttymisestä.',
        id: 'consultant',
      },
      {
        text: 'Vastaan usean tiimin tai tuotteen osalta arkkitehtuurista, suunnittelupäätöksistä tms. Vaihtoehtoisesti vastaan usean tiimin asiakaslupauksen täyttymisestä.',
        id: 'battering-ram',
      },
    ],
  },
  {
    title: 'Työkokemus',
    shortTitle: 'experience',
    description: 'Mikä on työkokemuksesi alalta vuosina?',
  },
  {
    title: 'Toimipiste',
    shortTitle: 'city',
    description: '',
    options: [
      {
        text: 'Helsinki',
        id: 'helsinki',
      },
      {
        text: 'Oulu',
        id: 'oulu',
      },
    ],
  },
];

export default content;
