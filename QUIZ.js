let id =(id)=>document.getElementById(id);

//RADIO BUTTON
let radio1 = id("radioApple");
let radio2 = id("radioBanana");
let radio3 = id("radioOrange");
let radio4 = id("radioitalie");
let radio5 = id("radio2");
let radio6 = id("radio3");
let radio7 = id("radio4");
let radio8 = id("radio5");
let select = id("sel");
let btntest = id("btntest");



//BUTTON 
let sbt = document.querySelector('#submitt');
let cor =document.querySelector('#correction');
let tips =document.querySelector('#Tips');
let modal =document.querySelector('#myModal');
let span =document.querySelector('.close');
let aff ="+";

 console.log(`MOHAMED ${aff} SGHIR`);

let countries =["Portugal","usa","spain","france","norvege","iceland",];

countries.map(count =>select.innerHTML+=`<option value="${count}>${countries}</option>"`)


    cor.addEventListener('click',()=>{
        modal.style.display = "block";
    }) 
  // When the user clicks on <span> (x), close the modal
  span.addEventListener('click',()=>{
    modal.style.display = "none";
    }) 
  
  // When the user clicks anywhere outside of the modal, close it
    Window.onclick = function(event) {

        if (event.target == modal) {
             modal.style.display = "none";
    }


sbt.addEventListener('click',()=>{

    
        if(radio3.checked && !radio7.checked )
        {
            alert('Again you have one right answer');
        }
        else
        {
            if(!radio3.checked && radio7.checked)
            {
                alert('Again you have one right answer');
            }
            else
            {
                if(radio3.checked && radio7.checked)
                {
                    alert('you win');
                }
                else
                {
                    alert('YOU LOOSE');
                }
                 
            }

        }
    
});

btntest.addEventListener('click', () => {
    alert(`Vous avez cliqué sur moi !`);
  
    let pElem = document.createElement('p');
    pElem.textContent = `Il s'agit d'un paragraphe nouvellement ajouté.`;
    document.body.appendChild(pElem);
  });