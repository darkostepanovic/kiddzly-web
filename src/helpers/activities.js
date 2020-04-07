import mojeTelo from '../assets/images/activities/mojeTelo.png';

import gdeMoguDaBudemJa from '../assets/images/activities/gdeMoguDaBudemJa.png';
import illustration1 from '../assets/images/activities/illustration1.png';
import mojaPijaca from '../assets/images/activities/mojaPijaca.png';
import muzickiKlipovi from '../assets/images/activities/muzickiKlipovi.png';

export default [
  {
    id: 1,
    featured: true,
    title: 'AUTOPERIONICA',
    subtitle: '(uzrast od 2 godine)',
    goals: ['Osvešćivanje važnosti održavanja čistoće igračaka'],
    image: illustration1,
    missions: ['Očistiti igračke'],
    description:
      'Najavite svojim klincima da pripreme igračke koje ćete tog dana prati. Zajedno pripremite lavor vode i sapunicu. Dozvolite deci da uživaju u ovoj aktivnosti, nije potrebno je da ih često opominjete da ne prskaju sa strane ili da detaljno očiste svaku igračku. Možete ih povremeno usmeriti, ali nemojte slati poruku da to što rade nije dovoljno dobro. Učestvujte tako što ćete dodavati igračke ili ćete uzeti sunđer i prati igračke kao dete.',
    guides: [],
  },
  {
    id: 2,
    featured: true,
    title: 'GDE MOGU DA BUDEM JA?',
    subtitle: '(uzrast od 2,5 godine)',
    goals: [
      'Znati razlikovati prostorne relacije (na, ispod, ispred, iza, pored)',
    ],
    image: gdeMoguDaBudemJa,
    missions: [
      'Zauzeti jednu od pozicija u odnosu na stolicu (na, ispod, ispred, iza, pored)',
      'Vežbati prostorne relacije pomoću predmeta (omiljena lutka, igračka, jastuk)',
    ],
    description:
      'Postavite stolicu na sredinu sobe. Možete odmah iznenaditi dete tako što ćete se podvući ispod stolice i reći: Ja ležim ispod stolice. Pitajte dete da li ono želi da sedne ispod stolice. Kada sedne, pitajte ga: Gde sad sediš? i Šta misliš koju smo novu reč sad naučili? Svaki put kada naučite reč za novu relaciju naglasite to pitanjima i proverite da li ih je dete usvojilo (Gde sediš? Gde još možeš da sedneš?) \n' +
      'U drugom delu igre, predložite da stavljate igračku na mesta na kojima ste do sada bili. Počnite tako što ćete reći detetu: Stavi lutku ispod stolice i nastavite da naizmenižno sa detetom dajete predloge za poziciju igračke u ostalim prostornim relacijama.',
    guides: [
      'Budite fizički aktivni i zaigrano gestikulirajte tokom izgovaranja novih reči',
    ],
  },
  {
    id: 3,
    featured: true,
    title: 'MOJA PIJACA',
    subtitle: '(uzrast od 2,5 godine)',
    goals: [
      'Veština uživljavanja u imaginarnu ulogu',
      'Razlikovanje kategorija voće i povrće',
      'Razlikovanje ukusa (gorko, slatko, kiselo)',
    ],
    image: mojaPijaca,
    missions: [
      'Podeliti uloge na prodavca i kupca',
      'Imenovati voće i povrće u toku prodaje',
      'Opisati ukuse voća i povrća',
    ],
    description:
      'Kažite detetu da je cilj igre da prodajete voće i povrće, i objasnite šta radi prodavac, a šta radi kupac. Skupite voće i povrće koje ste našli u dve posude (jedna za voće, a druga za povrće), i neka dete pronađe mesto u kući gde će da ih rasporedi. Radi modelovanja imenovanja, korisno je da roditelj prvi bude u ulozi kupca, a dete u ulozi prodavca. CIlj je da dete imenuje voće i povrće koje vam prodaje. Recite detetu da želite nešto i da probate, pa dok jedete na primer jabuku, opišite ukus koji osećate (kiseo, sladak, gorak). Kada je dete kupac, a roditelj prodavac, ciljk je da dete imenuje voće ili povrće koje želi. Ponudite detetu da proba ono što je odabralo i podstičite ga da opiše ukus koji oseća i šta mu se sviđa.',
    guides: [
      'Umesto novca iskoristite papiriće koje ste obojili različitim bojama',
      'Ako je dete tek počelo da govori, budite strpljivi dok pokušava da imenuje voće ili povrće. Ukoliko dete ipak nije spremno da izgovori novu reč, pitajte ga da li mu je potrebna pomoć',
      'Slobodno gestikulirajte dok opisujete ukuse i uživite se u vašu ulogu',
    ],
  },
  {
    id: 4,
    featured: false,
    title: 'MUZIČKI KIPOVI',
    subtitle: '(uzrast od 4 godine)',
    goals: ['Uočavanje ritma i promena u ritmu'],
    image: muzickiKlipovi,
    missions: [
      'Slušajte muziku i plešite u ritmu. Zaustaviti se na prestanak muzike.',
    ],
    description:
      'Odaberite sa detetom pesme različitog ritma koje želite da slušate. Objasnite detetu da je zadatak da pleše u ritmu muzike i da se zaustavi kao kip u trenutku kad muzika prestane. Kad ponovo čuje muziku treba ponovo da pleše, ali u različitom ritmu. Kako bi detetu bilo jasnije, pokažite na primeru kako plešete u zavisnosti od pesme koju slušate. Nakon nekoliko pesama, zamenite uloge. ',
    guides: [],
  },
];
