let id = (id) => document.getElementById(id);

//OPTIMIZATION DES DECLARATIONS ID
let sb =id("sbmt");
let ch =id("change");
let input =id("enter");
let dv =id("container");
let fr = id("form1");
let fr2 = id("form2");
let nom =id("nom");
let prenom=id("prenom");
let age=id("age");
let array =[];
   let item = {

        NOM : nom,
        PRENOM:prenom,
        AGE: age

   }




   function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
showTime();
// DECLARATIONS querySelector
let list = document.querySelector('ul');
let aff = document.querySelector('#list');


let ch1="Music"
let ch2="Movies"
fr2.addEventListener('submit',(e)=>{
    e.preventDefault();

    
    const listes= document.createElement('LI');
    const namee =nom.value;
    const fisrtname =prenom.value;
    const ages =age.value;
    let style = listes.style;
    if(namee==="" || fisrtname==="" || ages==="")
    {
        alert("Remplissez le formulaire");
    }
    else
    {
            if(check1.checked)
        {
            listes.innerText=" Votre Nom : " + namee + "\n Votre Prenom : " + fisrtname + "\n Votre Ages : " + ages + "\n Votre loisirs : " + ch1;
                aff.append(listes);
        }
        else
        {
            listes.innerText=" Votre Nom : " + namee + "\n Votre Prenom : " + fisrtname + "\n Votre Ages : " + ages + "\n Votre loisirs : " + ch2;
            aff.append(listes);

        }
                
    }
    // listes.innerText=" Votre Nom : " + name + "\n Votre Prenom : " + fisrtname + "\n Votre Ages : " + ages ;
    style.padding="10px";
    style.listStyle="circle"; 
    // listes.innerText=`WELCOME ${nom.value}  ${prenom.value}  ${age.value}`;
    // aff.append(listes)



});

let check = id("checked");
let check1 = id("check1");
let check2 = id("check2");

// check.addEventListener( 'change', function(e) {

//     if(check1.checked) 
//     {
//         check1.checked = true;
        
//     } 
//     else 
//     {
//         if(check2.checked)
//         {
//             check1.checked = false;
//             check2.checked = true;
//         }
//         else
//         {
//             check1.checked = false;
//             check2.checked = false;
//         }
    
//     }
//     // if(e.target.checked)
//     // {
//     //     check1.checked = false;

//     // }
//     // else
//     // {
//     //     if(!e.target.checked)
//     //     {
//     //         check1.checked = true;
//     //     }
//     //     else
//     //     {
//     //         check1.checked = false;
//     //     }
        

//     // }

  
// });
// EXPRESSION REGULIERE /[^A-Z]+[A-Z0-9a-z]/



// //add content on input to list and add element 
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const aj=input.value;
//     const newlist =document.createElement('LI');
//     newlist.innerText=aj;
//     list.append(newlist);
// })

// list.addEventListener('click',(e)=>{
//     //remove all Elements in UL e.target.remove();

//     //But this nodeName Specify the elements
//     e.target.nodeName ==='LI' && e.target.remove();
// });




// //hide all div
// dv.addEventListener('click',()=>{
//     //event click the content hide
//     dv.classList.toggle('hide');
// });




// ch.addEventListener('click',(e)=>{
//     //changing style of element
//         dv.style.background=makerangecolor();
//         e.stopPropagation();

// });



// //make random of colors by RGB
// const makerangecolor = () => {
//     const r =Math.floor(Math.random() * 255);
//     const v =Math.floor(Math.random() * 255);
//     const l =Math.floor(Math.random() * 255);

//     return `rgb(${r},${v},${l})`;
// };
