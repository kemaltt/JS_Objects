// Objects Lev1  ==========================

//Lev1_2----------------------

let person = {
    name: 'John',
    age: 30,
    sayNameAndAge: function() {
        // alert(this.name + ' ' + this.age);
        // alert(`${person.name} ${person.age}`);
    }
}
person.sayNameAndAge();

//Lev1_4----------------------

let unsereHaustiere = [{
        tiertyp: "Katze",
        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names);


unsereHaustiere[1].names[0] = "Balu";
unsereHaustiere[1].names[1] = "Snoopy";


console.log(unsereHaustiere[1].names);

//Lev1_5----------------------

let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank['Obere Schublade'].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

//Lev1_6----------------------
let myMusic = [{
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

let lieblingsMusik = {
    artist: "Queen",
    title: "Bohemain Rhapsody",
    release_year: 1975,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true
}
myMusic.push(lieblingsMusik);
console.log(myMusic);
console.log(myMusic[0].artist);
console.log(myMusic[2].medium[2]);
console.log(myMusic[2].gold);
console.log(myMusic[3].medium[2]);
console.log(myMusic[3].title.slice(17, 21));
console.log(myMusic[2].title.slice(-2));
console.log(myMusic[1].artist.slice(-5));

//Lev1_7----------------------
let myMusic1 = [{
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

myMusic1.forEach((el) => {

    document.write(el.artist + "<br>");
    document.write(el.title + "<br>");
    document.write(el.medium + "<br>");
    console.log(el.artist);
    console.log(el.title);
    console.log(el.medium);


    // console.log(el.release_year);
    if (el.release_year < 1975) {
        console.log(el.title + ': ' + el.release_year);
        document.write(el.title + ': ' + el.release_year + "<br>");
    }

})

//Lev1_8----------------------

let studentData = [{
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.map((el) => {
    console.log(el.name);
    console.log(el.coop);
    console.log(el.address.city);
    console.log(el.emails);
});

// Objects Lev2  ==========================

//Lev2_1----------------------
let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];


let arrName = [];
edelMetallPreise.forEach((el) => {
    let name = el.name;
    arrName.push(name);
})
console.log(arrName);


let arrName2 = [];
edelMetallPreise.map((el) => {
    let name = el.name;
    // console.log(name);
    arrName2.push(name);
})
console.log(arrName2);



let arrPriese = [];
edelMetallPreise.forEach((el) => {
    let preise = el.preiseGramEuro;
    arrPriese.push(preise);
})
console.log('forEach :', arrPriese);


let arrPriese2 = [];
edelMetallPreise.map((el) => {
    let preise = el.preiseGramEuro;
    // console.log(preise);
    arrPriese2.push(preise);
})
console.log('map :', arrPriese2);


let arrVeraenderung = [];
edelMetallPreise.forEach((el) => {
    let veraenderung = el.veraenderung;
    // console.log(veraenderung);
    arrVeraenderung.push(veraenderung);
})
console.log(arrVeraenderung);

console.log(edelMetallPreise.map(el => el.veraenderung));


let preiseGramEuro = edelMetallPreise.filter(el => el.preiseGramEuro > 50);
console.log(preiseGramEuro);
// console.log(edelMetallPreise.filter(el => el.preiseGramEuro > 50));

//Lev2_2----------------------
const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

singers.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    } else {
        return -1;
    }

})
console.log(singers);