var menu =document.getElementById("menu").getElementsByTagName("li");
var headline =document.getElementById("text");
var btn = document.getElementById("zar");

    var i;
    for(i=0;i<menu.length;i++)
    {
        menu[i].addEventListener("click",SelectItem);
    }

    function SelectItem()
    {
        headline
    }


    var i;
    for(i=0;i<menu.length;i++)
    {
        menu[i].addEventListener("click",SelectItem);
    }

    function SelectItem()
    {
        headline.innerHTML=this.innerHTML;
    }
