let id =(id)=>document.getElementById(id);
let nbr1 = id("number1");
let nbr2 = id("number2");
let txt1 = id("txt1");
let txt2 = id("txt2");
let err = id("error");
let clear = id("cl");
let btn1 =document.querySelector('#op1');
let btn2 =document.querySelector('#op2');
let btn3 =document.querySelector('#op3');
let btn4 =document.querySelector('#op4');
let res = document.querySelector('#res');
let h3 =document.querySelector('h3');
let sub = document.querySelector('#submit');
let div =document.querySelector('#aff');


btn1.addEventListener('click',function(){
        
    res.value =parseInt(nbr1.value)+parseInt(nbr2.value);   
});

btn2.addEventListener('click',()=>{


    res.value =parseInt(nbr1.value)-parseInt(nbr2.value) ;

});

btn3.addEventListener('click',()=>{
    res.value =parseInt(nbr1.value) * parseInt(nbr2.value) ;
});

btn4.addEventListener('click',()=>{
    res.value =parseInt(nbr1.value) / parseInt(nbr2.value) ;
});

txt1.addEventListener('input',()=>{

        if(this.value&& txt2.value === "")
        {
            h3.textContent=`WELCOME`
        }
        else
        {
            h3.textContent=`WELCOME ${txt1.value}` ;
        }

});

clear.addEventListener('click',()=>{
    txt1.textContent=" ";
    txt2.textContent=" ";
    res.textContent=" ";
});
txt2.addEventListener('input',()=>{

    if(!this.value && txt1.value === "" && txt1.value=="'\0-9\'")
    {
        
        h3.innerText=`WELCOME`;
    }
    else
    {
        h3.textContent=`WELCOME ${txt1.value}  ${txt2.value}` ;
    }

});
sub.addEventListener('click',()=>{

    if(txt1.value ==="" && txt2.value ==="" )
    {
        alert("Entre votre nom et prénom ");
        
    }
    else
    {
        alert(`welcome ${txt1.value}  ${txt2.value}`);
        div.style.display="block";
    }
});