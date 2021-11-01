const tvNames = inventory.map((tv) => {
        return tv.type;
    }
)
console.log(tvNames);

const soldOutTvs = inventory.filter((tv) => {
    return (tv.originalStock - tv.sold) === 0;
})

console.log(soldOutTvs);

const ambiLightTvs = inventory.filter((tv) => {
    return tv.options.ambiLight;
})

console.log(ambiLightTvs);

inventory.sort((a,b) => {
    return a.price - b.price;
})

console.log(inventory);