export const filterState = (state) => {
  const Alabama = [
    "Alabama",
    "AL",
    "Alabamma",
    "Alabma",
    "Alambama",
    "Alabam",
    "Alabamia",
    "Albama",
    "Alabame",
    "Alabamma",
    "Alabmaa",
    "Alabana",
  ];
  const Alaska = [
    "Alaska",
    "AK",
    "Alasca",
    "Alasksa",
    "Alaksa",
    "Alaskah",
    "Alasaka",
    "Alascka",
    "Alasak",
    "Alaskaa",
    "Aalaska",
    "Alask",
  ];
  const Arizona = [
    "Arizona",
    "AZ",
    "Arizonia",
    "Arazona",
    "Ariozna",
    "Arizna",
    "Arazonia",
    "Arziona",
    "Arisona",
    "Ariona",
    "Arizonaa",
    "Arizna",
  ];
  const Arkansas = [
    "Arkansas",
    "AR",
    "Arkansa",
    "Arkansaw",
    "Arkansis",
    "Arkanses",
    "Arkanas",
    "Arkanzas",
    "Arkansaa",
    "Arkanses",
    "Arkanass",
    "Arknasas",
  ];
  const California = [
    "California",
    "CA",
    "Califonia",
    "Califronia",
    "Califrona",
    "Caliornia",
    "Caliofornia",
    "Califonria",
    "Calofornia",
    "Cailfornia",
    "Calfornia",
    "Californai",
  ];
  const Colorado = [
    "Colorado",
    "CO",
    "Colarado",
    "Colorada",
    "Colordo",
    "Colarado",
    "Coloradoo",
    "Colorodo",
    "Coorado",
    "Cloorado",
    "Coloardo",
    "Colorao",
  ];
  const Connecticut = [
    "Connecticut",
    "CT",
    "Conneticut",
    "Connetticuit",
    "Connecticuit",
    "Connecticutt",
    "Coneticut",
    "Connectiut",
    "Connectiuct",
    "Connectitut",
    "Connecticu",
    "Connecticutt",
  ];
  const Delaware = [
    "Delaware",
    "DE",
    "Delware",
    "Deleware",
    "Delawere",
    "Delawar",
    "Deleware",
    "Delaaware",
    "Delaewar",
    "Delaawre",
    "Delawarre",
    "Delwarae",
  ];
  const Florida = [
    "Florida",
    "FL",
    "Floridia",
    "Flordia",
    "Floria",
    "Flordida",
    "Florada",
    "Florid",
    "Floriduh",
    "Floridai",
    "Forida",
    "Folrida",
  ];
  const Georgia = [
    "Georgia",
    "GA",
    "Geogia",
    "Georiga",
    "Gergia",
    "Georga",
    "Goergia",
    "Georia",
    "Georgai",
    "Georgio",
    "Gorgia",
    "Gorgia",
  ];
  const Hawaii = [
    "Hawaii",
    "HI",
    "Hawiai",
    "Hawii",
    "Hawaiia",
    "Hawii",
    "Hawai",
    "Hawaiii",
    "Hawwaii",
    "Hawwai",
    "Hawaai",
    "Hawau",
  ];
  const Idaho = [
    "Idaho",
    "ID",
    "Idaha",
    "Idahao",
    "Idahoe",
    "Idao",
    "Idah",
    "Iddaho",
    "Idahio",
    "Idaaho",
    "Idahho",
    "Idaeho",
  ];
  const Illinois = [
    "Illinois",
    "IL",
    "Illnois",
    "Illonis",
    "Illinios",
    "Illnoi",
    "Illionis",
    "Illinoise",
    "Illinios",
    "Ilinios",
    "Illnois",
    "Illinos",
  ];
  const Indiana = [
    "Indiana",
    "IN",
    "Indianna",
    "Indina",
    "Indiaana",
    "Indiania",
    "Indiann",
  ];
  const Iowa = [
    "Iowa",
    "IA",
    "Iows",
    "Iwa",
    "Iowas",
    "Iow",
    "Iwoa",
    "Iowaa",
    "Iwo",
    "Iowwa",
    "Ioawa",
    "Ioaw",
  ];
  const Kansas = [
    "Kansas",
    "KS",
    "Kanses",
    "Kanssa",
    "Kanssas",
    "Kansis",
    "Kanas",
    "Kanses",
    "Kansus",
    "Kansa",
    "Kansass",
    "Kanasa",
  ];
  const Kentucky = [
    "Kentucky",
    "ky",
    "Kentuky",
    "Kentuckyi",
    "Kentukcy",
    "Kentuck",
    "Knetucky",
    "Kentcky",
    "Kentuky",
    "Ketucky",
    "Kenutcky",
    "Kentucy",
  ];
  const Louisiana = [
    "Louisiana",
    "la",
    "Lousiana",
    "Luoisiana",
    "Loiusiana",
    "Louisianna",
    "Lousianna",
    "Louisisana",
    "Luoisana",
    "Louiisiana",
    "Louisiaina",
    "Louissiana",
  ];
  const Maine = [
    "Maine",
    "me",
    "Meine",
    "Maie",
    "Miane",
    "Miane",
    "Miane",
    "Maaine",
    "Mainee",
    "Mein",
    "Miane",
    "Maie",
  ];
  const Maryland = [
    "Maryland",
    "md",
    "Marylland",
    "Marlyand",
    "Maryalnd",
    "Maryand",
    "Marylan",
    "Marryland",
    "Marylnd",
    "Marylad",
    "Marylans",
    "Marylnd",
  ];
  const Massachusetts = [
    "Massachusetts",
    "ma",
    "Massachussets",
    "Massachussetts",
    "Massachusettes",
    "Massachusetss",
    "Massachutts",
    "Massachsetts",
    "Massachusets",
    "Massachusset",
    "Massachusettsi",
    "Massahusetts",
  ];
  const Michigan = [
    "Michigan",
    "mi",
    "Michagan",
    "Michgian",
    "Michigain",
    "Michigin",
    "Michigna",
    "Michiagn",
    "Michignan",
    "Mchigan",
    "Michigian",
    "Michiigan",
  ];
  const Minnesota = [
    "Minnesota",
    "mn",
    "Minnisota",
    "Minessota",
    "Minisota",
    "Minnasota",
    "Minnessota",
    "Minnasotta",
    "Minesota",
    "Minnestoa",
    "Minnestota",
    "Minnisotta",
  ];
  const Mississippi = [
    "Mississippi",
    "ms",
    "Missippi",
    "Missisippi",
    "Mississipi",
    "Missisippi",
    "Mississppi",
    "Mississsippi",
    "Mississipi",
    "Mississipi",
    "Mississipii",
    "Mississispi",
  ];
  const Missouri = [
    "Missouri",
    "mo",
    "Misouri",
    "Misourri",
    "Missourri",
    "Missoury",
    "Missour",
    "Missuri",
    "Misssouri",
    "Missourii",
    "Missoouri",
    "Missoiri",
  ];
  const Montana = [
    "Montana",
    "mt",
    "Montan",
    "Montanah",
    "Montanar",
    "Montaan",
    "Montna",
    "Montanac",
    "Montanna",
    "Montanai",
    "Montans",
    "Montaan",
  ];
  const Nebraska = [
    "Nebraska",
    "ne",
    "Nebaska",
    "Nebraka",
    "Nebreska",
    "Nebrraska",
    "Nebreska",
    "Nabreska",
    "Neraska",
    "Nerbaska",
    "Nebraksa",
    "Nebrasa",
  ];
  const Nevada = [
    "Nevada",
    "nv",
    "Nevadda",
    "Nevda",
    "Nevdaa",
    "Nevda",
    "Nevaddaa",
    "Neveda",
    "Nevvada",
    "Nevadaa",
    "Nevadda",
    "Nveada",
  ];
  const NewHampshire = [
    "New Hampshire",
    "nh",
    "New Hamshire",
    "New Hampshere",
    "New Hampshie",
    "New Hamshiree",
    "New Hampshre",
    "New Hamphire",
    "New Hampshier",
    "New Hamsphire",
    "New Hampshiree",
    "New Hamphshire",
  ];
  const NewJersey = [
    "New Jersey",
    "nj",
    "New Jersy",
    "New Jersery",
    "New Jesey",
    "New Jersay",
    "New Jerey",
    "New Jerssy",
    "New Jerseyy",
    "New Jersie",
    "New Jeresey",
    "Newjersy",
  ];
  const NewMexico = [
    "New Mexico",
    "nm",
    "New Mexio",
    "New Mexcio",
    "New Mecico",
    "New Mexici",
    "New Mexixo",
    "New Mxio",
    "New Mexica",
    "New Mexiico",
    "New Mexcioo",
    "New Meico",
  ];
  const NewYork = [
    "New York",
    "ny",
    "Newyork",
    "New Yrok",
    "New Yor",
    "New Yorl",
    "New Yok",
    "New Yorrk",
    "Newyorkk",
    "New Yrok",
    "Nwe York",
    "NewYor",
  ];
  const NorthCarolina = [
    "North Carolina",
    "nc",
    "North Carolin",
    "North Carolinia",
    "North Carolna",
    "North Carolian",
    "North Carolinna",
    "Nroth Carolina",
    "North Carolinna",
    "North Corolina",
    "North Caroina",
    "NorthCarolina",
  ];
  const NorthDakota = [
    "North Dakota",
    "nd",
    "North Dakoda",
    "North Dokota",
    "North Dacota",
    "Nort Dakota",
    "North Dakoota",
    "North Dakkota",
    "North Dakotaa",
    "Noth Dakota",
    "North Daktoa",
    "North Dakotta",
  ];
  const Ohio = [
    "Ohio",
    "oh",
    "Ohoi",
    "Ohia",
    "Oho",
    "Ohiio",
    "Ohhio",
    "Ohi",
    "Oio",
    "Ohiio",
    "Ohiioo",
    "Ohhio",
  ];
  const Oklahoma = [
    "Oklahoma",
    "ok",
    "Oklahoa",
    "Okalahoma",
    "Oklahomoa",
    "Oklahma",
    "Oklahomaa",
    "Oklahomo",
    "Oklahom",
    "Oklahomaa",
    "Oklohoma",
    "Oklohoma",
  ];
  const Oregon = [
    "Oregon",
    "or",
    "Orgon",
    "Oregan",
    "Oreogn",
    "Orego",
    "Oregn",
    "Oregona",
    "Oregan",
    "Orgeon",
    "Oregona",
    "Oergon",
  ];
  const Pennsylvania = [
    "Pennsylvania",
    "pa",
    "Pennsylvannia",
    "Pennsylvnia",
    "Pennsylvannia",
    "Pennsylvnaia",
    "Pensylvania",
    "Pennslyvania",
    "Pennsilvania",
    "Pennsylvaina",
    "Pennslyvania",
    "Pensylvannia",
  ];
  const RhodeIsland = [
    "Rhode Island",
    "ri",
    "Rhode Islandd",
    "Rhode Isand",
    "Rhode Iland",
    "Rhode Islan",
    "Rhodeisland",
    "Rhode Islandss",
    "Rode Island",
    "Rhode Ilsand",
    "Rhode Ilannd",
    "Rhodeiland",
  ];
  const SouthCarolina = [
    "South Carolina",
    "sc",
    "South Carolna",
    "South Caroina",
    "South Caralina",
    "South Carolinna",
    "South Caroline",
    "South Caroliina",
    "Sout Carolina",
    "South Carolian",
    "SouthCarolina",
    "South Caroliina",
  ];
  const SouthDakota = [
    "South Dakota",
    "sd",
    "South Dekota",
    "South Dokota",
    "South Dakoda",
    "South Dakotaa",
    "Sout Dakota",
    "South Dskota",
    "Soutth Dakota",
  ];
  const Tennessee = [
    "Tennessee",
    "tn",
    "Tennesse",
    "Tennesee",
    "Tenessee",
    "Tenesee",
    "Tennesseea",
    "Tennesssee",
    "Tennesseee",
    "Tennesseee",
    "Tennessse",
    "Tennessseee",
  ];
  const Texas = [
    "Texas",
    "tx",
    "Texsa",
    "Texass",
    "Texaas",
    "Taxes",
    "Txeas",
    "Txas",
    "Teexas",
    "Texxs",
    "Texa",
    "Texasss",
  ];
  const Utah = [
    "Utah",
    "ut",
    "Utha",
    "Uthah",
    "Utahh",
    "Uta",
    "Uth",
    "Uath",
    "Uhtah",
    "Uthaah",
    "Utahh",
    "Utaha",
  ];
  const Vermont = [
    "Vermont",
    "vt",
    "Vermot",
    "Vermnt",
    "Vermotn",
    "Vermon",
    "Vermontt",
    "Vermnt",
    "Vermnto",
    "Vermmont",
    "Vermotnt",
    "Vemont",
  ];
  const Virginia = [
    "Virginia",
    "va",
    "Virgina",
    "Viginia",
    "Viriginia",
    "Virginaa",
    "Vrginia",
    "Virgina",
    "Virgnia",
    "Virginiaa",
    "Viginia",
    "Vriginia",
  ];
  const Washington = [
    "Washington",
    "wa",
    "Washingon",
    "Washigton",
    "Washingtn",
    "Washingotn",
    "Washngton",
    "Washinton",
    "Washingtion",
    "Washngton",
    "Washingtno",
    "Washingtton",
  ];
  const WestVirginia = [
    "West Virginia",
    "wv",
    "West Virgina",
    "West Virignia",
    "West Verginia",
    "West Virgiana",
    "Wet Virginia",
    "West Vriginia",
    "West Viginia",
    "West Virginiaa",
    "West Vergina",
    "West Virginnia",
  ];
  const Wisconsin = [
    "Wisconsin",
    "wi",
    "Wisconson",
    "Wiscosin",
    "Wisconin",
    "Wiscoson",
    "Wiscsonsin",
    "Wisconsen",
    "Wisocnsin",
    "Wisconnsin",
    "Wisconsiin",
    "Wisconsinn",
  ];
  const Wyoming = [
    "Wyoming",
    "wy",
    "Wymoing",
    "Wymoing",
    "Wyoing",
    "Wyomingg",
    "Wyoimng",
    "Wyoing",
    "Wyominng",
    "Wyomin",
    "Wymoming",
    "Wyoing",
  ];

  if (state && typeof state === "string") {
    if (state.trim().toLowerCase().startsWith("alab")) return "Alabama";
    if (state.trim().toLowerCase().startsWith("alas")) return "Alaska";
    if (state.trim().toLowerCase().startsWith("ari")) return "Arizona";
    if (state.trim().toLowerCase().startsWith("ark")) return "Arkansas";
    if (state.trim().toLowerCase().startsWith("cali")) return "California";
    if (state.trim().toLowerCase().startsWith("colo")) return "Colorado";
    if (state.trim().toLowerCase().startsWith("conn")) return "Connecticut";
    if (state.trim().toLowerCase().startsWith("dela")) return "Delaware";
    if (state.trim().toLowerCase().startsWith("flo")) return "Florida";
    if (state.trim().toLowerCase().startsWith("geor")) return "Georgia";
    if (state.trim().toLowerCase().startsWith("hawa")) return "Hawaii";
    if (state.trim().toLowerCase().startsWith("ida")) return "Idaho";
    if (state.trim().toLowerCase().startsWith("ill")) return "Illinois";
    if (state.trim().toLowerCase().startsWith("ind")) return "Indiana";
    if (state.trim().toLowerCase().startsWith("io")) return "Iowa";
    if (state.trim().toLowerCase().startsWith("kan")) return "Kansas";
    if (state.trim().toLowerCase().startsWith("ke")) return "Kentucky";
    if (state.trim().toLowerCase().startsWith("lou")) return "Louisiana";
    if (state.trim().toLowerCase().startsWith("mai")) return "Maine";
    if (state.trim().toLowerCase().startsWith("mar")) return "Maryland";
    if (state.trim().toLowerCase().startsWith("mas")) return "Massachusetts";
    if (state.trim().toLowerCase().startsWith("mic")) return "Michigan";
    if (state.trim().toLowerCase().startsWith("min")) return "Minnesota";
    if (state.trim().toLowerCase().startsWith("missi")) return "Mississippi";
    if (state.trim().toLowerCase().startsWith("misso")) return "Missouri";
    if (state.trim().toLowerCase().startsWith("mon")) return "Montana";
    if (state.trim().toLowerCase().startsWith("neb")) return "Nebraska";
    if (state.trim().toLowerCase().startsWith("nev")) return "Nevada";
    if (state.trim().toLowerCase().startsWith("new h")) return "NewHampshire";
    if (state.trim().toLowerCase().startsWith("new j")) return "NewJersey";
    if (state.trim().toLowerCase().startsWith("new y")) return "NewYork";
    if (state.trim().toLowerCase().startsWith("north c")) return "NorthCarolina";
    if (state.trim().toLowerCase().startsWith("north d")) return "NorthDakota";
    if (state.trim().toLowerCase().startsWith("ohi")) return "Ohio";
    if (state.trim().toLowerCase().startsWith("okl")) return "Oklahoma";
    if (state.trim().toLowerCase().startsWith("ore")) return "Oregon";
    if (state.trim().toLowerCase().startsWith("penn")) return "Pennsylvania";
    if (state.trim().toLowerCase().startsWith("rho")) return "RhodeIsland";
    if (state.trim().toLowerCase().startsWith("south c")) return "SouthCarolina";
    if (state.trim().toLowerCase().startsWith("south d")) return "SouthDakota";
    if (state.trim().toLowerCase().startsWith("tenn")) return "Tennessee";
    if (state.trim().toLowerCase().startsWith("tex")) return "Texas";
    if (state.trim().toLowerCase().startsWith("uta")) return "Utah";
    if (state.trim().toLowerCase().startsWith("verm")) return "Vermont";
    if (state.trim().toLowerCase().startsWith("virg")) return "Virginia";
    if (state.trim().toLowerCase().startsWith("wash")) return "Washington";
    if (state.trim().toLowerCase().startsWith("west")) return "WestVirginia";
    if (state.trim().toLowerCase().startsWith("wisc")) return "Wisconsin";
    if (state.trim().toLowerCase().startsWith("wyo")) return "Wyoming";
  }
  if(state){
  for (let i = 0; i < 18; i++) {
    if (Alabama[i] && state.trim().toLowerCase() === Alabama[i].trim().toLowerCase())
      return "Alabama";
    if (Alaska[i] && state.trim().toLowerCase() === Alaska[i].trim().toLowerCase())
      return "Alaska";
    if (Arizona[i] && state.trim().toLowerCase() === Arizona[i].trim().toLowerCase())
      return "Arizona";
    if (Arkansas[i] && state.trim().toLowerCase() === Arkansas[i].trim().toLowerCase())
      return "Arkansas";
    if (California[i] && state.trim().toLowerCase() === California[i].trim().toLowerCase())
      return "California";
    if (Colorado[i] && state.trim().toLowerCase() === Colorado[i].trim().toLowerCase())
      return "Colorado";
    if (Connecticut[i] && state.trim().toLowerCase() === Connecticut[i].trim().toLowerCase())
      return "Connecticut";
    if (Delaware[i] && state.trim().toLowerCase() === Delaware[i].trim().toLowerCase())
      return "Delaware";
    if (Florida[i] && state.trim().toLowerCase() === Florida[i].trim().toLowerCase())
      return "Florida";
    if (Georgia[i] && state.trim().toLowerCase() === Georgia[i].trim().toLowerCase())
      return "Georgia";
    if (Hawaii[i] && state.trim().toLowerCase() === Hawaii[i].trim().toLowerCase())
      return "Hawaii";
    if (Idaho[i] && state.trim().toLowerCase() === Idaho[i].trim().toLowerCase())
      return "Idaho";
    if (Illinois[i] && state.trim().toLowerCase() === Illinois[i].trim().toLowerCase())
      return "Illinois";
    if (Indiana[i] && state.trim().toLowerCase() === Indiana[i].trim().toLowerCase())
      return "Indiana";
    if (Iowa[i] && state.trim().toLowerCase() === Iowa[i].trim().toLowerCase()) return "Iowa";
    if (Kansas[i] && state.trim().toLowerCase() === Kansas[i].trim().toLowerCase())
      return "Kansas";
    if (Kentucky[i] && state.trim().toLowerCase() === Kentucky[i].trim().toLowerCase())
      return "Kentucky";
    if (Louisiana[i] && state.trim().toLowerCase() === Louisiana[i].trim().toLowerCase())
      return "Louisiana";
    if (Maine[i] && state.trim().toLowerCase() === Maine[i].trim().toLowerCase())
      return "Maine";
    if (Maryland[i] && state.trim().toLowerCase() === Maryland[i].trim().toLowerCase())
      return "Maryland";
    if (
      Massachusetts[i] &&
      state.trim().toLowerCase() === Massachusetts[i].trim().toLowerCase()
    )
      return "Massachusetts";
    if (Michigan[i] && state.trim().toLowerCase() === Michigan[i].trim().toLowerCase())
      return "Michigan";
    if (Minnesota[i] && state.trim().toLowerCase() === Minnesota[i].trim().toLowerCase())
      return "Minnesota";
    if (Mississippi[i] && state.trim().toLowerCase() === Mississippi[i].trim().toLowerCase())
      return "Mississippi";
    if (Missouri[i] && state.trim().toLowerCase() === Missouri[i].trim().toLowerCase())
      return "Missouri";
    if (Montana[i] && state.trim().toLowerCase() === Montana[i].trim().toLowerCase())
      return "Montana";
    if (Nebraska[i] && state.trim().toLowerCase() === Nebraska[i].trim().toLowerCase())
      return "Nebraska";
    if (Nevada[i] && state.trim().toLowerCase() === Nevada[i].trim().toLowerCase())
      return "Nevada";
    if (
      NewHampshire[i] &&
      state.trim().toLowerCase() === NewHampshire[i].trim().toLowerCase()
    )
      return "NewHampshire";
    if (NewJersey[i] && state.trim().toLowerCase() === NewJersey[i].trim().toLowerCase())
      return "NewJersey";
    if (NewMexico[i] && state.trim().toLowerCase() === NewMexico[i].trim().toLowerCase())
      return "NewMexico";
    if (NewYork[i] && state.trim().toLowerCase() === NewYork[i].trim().toLowerCase())
      return "NewYork";
    if (
      NorthCarolina[i] &&
      state.trim().toLowerCase() === NorthCarolina[i].trim().toLowerCase()
    )
      return "NorthCarolina";
    if (NorthDakota[i] && state.trim().toLowerCase() === NorthDakota[i].trim().toLowerCase())
      return "NorthDakota";
    if (Ohio[i] && state.trim().toLowerCase() === Ohio[i].trim().toLowerCase()) return "Ohio";
    if (Oklahoma[i] && state.trim().toLowerCase() === Oklahoma[i].trim().toLowerCase())
      return "Oklahoma";
    if (Oregon[i] && state.trim().toLowerCase() === Oregon[i].trim().toLowerCase())
      return "Oregon";
    if (
      Pennsylvania[i] &&
      state.trim().toLowerCase() === Pennsylvania[i].trim().toLowerCase()
    )
      return "Pennsylvania";
    if (RhodeIsland[i] && state.trim().toLowerCase() === RhodeIsland[i].trim().toLowerCase())
      return "RhodeIsland";
    if (
      SouthCarolina[i] &&
      state.trim().toLowerCase() === SouthCarolina[i].trim().toLowerCase()
    )
      return "SouthCarolina";
    if (SouthDakota[i] && state.trim().toLowerCase() === SouthDakota[i].trim().toLowerCase())
      return "SouthDakota";
    if (Tennessee[i] && state.trim().toLowerCase() === Tennessee[i].trim().toLowerCase())
      return "Tennessee";
    if (Texas[i] && state.trim().toLowerCase() === Texas[i].trim().toLowerCase())
      return "Texas";
    if (Utah[i] && state.trim().toLowerCase() === Utah[i].trim().toLowerCase()) return "Utah";
    if (Vermont[i] && state.trim().toLowerCase() === Vermont[i].trim().toLowerCase())
      return "Vermont";
    if (Virginia[i] && state.trim().toLowerCase() === Virginia[i].trim().toLowerCase())
      return "Virginia";
    if (Washington[i] && state.trim().toLowerCase() === Washington[i].trim().toLowerCase())
      return "Washington";
    if (
      WestVirginia[i] &&
      state.trim().toLowerCase() === WestVirginia[i].trim().toLowerCase()
    )
      return "WestVirginia";
    if (Wisconsin[i] && state.trim().toLowerCase() === Wisconsin[i].trim().toLowerCase())
      return "Wisconsin";
    if (Wyoming[i] && state.trim().toLowerCase() === Wyoming[i].trim().toLowerCase())
      return "Wyoming";
  }
  return state;
}
};
