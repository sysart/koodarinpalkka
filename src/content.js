const content = [
  {
    title: 'Rooli',
    shortTitle: 'role',
    description: 'Valitse parhaiten itseäsi kuvaava vaihtoehto:',
    options: [
      {
        text: 'Olen kehityshaluinen ohjelmistokehittäjä, mutta tarvitsen vielä säännöllisesti muiden osaajien tukea.',
        id: 'future-pro',
      },
      {
        text: 'Kykenen tiimin jäsenenä itsenäiseen työskentelyyn ilman muiden opastusta.',
        id: 'pro',
      },
      {
        text: 'Toimin asiakasrajapinnassa ja autan asiakasta hyödyntämään teknologiaa liiketoiminnan edistämiseen. Vaihtoehtoisesti autan asiakasta kehittämään toimintatapojaan tai tiimiensä toimintakykyä.',
        id: 'consultant',
      },
      {
        text: 'Toimin koodaavana hankevetäjänä ja huolehdin asiakaslupauksen täyttymisestä sekä oman tiimin tehokkaasta työskentelystä.',
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
    title: 'Osaaminen',
    shortTitle: 'knowhow',
    description: 'Arvioi oma osaamiseesi (tekninen osaaminen, tiimin jäsenenä toimiminen, asiakastyytyväisyys jne.) suhteessa työkokemukseesi.',
    options: [
      {
        text: 'Osaamiseni ei kaikilta osin ole kokemusvuosieni edellyttämällä tasolla.',
        id: 'behind',
      },
      {
        text: 'Osaamiseni on kokemukseni edellyttämällä tasolla.',
        id: 'normal',
      },
      {
        text: 'Osaamiseni suhteutettuna kokemukseeni on keskimääräistä parempi.',
        id: 'ahead',
      },
    ],
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
