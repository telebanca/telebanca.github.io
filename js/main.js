// const banksName = {
//     BANDEC:'BANDEC',
//     BPA:'BPA',
//     BM:'BM'
//   }
const version = '1.0.0';
const storageKey = `telebanca${version}`;
let selectedBankToRegister = 0;
console.log(`version:${version}`);
let adsRemain=10;
let cards = [];

window.onload = () => {
  'use strict';
  console.log("entra");
  if ('serviceWorker' in navigator) {
    console.log("entra sw");
    navigator.serviceWorker
             .register('/sw.js');
  }
}


if(localStorage.getItem(storageKey) === null){
  
    localStorage.setItem(storageKey, JSON.stringify(
      {
        'adsRemain':adsRemain,
        "cards":cards
      }
      ));
  }else{
    
    let item = JSON.parse(localStorage.getItem(storageKey));
    adsRemain = item.adsRemain-1;
    saveState();
    cards = item.cards;

}
if(adsRemain<=0){
    // alert('You have '+adsRemain+' ads left');
    adsRemain=10;
    saveState();
}

function saveState(){
  localStorage.setItem(storageKey, JSON.stringify(
    {
      'adsRemain':adsRemain,
      "cards":cards
    }
    ));
  }

let bandecContainer = document.getElementById("BANDEC");
let bpaContainer = document.getElementById("BPA");
let bmContainer = document.getElementById("BM");
console.log(getLinkDonateTel());
document.getElementById("donate-tel").href=getLinkDonateTel();

let  bandecOperations = operation.filter(value => value.banks.includes(banksName.BANDEC));
let  bpaOperations = operation.filter(value => value.banks.includes(banksName.BPA));
let  bmOperations = operation.filter(value => value.banks.includes(banksName.BM));

populateDiv(bandecOperations, bandecContainer);
populateDiv(bpaOperations, bpaContainer);
populateDiv(bmOperations,bmContainer);

document.getElementById("tarjeta").addEventListener("keyup", () => {
  console.log("keyup");
  let cardRegExp=/[\d]{16}/;
  let cardNumberLink = document.getElementById("tarjeta");
  if(cardRegExp.test(cardNumberLink.value) && cardNumberLink.value.length === 16){
    document.getElementById("register-card-btn").hidden = false;
    let bankCode =document.querySelector(".bank-select.active").getAttribute("data-code");
    document.getElementById("register-card-btn").href = `tel:*444*49*${bankCode}*${cardNumberLink.value}%23`;
  }
  else{
    document.getElementById("register-card-btn").hidden = true;
  }

});

function populateDiv(operations, container){
  operations.forEach(operation => {
 

    let div = document.createElement("div");
    div.className = "operation";
    div.innerHTML = `<div class= "operationcard">
    <a href="${operation.link}">
    <div class="title">${operation.title}</div>
    <div class="description">${operation.description}</div>
    </a>
    </div>`;
    container.appendChild(div);
  });
}

document.querySelectorAll(".bank-select").forEach(bank => {
  bank.addEventListener("click", () => {
    document.querySelectorAll(".bank-select").forEach(bank => {
      bank.classList.remove("active");
      bank.classList.remove("btn-primary");
    });
    bank.classList.add("active");
    bank.classList.add("btn-primary");
    
    let cardNumberLink = document.getElementById("tarjeta");
    if(cardNumberLink.value.length === 16){
      document.getElementById("register-card-btn").hidden = false;
      document.getElementById("register-card-btn").href = `tel:*444*49*${bank.getAttribute("data-code")}*${cardNumberLink.value}%23`;
    }
  });
});
