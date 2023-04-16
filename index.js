const cats = [
    "Milo",
    "Otis",
    "Garfield",
]

cats.length = 0;

cats.push("Milo", "Otis", "Garfield");

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
}

cats.length = 0;

cats.push("Milo", "Otis", "Garfield");

function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
}

cats.length = 0;

cats.push("Milo", "Otis", "Garfield");

function destructivelyRemoveLastCat(Garfield) {
    cats.pop();
}

cats.length = 0;

cats.push("Milo", "Otis", "Garfield");

function destructivelyRemoveFirstCat (Milo) {
    cats.shift();
}

cats.length = 0;

cats.push("Milo", "Otis", "Garfield");

function appendCat(Broom) {
    const moreCats = cats.slice();
    moreCats.push("Broom");
    return moreCats
;}


function prependCat(Arnold) {
    const evenMoreCats = cats.slice();
    evenMoreCats.unshift("Arnold");
    return evenMoreCats
}

function removeLastCat(Garfield) {
    const lessCats = cats.slice();
    lessCats.splice(2);
    return lessCats
}

function removeFirstCat(Milo) {
    const oneLessCat = cats.slice();
    oneLessCat.splice(0,1);
    return oneLessCat
}









