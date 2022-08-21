let _arrayname = [
  "mina",
  "sina",
  "ali",
  "amin",
  "asghar",
  "asghar123",
  "پارسا",
  "مهدیه",
  "آرسام",
  "saba",
  "sakine",
  "mahla",
];
let _search = document.getElementById("shh");
let _li = document.querySelectorAll("ul>li");
let _liu = document.querySelector("ul>p");
let _close = document.getElementsByClassName("cls")[0];



_search.addEventListener("keyup", () => {
  _srch();
});







function _srch() {
 if( _search.value.length <=8){
  let _l = 0;

  if (document.querySelector("ul").children.length >= 0) {
    _liu.remove();
    _close.style.display = "none";
    for (i = 0; i < _li.length; i++) {
      _li[i].remove();
    }
  }
  for (i = 0; i < _arrayname.length; i++) {
    if (
      _arrayname[i].substring(0, _search.value.length) == _search.value &&
      _search.value != ""
    ) {
      let _licreat = document.createElement("li");
      document.querySelector("ul").appendChild(_licreat);
      _li = document.querySelectorAll("ul>li");
      _li[_l].innerHTML = `<b>${_arrayname[i].substring(
        0,
        _search.value.length
      )}</b>${_arrayname[i].substring(
        _search.value.length,
        _arrayname.length
      )} `;
      _l++;
    }
  }
  _li.forEach((itm) => {
    itm.addEventListener("click", () => {
      _search.value = itm.innerText;
      for (i = 0; i < _li.length; i++) {
        _li[i].remove();
      }
      _srch();
    });
  });
  if (
    _search.value == "" ||
    document.querySelector("ul").children.length == 0
  ) {
    let _licreatp = document.createElement("p");
    document.querySelector("ul").appendChild(_licreatp);
    _liu = document.querySelector("ul>p");
    _liu.innerText = "حیف شد پیدا نشد";
    _liu.style.color = "red";
    _liu.style.text;
  }

  if (_search.value != "") {
    _close.style.display = "block";
  }


}
else{
  _closef()
}
}


function _closef(){
  _search.value = "";
  _srch();
}
_close.addEventListener("click", () => {
 
  _closef()
});


