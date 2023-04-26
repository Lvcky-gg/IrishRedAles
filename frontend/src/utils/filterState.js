export const filterState = (state) => {
    const Alabama = [ 'Alabama',"AL","Alabamma", "Alabma", "Alambama", "Alabam", "Alabamia", "Albama", "Alabame", "Alabamma", "Alabmaa", "Alabana"]
    const Alaska = ['Alaska',"AK","Alasca", "Alasksa", "Alaksa", "Alaskah", "Alasaka", "Alascka", "Alasak", "Alaskaa", "Aalaska", "Alask"]
    const Arizona = ['Arizona',"AZ","Arizonia", "Arazona", "Ariozna", "Arizna", "Arazonia", "Arziona", "Arisona", "Ariona", "Arizonaa", "Arizna"]
    const Arkansas = ['Arkansas',"AR","Arkansa", "Arkansaw", "Arkansis", "Arkanses", "Arkanas", "Arkanzas", "Arkansaa", "Arkanses", "Arkanass", "Arknasas"]
    const California = ['California',"CA","Califonia", "Califronia", "Califrona", "Caliornia", "Caliofornia", "Califonria", "Calofornia", "Cailfornia", "Calfornia", "Californai"]
    const Colorado = ['Colorado',"CO","Colarado", "Colorada", "Colordo", "Colarado", "Coloradoo", "Colorodo", "Coorado", "Cloorado", "Coloardo", "Colorao"]
    const Connecticut = ['Connecticut',"CT","Conneticut", "Connetticuit", "Connecticuit", "Connecticutt", "Coneticut", "Connectiut", "Connectiuct", "Connectitut", "Connecticu", "Connecticutt"]
    const Delaware = ['Delaware',"DE","Delware", "Deleware", "Delawere", "Delawar", "Deleware", "Delaaware", "Delaewar", "Delaawre", "Delawarre", "Delwarae"]
    const Florida = ['Florida',"FL","Floridia", "Flordia", "Floria", "Flordida", "Florada", "Florid", "Floriduh", "Floridai", "Forida", "Folrida"]
    const Georgia = ['Georgia',"GA","Geogia", "Georiga", "Gergia", "Georga", "Goergia", "Georia", "Georgai", "Georgio", "Gorgia", "Gorgia"]
    const Hawaii = ['Hawaii',"HI","Hawiai", "Hawii", "Hawaiia", "Hawii", "Hawai", "Hawaiii", "Hawwaii", "Hawwai", "Hawaai", "Hawau"]
    const Idaho = ['Idaho',"ID","Idaha", "Idahao", "Idahoe", "Idao", "Idah", "Iddaho", "Idahio", "Idaaho", "Idahho", "Idaeho"]
    const Illinois = ['Illinois',"IL","Illnois", "Illonis", "Illinios", "Illnoi", "Illionis", "Illinoise", "Illinios", "Ilinios", "Illnois", "Illinos"]
    const Indiana = ['Indiana',"IN","Indianna", "Indina", "Indiaana", "Indiania", "Indiann"]
    const Iowa =  ['Iowa',"IA","Iows", "Iwa", "Iowas", "Iow", "Iwoa", "Iowaa", "Iwo", "Iowwa", "Ioawa", "Ioaw"]
    const Kansas =  ['Kansas',"KS","Kanses", "Kanssa", "Kanssas", "Kansis", "Kanas", "Kanses", "Kansus", "Kansa", "Kansass", "Kanasa"]
    const Kentucky =  ['Kentucky',"ky","Kentuky", "Kentuckyi", "Kentukcy", "Kentuck", "Knetucky", "Kentcky", "Kentuky", "Ketucky", "Kenutcky", "Kentucy"]
    const Louisiana =  ['Louisiana',"la","Lousiana", "Luoisiana", "Loiusiana", "Louisianna", "Lousianna", "Louisisana", "Luoisana", "Louiisiana", "Louisiaina", "Louissiana"]
    const Maine = ['Maine',"me","Meine", "Maie", "Miane", "Miane", "Miane", "Maaine", "Mainee", "Mein", "Miane", "Maie"]
    const Maryland =  ['Maryland',"md","Marylland", "Marlyand", "Maryalnd", "Maryand", "Marylan", "Marryland", "Marylnd", "Marylad", "Marylans", "Marylnd"]
    const Massachusetts =  ['Massachusetts',"ma","Massachussets", "Massachussetts", "Massachusettes", "Massachusetss", "Massachutts", "Massachsetts", "Massachusets", "Massachusset", "Massachusettsi", "Massahusetts"]
    const Michigan =  ['Michigan',"mi","Michagan", "Michgian", "Michigain", "Michigin", "Michigna", "Michiagn", "Michignan", "Mchigan", "Michigian", "Michiigan"]
    const Minnesota =  ['Minnesota',"mn","Minnisota", "Minessota", "Minisota", "Minnasota", "Minnessota", "Minnasotta", "Minesota", "Minnestoa", "Minnestota", "Minnisotta"]
    const Mississippi =  ['Mississippi',"ms","Missippi", "Missisippi", "Mississipi", "Missisippi", "Mississppi", "Mississsippi", "Mississipi", "Mississipi", "Mississipii", "Mississispi"]
    const Missouri =  ['Missouri',"mo","Misouri", "Misourri", "Missourri", "Missoury", "Missour", "Missuri", "Misssouri", "Missourii", "Missoouri", "Missoiri"]
    const Montana =  ['Montana',"mt","Montan", "Montanah", "Montanar", "Montaan", "Montna", "Montanac", "Montanna", "Montanai", "Montans", "Montaan"]
    const Nebraska = ['Nebraska',"ne","Nebaska", "Nebraka", "Nebreska", "Nebrraska", "Nebreska", "Nabreska", "Neraska", "Nerbaska", "Nebraksa", "Nebrasa"]
    const Nevada =  ['Nevada',"nv","Nevadda", "Nevda", "Nevdaa", "Nevda", "Nevaddaa", "Neveda", "Nevvada", "Nevadaa", "Nevadda", "Nveada"]
    const NewHampshire =  ['New Hampshire',"nh","New Hamshire", "New Hampshere", "New Hampshie", "New Hamshiree", "New Hampshre", "New Hamphire", "New Hampshier", "New Hamsphire", "New Hampshiree", "New Hamphshire"]
    const NewJersey =  [ 'New Jersey',"nj","New Jersy", "New Jersery", "New Jesey", "New Jersay", "New Jerey", "New Jerssy", "New Jerseyy", "New Jersie", "New Jeresey", "Newjersy"]
    const NewMexico = ['New Mexico',"nm","New Mexio", "New Mexcio", "New Mecico", "New Mexici", "New Mexixo", "New Mxio", "New Mexica", "New Mexiico", "New Mexcioo", "New Meico"]
    const NewYork = [ 'New York',"ny","Newyork", "New Yrok", "New Yor", "New Yorl", "New Yok", "New Yorrk", "Newyorkk", "New Yrok", "Nwe York", "NewYor"]
    const NorthCarolina = ['North Carolina',"nc","North Carolin", "North Carolinia", "North Carolna", "North Carolian", "North Carolinna", "Nroth Carolina", "North Carolinna", "North Corolina", "North Caroina", "NorthCarolina"]
    const NorthDakota = ['North Dakota',"nd","North Dakoda", "North Dokota", "North Dacota", "Nort Dakota", "North Dakoota", "North Dakkota", "North Dakotaa", "Noth Dakota", "North Daktoa", "North Dakotta"]
    const Ohio = ['Ohio',"oh","Ohoi", "Ohia", "Oho", "Ohiio", "Ohhio", "Ohi", "Oio", "Ohiio", "Ohiioo", "Ohhio"]
    const Oklahoma =  ['Oklahoma',"ok","Oklahoa", "Okalahoma", "Oklahomoa", "Oklahma", "Oklahomaa", "Oklahomo", "Oklahom", "Oklahomaa", "Oklohoma", "Oklohoma"]
    const Oregon = ['Oregon',"or","Orgon", "Oregan", "Oreogn", "Orego", "Oregn", "Oregona", "Oregan", "Orgeon", "Oregona", "Oergon"]
    const Pennsylvania = ['Pennsylvania',"pa","Pennsylvannia", "Pennsylvnia", "Pennsylvannia", "Pennsylvnaia", "Pensylvania", "Pennslyvania", "Pennsilvania", "Pennsylvaina", "Pennslyvania", "Pensylvannia"]
    const RhodeIsland =  ['Rhode Island',"ri","Rhode Islandd", "Rhode Isand", "Rhode Iland", "Rhode Islan", "Rhodeisland", "Rhode Islandss", "Rode Island", "Rhode Ilsand", "Rhode Ilannd", "Rhodeiland"]
    const SouthCarolina = ['South Carolina',"sc","South Carolna", "South Caroina", "South Caralina", "South Carolinna", "South Caroline", "South Caroliina", "Sout Carolina", "South Carolian", "SouthCarolina", "South Caroliina"]
    const SouthDakota = ['South Dakota',"sd","South Dekota", "South Dokota", "South Dakoda", "South Dakotaa", "Sout Dakota", "South Dskota", "Soutth Dakota"]
    const Tennessee =  ['Tennessee',"tn","Tennesse", "Tennesee", "Tenessee", "Tenesee", "Tennesseea", "Tennesssee", "Tennesseee", "Tennesseee", "Tennessse", "Tennessseee"]
    const Texas = ['Texas',"tx","Texsa", "Texass", "Texaas", "Taxes", "Txeas", "Txas", "Teexas", "Texxs", "Texa", "Texasss"]
    const Utah = ['Utah',"ut","Utha", "Uthah", "Utahh", "Uta", "Uth", "Uath", "Uhtah", "Uthaah", "Utahh", "Utaha"]
    const Vermont = ['Vermont',"vt","Vermot", "Vermnt", "Vermotn", "Vermon", "Vermontt", "Vermnt", "Vermnto", "Vermmont", "Vermotnt", "Vemont"]
    const Virginia = ['Virginia',"va","Virgina", "Viginia", "Viriginia", "Virginaa", "Vrginia", "Virgina", "Virgnia", "Virginiaa", "Viginia", "Vriginia"]
    const Washington = ['Washington',"wa","Washingon", "Washigton", "Washingtn", "Washingotn", "Washngton", "Washinton", "Washingtion", "Washngton", "Washingtno", "Washingtton"]
    const WestVirginia = ['West Virginia',"wv","West Virgina", "West Virignia", "West Verginia", "West Virgiana", "Wet Virginia", "West Vriginia", "West Viginia", "West Virginiaa", "West Vergina", "West Virginnia"]
    const Wisconsin = ['Wisconsin',"wi","Wisconson", "Wiscosin", "Wisconin", "Wiscoson", "Wiscsonsin", "Wisconsen", "Wisocnsin", "Wisconnsin", "Wisconsiin", "Wisconsinn"]
    const Wyoming = ['Wyoming',"wy","Wymoing", "Wymoing", "Wyoing", "Wyomingg", "Wyoimng", "Wyoing", "Wyominng", "Wyomin", "Wymoming", "Wyoing"]

    if(typeof state === 'string'){
    if (state.toLowerCase().startsWith('alab')) return 'Alabama'
    if (state.toLowerCase().startsWith('alas')) return 'Alaska'
    if (state.toLowerCase().startsWith('ari')) return 'Arizona'
    if (state.toLowerCase().startsWith('ark')) return 'Arkansas'
    if (state.toLowerCase().startsWith('cali')) return 'California'
    if (state.toLowerCase().startsWith('colo')) return 'Colorado'
    if (state.toLowerCase().startsWith('conn')) return 'Connecticut'
    if (state.toLowerCase().startsWith('dela')) return 'Delaware'
    if (state.toLowerCase().startsWith('flo')) return 'Florida'
    if (state.toLowerCase().startsWith('geor')) return 'Georgia'
    if (state.toLowerCase().startsWith('hawa')) return 'Hawaii'
    if (state.toLowerCase().startsWith('ida')) return 'Idaho'
    if (state.toLowerCase().startsWith('ill')) return 'Illinois'
    if (state.toLowerCase().startsWith('ind')) return 'Indiana'
    if (state.toLowerCase().startsWith('io')) return 'Iowa'
    if (state.toLowerCase().startsWith('kan')) return 'Kansas'
    if (state.toLowerCase().startsWith('ke')) return 'Kentucky'
    if (state.toLowerCase().startsWith('lou')) return 'Louisiana'
    if (state.toLowerCase().startsWith('mai')) return 'Maine'
    if (state.toLowerCase().startsWith('mar')) return 'Maryland'
    if (state.toLowerCase().startsWith('mas')) return 'Massachusetts'
    if (state.toLowerCase().startsWith('mic')) return 'Michigan'
    if (state.toLowerCase().startsWith('min')) return 'Minnesota'
    if (state.toLowerCase().startsWith('missi')) return 'Mississippi'
    if (state.toLowerCase().startsWith('misso')) return 'Missouri'
    if (state.toLowerCase().startsWith('mon')) return 'Montana'
    if (state.toLowerCase().startsWith('neb')) return 'Nebraska'
    if (state.toLowerCase().startsWith('nev')) return 'Nevada'
    if (state.toLowerCase().startsWith('new h')) return 'NewHampshire'
    if (state.toLowerCase().startsWith('new j')) return 'NewJersey'
    if (state.toLowerCase().startsWith('new y')) return 'NewYork'
    if (state.toLowerCase().startsWith('north c')) return 'NorthCarolina'
    if (state.toLowerCase().startsWith('north d')) return 'NorthDakota'
    if (state.toLowerCase().startsWith('ohi')) return 'Ohio'
    if (state.toLowerCase().startsWith('okl')) return 'Oklahoma'
    if (state.toLowerCase().startsWith('ore')) return 'Oregon'
    if (state.toLowerCase().startsWith('penn')) return 'Pennsylvania'
    if (state.toLowerCase().startsWith('rho')) return 'RhodeIsland'
    if (state.toLowerCase().startsWith('south c')) return 'SouthCarolina'
    if (state.toLowerCase().startsWith('south d')) return 'SouthDakota'
    if (state.toLowerCase().startsWith('tenn')) return 'Tennessee'
    if (state.toLowerCase().startsWith('tex')) return 'Texas'
    if (state.toLowerCase().startsWith('uta')) return 'Utah'
    if (state.toLowerCase().startsWith('verm')) return 'Vermont'
    if (state.toLowerCase().startsWith('virg')) return 'Virginia'
    if (state.toLowerCase().startsWith('wash')) return 'Washington'
    if (state.toLowerCase().startsWith('west')) return 'WestVirginia'
    if (state.toLowerCase().startsWith('wisc')) return 'Wisconsin'
    if (state.toLowerCase().startsWith('wyo')) return 'Wyoming'
}
    for(let i = 0; i< 18; i++){

        if (Alabama[i] &&state.toLowerCase() === Alabama[i].toLowerCase()) return 'Alabama'
        if (Alaska[i] && state.toLowerCase() === Alaska[i].toLowerCase()) return 'Alaska'
        if (Arizona[i] && state.toLowerCase() === Arizona[i].toLowerCase()) return 'Arizona'
        if (Arkansas[i] && state.toLowerCase() === Arkansas[i].toLowerCase()) return 'Arkansas'
        if (California[i] && state.toLowerCase() === California[i].toLowerCase()) return 'California'
        if (Colorado[i]&& state.toLowerCase() === Colorado[i].toLowerCase()) return 'Colorado'
        if (Connecticut[i] && state.toLowerCase() === Connecticut[i].toLowerCase()) return 'Connecticut'
        if (Delaware[i] && state.toLowerCase() === Delaware[i].toLowerCase()) return 'Delaware'
        if (Florida[i] && state.toLowerCase() === Florida[i].toLowerCase()) return 'Florida'
        if (Georgia[i] && state.toLowerCase() === Georgia[i].toLowerCase()) return 'Georgia'
        if (Hawaii[i] && state.toLowerCase() === Hawaii[i].toLowerCase()) return 'Hawaii'
        if (Idaho[i] && state.toLowerCase() === Idaho[i].toLowerCase()) return 'Idaho'
        if (Illinois[i] && state.toLowerCase() === Illinois[i].toLowerCase()) return 'Illinois'
        if (Indiana[i] && state.toLowerCase() === Indiana[i].toLowerCase()) return 'Indiana'
        if (Iowa[i] && state.toLowerCase() === Iowa[i].toLowerCase()) return 'Iowa'
        if (Kansas[i] && state.toLowerCase() === Kansas[i].toLowerCase()) return 'Kansas'
        if (Kentucky[i] && state.toLowerCase() === Kentucky[i].toLowerCase()) return 'Kentucky'
        if (Louisiana[i] && state.toLowerCase() === Louisiana[i].toLowerCase()) return 'Louisiana'
        if (Maine[i] &&state.toLowerCase() === Maine[i].toLowerCase()) return 'Maine'
        if (Maryland[i] && state.toLowerCase() === Maryland[i].toLowerCase()) return 'Maryland'
        if (Massachusetts[i] && state.toLowerCase()===Massachusetts[i].toLowerCase()) return 'Massachusetts'
        if (Michigan[i] && state.toLowerCase() === Michigan[i].toLowerCase()) return 'Michigan'
        if (Minnesota[i] && state.toLowerCase() === Minnesota[i].toLowerCase()) return 'Minnesota'
        if (Mississippi[i] && state.toLowerCase() === Mississippi[i].toLowerCase()) return 'Mississippi'
        if (Missouri[i] && state.toLowerCase() === Missouri[i].toLowerCase()) return 'Missouri'
        if (Montana[i] && state.toLowerCase() === Montana[i].toLowerCase()) return 'Montana'
        if (Nebraska[i] && state.toLowerCase() === Nebraska[i].toLowerCase()) return 'Nebraska'
        if (Nevada[i] && state.toLowerCase() === Nevada[i].toLowerCase()) return 'Nevada'
        if (NewHampshire[i] && state.toLowerCase() === NewHampshire[i].toLowerCase()) return 'NewHampshire'
        if (NewJersey[i] && state.toLowerCase() === NewJersey[i].toLowerCase()) return 'NewJersey'
        if (NewMexico[i] && state.toLowerCase() === NewMexico[i].toLowerCase()) return 'NewMexico'
        if (NewYork[i] && state.toLowerCase() === NewYork[i].toLowerCase()) return 'NewYork'
        if (NorthCarolina[i] && state.toLowerCase() === NorthCarolina[i].toLowerCase()) return 'NorthCarolina'
        if (NorthDakota[i] && state.toLowerCase() === NorthDakota[i].toLowerCase()) return 'NorthDakota'
        if (Ohio[i] && state.toLowerCase() === Ohio[i].toLowerCase()) return 'Ohio'
        if (Oklahoma[i] && state.toLowerCase() === Oklahoma[i].toLowerCase()) return 'Oklahoma'
        if (Oregon[i] && state.toLowerCase() === Oregon[i].toLowerCase()) return 'Oregon'
        if (Pennsylvania[i] && state.toLowerCase() === Pennsylvania[i].toLowerCase()) return 'Pennsylvania'
        if (RhodeIsland[i] && state.toLowerCase() === RhodeIsland[i].toLowerCase()) return 'RhodeIsland'
        if (SouthCarolina[i] && state.toLowerCase() === SouthCarolina[i].toLowerCase()) return 'SouthCarolina'
        if (SouthDakota[i] && state.toLowerCase() === SouthDakota[i].toLowerCase()) return 'SouthDakota'
        if (Tennessee[i] && state.toLowerCase() === Tennessee[i].toLowerCase()) return 'Tennessee'
        if (Texas[i] && state.toLowerCase() === Texas[i].toLowerCase()) return 'Texas'
        if (Utah[i] && state.toLowerCase() === Utah[i].toLowerCase()) return 'Utah'
        if (Vermont[i] && state.toLowerCase() === Vermont[i].toLowerCase()) return 'Vermont'
        if (Virginia[i] && state.toLowerCase() === Virginia[i].toLowerCase()) return 'Virginia'
        if (Washington[i] && state.toLowerCase() === Washington[i].toLowerCase()) return 'Washington'
        if (WestVirginia[i] && state.toLowerCase() === WestVirginia[i].toLowerCase()) return 'WestVirginia'
        if (Wisconsin[i] && state.toLowerCase() === Wisconsin[i].toLowerCase()) return 'Wisconsin'
        if (Wyoming[i] && state.toLowerCase() === Wyoming[i].toLowerCase()) return 'Wyoming'
    }
    return state
}