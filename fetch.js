
//n'as pas marché
fetch('./fe.json')
    .then(resp =>
        {
            console.log(resp)
            return resp.json()
        })
    .then((jsonn) =>
        {
            console.log(jsonn.NOM)
        });

// ```js
// fetch('fe.json')
//     .then(resp =>
//         {
//             console.log(resp)
//             return resp.json()
//         })
//     .then((jsonn) =>
//         {
//             console.log(jsonn.NOM)
//         });
// ```

// // // Afficher images 
// // fetch('https://unsplash.it/600/400')
// //      .then (res => res.blob()) 
// //      .then (blob => {       
// //     let img =document.createElement('img');
// //     img.src = URL.createObjectURL (blob); 
// //     document.querySelector('body').appendChild(img);
// //   });





