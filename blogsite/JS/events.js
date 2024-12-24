var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
console.log(items);
for(var i =0; i<items.length; i++){
    items[i].addEventListener("click",editItem);
}
function editItem(){
    console.log(this);
}