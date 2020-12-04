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
    title: 'Bonus ja kehittyminen',
    description: 'Meillä kaikkien tavoitteena on käyttää keskimäärin 80 % työajasta asiakastyöhön eli hankkeisiin. Yli menevästä osasta voi itse päättää ja sitä voi hyödyntää esimerkiksi osaamisensa kehittämiseen. Jos kuitenkin tekee työtä yli 80 % tavoitteen, siitä hyvitetään lisäbonuksella. Kuinka suuren osan vapaasti päätettävästä työajasta haluaisit käyttää lisäansioiden tienaamiseen?',
  },
  {
    title: 'Liikevoitto',
    description: 'Bonuksen suuruuteen vaikuttaa omien laskutettavien tuntien lisäksi myös koko yrityksen kannattavuus. Bonus on joka tilanteessa vähintään 30% kaikista 80% tavoitteen yli menevistä laskutetuista tunneista. Yhteisenä tavoitteenamme on vähintään 10% liikevoitto, jolloin bonusprosentti on 50. Mikäli onnistumme yrityksenä vieläkin paremmin, bonukseen oikeuttavien tuntien alaraja voi laskea 75, 70 tai jopa 65 prosenttiin kaikista tunneista.',
  },
];

export default content;
