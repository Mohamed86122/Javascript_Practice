// const car = {
//     Num:31,
//     Nom:"Dacia",
//     modele: "2daciayt",

//     showcar : function()
//     {
//         alert(this.Num + " " + this.Nom + " "  + this.modele);
        
//     }
// }
// car.showcar();


// const car = {
//     Num:31,
//     Nom:"Dacia",
//     modele: "2daciayt",

//     showcar : function()
//     {
//         alert(this.Num + " " + this.Nom + " "  + this.modele);
        
//     }

// }

// const l3erbi = car.showcar.bind(car);
// l3erbi();

fetch('text.json')
    .then((resp) => resp.json())
    .then((med) => {
    console.log(med)
    })


