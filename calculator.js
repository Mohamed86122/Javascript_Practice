const $input = document.querySelector("input");

let allinput=document.querySelectorAll(".num__key");
    

allinput.forEach(
    el =>
    {
        el.addEventListener('click',()=>
        {$input.value=
            $input.value !=="0" ? $input.value +
            el.innerText : el.innerText;
        })
    }
)