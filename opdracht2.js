function numberOfSoldTvs(tvs) {
    let soldTvs = 0;
    for (let i = 0; i < tvs.length; i++) {
        soldTvs += tvs[i].sold;
    }
    return soldTvs;
}

console.log(numberOfSoldTvs(inventory));

let soldTvText;
soldTvText = document.getElementById('sold-tvs');
soldTvText.textContent = 'Aantal verkochte televisies: ' + numberOfSoldTvs(inventory);

function numberOfBoughtTvs(tvs) {
    let boughtTvs = 0;
    for (let i = 0; i < tvs.length; i++) {
        boughtTvs += tvs[i].originalStock;
    }
    return boughtTvs;
}

console.log(numberOfBoughtTvs(inventory));

let boughtTvs;
boughtTvs = document.getElementById('bought-tvs');
boughtTvs.textContent = 'Ingekochte televisies: ' + numberOfBoughtTvs(inventory);

let currentStock;
currentStock = document.getElementById('current-stock');
currentStock.textContent = 'Huidige voorraad: ' + (numberOfBoughtTvs(inventory) - numberOfSoldTvs(inventory));

