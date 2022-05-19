let id =(id) =>document.getElementById(id);
let cl = id("close");
let mn=id("main");
let bar = id("mySidebar");
let nav = id("openNav");


cl.addEventListener('click',()=>{
      
        mn.style.marginLeft = "0%";
        bar.style.display = "none";
        nav.style.display = "inline-block";
});
nav.addEventListener('click',()=>{
    
        mn.style.marginLeft = "25%";
        bar.style.width = "25%";
        bar.style.display = "block";
        nav.style.display = 'none';
     
});


