let codeInp = document.querySelector(".CodeInp");
let nameInp = document.querySelector(".NameInp");
let applyBtn = document.querySelector(".ApplyBtn");
let srchBtn = document.querySelector(".CheckBtn");
let nameStored = document.querySelector(".NameStored");
let logInp = document.querySelector(".LogInp");
let Code = "";
let Name = "";

localStorage.setItem('1234abcd', 'Bogdan');

function SearchName(key) {
  nameStored.textContent = localStorage.getItem(String(key));
  nameStored.style.color = "#ffffff";
  setTimeout(() => {
     nameStored.style.color = "#000000";  
  }, 5000);
}

applyBtn.addEventListener('click', () => {
  localStorage.setItem(String(codeInp.value), String(nameInp.value));
})

srchBtn.addEventListener('click', () => {
  SearchName(logInp.value)
})
