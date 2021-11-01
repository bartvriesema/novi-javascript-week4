function getTvBrands(tvs) {
    const listOfBrands = [];
    for (let i = 0; i < tvs.length; i++) {
        listOfBrands.push(tvs[i].brand);
    }
    return listOfBrands;
}

console.log(getTvBrands(inventory));

let listOfBrands;
listOfBrands = document.getElementById('list-of-brands');

getTvBrands(inventory).forEach((tvbrand) => {
    let li = document.createElement('li');
    li.textContent = tvbrand;
    listOfBrands.appendChild(li);
})