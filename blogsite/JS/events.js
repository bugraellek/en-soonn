var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");
console.log(items);
for(var i =0; i<items.length; i++){
    items[i].addEventListener("click",editItem);
    inputs[i].addEventListener("blur", updateItem);
    inputs[i].addEventListener("keypress", itemKeypress);
}
function editItem(){
    this.className= "edit";
    var input = this.querySelector("input");
    input.focus();
    console.log("şuanki değerin eleman sayısı " , input.value.length);
    input.setSelectionRange(0, input.value.length);
}

function updateItem(){
    var input = this;
    this.previousElementSibling.innerHTML =this.value;
    this.parentNode.className = "";
}

function itemKeypress(event){
    if(event.key === "Enter"){
        updateItem.call(this);
    }
}
document.getElementById("hareket");
function renkDegistir(event){
    renk.style["background-color"]= "tomato"

}

function hareketEttir(event){
    const hareket = document.getElementById("hareket");
    if(hareket){
        hareket.style.position= 'absolute';
        hareket.style.left = event.pageX +'px'
        hareket.style.top = event.pageY + 'px'
    }
}

function fareHareketi(event){
    const sonuc =document.getElementById('s');
    if(event.target.className.includes('iç')){
    sonuc.innerHTML = 'iç kutuda';
}
    else{
    sonuc.innerHTML = 'dış kutuda';
}
}