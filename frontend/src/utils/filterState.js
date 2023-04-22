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

    for(let i = 0; i< 10; i++){
        if (state.toLowerCase() === Alabama[i].toLowerCase()) return 'Alabama'
        if (state.toLowerCase() === Alaska[i].toLowerCase()) return 'Alaska'
        if (state.toLowerCase() === Arizona[i].toLowerCase()) return 'Arizona'
        if (state.toLowerCase() === Arkansas[i].toLowerCase()) return 'Arkansas'
        if (state.toLowerCase() === California[i].toLowerCase()) return 'California'
        if (state.toLowerCase() === Colorado[i].toLowerCase()) return 'Colorado'
        if (state.toLowerCase() === Connecticut[i].toLowerCase()) return 'Connecticut'
        if (state.toLowerCase() === Delaware[i].toLowerCase()) return 'Delaware'
        if (state.toLowerCase() === Florida[i].toLowerCase()) return 'Florida'
        if (state.toLowerCase() === Georgia[i].toLowerCase()) return 'Georgia'
        if (state.toLowerCase() === Hawaii[i].toLowerCase()) return 'Hawaii'
        if (state.toLowerCase() === Idaho[i].toLowerCase()) return 'Idaho'
        if (state.toLowerCase() === Illinois[i].toLowerCase()) return 'Illinois'
        if (state.toLowerCase() === Indiana[i].toLowerCase()) return 'Indiana'
        if (state.toLowerCase() === Iowa[i].toLowerCase()) return 'Iowa'
        if (state.toLowerCase() === Kansas[i].toLowerCase()) return 'Kansas'
        if (state.toLowerCase() === Kentucky[i].toLowerCase()) return 'Kentucky'
        if (state.toLowerCase() === Louisiana[i].toLowerCase()) return 'Louisiana'
        if (state.toLowerCase() === Maine[i].toLowerCase()) return 'Maine'
        if (state.toLowerCase() === Maryland[i].toLowerCase()) return 'Maryland'
        if (state.toLowerCase()===Massachusetts[i].toLowerCase()) return 'Massachusetts'
        if (state.toLowerCase() === Michigan[i].toLowerCase()) return 'Michigan'
        if (state.toLowerCase() === Minnesota[i].toLowerCase()) return 'Minnesota'
        if (state.toLowerCase() === Mississippi[i].toLowerCase()) return 'Mississippi'
        if (state.toLowerCase() === Missouri[i].toLowerCase()) return 'Missouri'
        if (state.toLowerCase() === Montana[i].toLowerCase()) return 'Montana'
        if (state.toLowerCase() === Nebraska[i].toLowerCase()) return 'Nebraska'
        if (state.toLowerCase() === Nevada[i].toLowerCase()) return 'Nevada'
        if (state.toLowerCase() === NewHampshire[i].toLowerCase()) return 'NewHampshire'
        if (state.toLowerCase() === NewJersey[i].toLowerCase()) return 'NewJersey'
        if (state.toLowerCase() === NewMexico[i].toLowerCase()) return 'NewMexico'
        if (state.toLowerCase() === NewYork[i].toLowerCase()) return 'NewYork'
        if (state.toLowerCase() === NorthCarolina[i].toLowerCase()) return 'NorthCarolina'
        if (state.toLowerCase() === NorthDakota[i].toLowerCase()) return 'NorthDakota'
        if (state.toLowerCase() === Ohio[i].toLowerCase()) return 'Ohio'
        if (state.toLowerCase() === Oklahoma[i].toLowerCase()) return 'Oklahoma'
        if (state.toLowerCase() === Oregon[i].toLowerCase()) return 'Oregon'
        if (state.toLowerCase() === Pennsylvania[i].toLowerCase()) return 'Pennsylvania'
        if (state.toLowerCase() === RhodeIsland[i].toLowerCase()) return 'RhodeIsland'
        if (state.toLowerCase() === SouthCarolina[i].toLowerCase()) return 'SouthCarolina'
        if (state.toLowerCase() === SouthDakota[i].toLowerCase()) return 'SouthDakota'
        if (state.toLowerCase() === Tennessee[i].toLowerCase()) return 'Tennessee'
        if (state.toLowerCase() === Texas[i].toLowerCase()) return 'Texas'
        if (state.toLowerCase() === Utah[i].toLowerCase()) return 'Utah'
        if (state.toLowerCase() === Vermont[i].toLowerCase()) return 'Vermont'
        if (state.toLowerCase() === Virginia[i].toLowerCase()) return 'Virginia'
        if (state.toLowerCase() === Washington[i].toLowerCase()) return 'Washington'
        if (state.toLowerCase() === WestVirginia [i].toLowerCase()) return 'WestVirginia'
        if (state.toLowerCase() === Wisconsin[i].toLowerCase()) return 'Wisconsin'
        if (state.toLowerCase() === Wyoming [i].toLowerCase()) return 'Wyoming'
    }
    return state
}