let id = (id)=>document.getElementById(id)

let namee = id("name")
let mail = id("mail")
let password = id("pass")
let signup = id("sign")
let forgot=id("btn")
let modal = id("myModal")





signup.addEventListener('click',(e)=>{
    e.preventDefault();
    
    if(namee.value =="SGHIR" && mail.value =="med@gmail.com" && password.value =="1234")
    {
       alert("vous etes dejà inscrit")  
       namee.value =null
       mail.value =null
       password.value =null
    }
    else
    {
        username.push(namee.value)
        email.push(mail.value)
        pas.push(password.value)
    }
    
})
forgot.addEventListener('click',()=>
{
  

})


// When the user clicks anywhere outside of the modal, close it
// Window.onclick = function(event) {

//   if (event.target == modal) {
//        modal.style.display = "none";
//   }
// }


let username = [
  {
    name :"SGHIR",
  }
]
let email = [
  {
    email :"med@gmail.com",
  }
]
let pas = [
  {
    motdepasse :"1234",
  }
]

//Code affichage login
$(document).on('click', '.below button', function(){
    let belowCard = $('.below'),
    aboveCard = $('.above'),
    parent = $('.form-collection');
    parent.addClass('animation-state-1');
    setTimeout(function(){
      belowCard.removeClass('below');
      aboveCard.removeClass('above');
      belowCard.addClass('above');
      aboveCard.addClass('below');
      setTimeout(function(){
        parent.addClass('animation-state-finish');
        parent.removeClass('animation-state-1');
        setTimeout(function(){
          aboveCard.addClass('turned');
          belowCard.removeClass('turned');
          parent.removeClass('animation-state-finish');
        }, 300)
      }, 10)
    }, 300);
  });
  
