var button = document.getElementById("show");
var target = document.getElementById("container");
//var bool = true;

function displayform()
{
    target.setAttribute("class", "form_show show");
}
button.addEventListener("click", displayform);