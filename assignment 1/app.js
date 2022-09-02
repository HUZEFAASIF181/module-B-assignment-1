let mobiles = {
    iphone: {
        v14pro: {
            ram: 32,
            rom: 8,
            price:123134,
        },
        v13: {
            ram: 22,
            rom: 10,
            price:76576,
        },
        v13pro: {
            ram: 30,
            rom: 12,
            price:84387,
        },    
    },
    samsung: {
        coreprime: {
            ram: 8,
            rom: 16,
            price:1238,
        },
        galaxy: {
            ram: 6,
            rom: 12,
            price:231341,
        },
        on5: {
            ram: 8,
            rom: 32,
            price: 78954,
        },
    },
    xiaomi: {
        redmi: {
            ram: 4,
            rom: 8,
            price:7689,
        },
        redminote: {
            ram: 32,
            rom: 78,
            price:3247,
        },
        redmi11: {
            ram: 45,
            rom: 89,
            price:9879,
        },
    },
    infinix: {
        hot10: {
            ram: 7,
            rom: 6,
            price:6579,
        },
        hot8: {
            ram: 3,
            rom: 6,
            price:3648,
        },
        spark10: {
            ram: 4,
            rom: 8,
            price:723908,
        },
    },
}

let mobileName = document.getElementById("mobileName")
let model = document.getElementById("mobileModel")

function fillCompanyName() {
    let mainKeys = Object.keys(mobiles)
    for (var i = 0; i < mainKeys.length; i++) {
        mobileName.innerHTML += `<option value="${mainKeys[i]}" >${mainKeys[i]}</option>`
    }

}
fillCompanyName();


function addModels() {
    mobileModel.disabled = false;
    let nastedkeys = Object.keys(mobiles[mobileName.value])
    for (var i = 0; i < nastedkeys.length; i++) {
        mobileModel.innerHTML += `<option value="${nastedkeys[i]}" >${nastedkeys[i]}</option>`
    }
}

let specifications = document.getElementById('specifications')

function searchVal() {

    let res = ((mobiles[mobileName.value][mobileModel.value]))
    specifications.innerHTML += ` <p>${Object.keys(res)}</p><h1>${Object.values(res)} </h1>`
}


















// function searchVal() {
//     let res = mobiles[mobileName.value][model.value]
//     console.log(res);
// }


// let keys = Object.keys(mobiles);
// let values = Object.values(mobiles);

// console.log(keys);
// console.log(values);












































// let a = 10;
// let b = 10;
// let c = 5;

// if(a==b) {
//     console.log("a is equal to b")
// }else {
//     console.log("a is not equal to b")
// }

// a == b ? console.log("a is equal to b") : console.log("a is not equal to b");



// passByValue(Topic to read assignment)
// passByReference(Topic to read assignment)