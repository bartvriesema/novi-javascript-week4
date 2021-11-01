function getTvText(tv) {
    return tv.brand + " " + tv.type + ' - ' + tv.name;
}

console.log(getTvText(inventory[1]));

function getTvPriceFormatted(tvprice) {
    return "€" + tvprice + ',-';
}

console.log(getTvPriceFormatted(inventory[1].price));

function getAvailableSizesText(tvsizes) {
    let sizesText = "";

    for (let i = 0; i < tvsizes.length; i++) {
        let sizeInCm = tvsizes[i] * 2.54;
        sizesText += tvsizes[i] + ' inches (' + sizeInCm.toFixed(0) + ' cm)';
        if (!(i === (tvsizes.length - 1))) {
            sizesText += " | ";
        }
    }
    return sizesText;
}

console.log(getAvailableSizesText(inventory[3].availableSizes));

const tvInfoText = document.getElementById('tvInfoText');
const tvInfoPrice = document.getElementById('tvInfoPrice');
const tvInfoSizes = document.getElementById('tvInfoSizes');
tvInfoText.textContent = getTvText(inventory[1]);
tvInfoPrice.textContent = getTvPriceFormatted(inventory[1].price);
tvInfoSizes.textContent = getAvailableSizesText(inventory[1].availableSizes);

function printTvList(tvList) {
    let tvListElement = document.getElementById('tvList');
    for (let i = 0; i < tvList.length; i++) {
        for (let j = 0; j < 3; j++) {
            let div = document.createElement('div');
            switch (j) {
                case 0:
                    div.textContent = getTvText(tvList[i]);
                    tvListElement.appendChild(div);
                    break;
                case 1:
                    div.textContent = getTvPriceFormatted(tvList[i].price);
                    tvListElement.appendChild(div);
                    break;
                case 2:
                    div.textContent = getAvailableSizesText(tvList[i].availableSizes);
                    tvListElement.appendChild(div);
                    break;
            }
        }
        let line = document.createElement('div');
        line.textContent = '-----';
        tvListElement.appendChild(line);
    }
}

printTvList(inventory);