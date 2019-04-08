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
  {
    title: 'Työpiste',
    shortTitle: 'location',
    description: 'Toimitko mieluummin omalta toimistolta käsin vai oletko valmis työskentelemään asiakkaan tiloissa?',
    options: [
      {
        text: 'Omalta toimistolta',
        id: 'office',
      },
      {
        text: 'Asiakkaan tiloissa',
        id: 'customer',
      },
    ],
  },
  {
    title: 'Bonus ja kehittyminen',
    description: 'Meillä kaikkien tavoitteena on käyttää keskimäärin 80 % työajasta asiakastyöhön eli hankkeisiin. Yli menevästä osasta voi itse päättää ja sitä voi hyödyntää esimerkiksi osaamisensa kehittämiseen. Jos kuitenkin tekee työtä yli 80 % tavoitteen, siitä hyvitetään lisäbonuksella. Kuinka suuren osan vapaasti päätettävästä työajasta haluaisit käyttää lisäansioiden tienaamiseen?',
  },
];

export default content;
