const plus = document.querySelector('.plus')
const itemAdd = document.querySelector('.item_add')
const submit = document.querySelector('#submit')
const title = document.querySelector('#title')
const code = document.querySelector('#code')
const writername = document.querySelector('#writername')
const list = document.querySelector('.list')
const add = document.querySelector('.add')

console.log(title)
plus.addEventListener("click",() => {
  itemAdd.classList.toggle('hidebb')
})


add.addEventListener('click',(e) => {
    e.preventDefault();

    if(title.value == "" && writername.value == "" && writername.value == ""){
        alert("bhai kisu den")
    }else{
    const row = document.createElement('div');
    row.innerHTML = `
     <li class="table-row">
          <div class="col col-1">${title.value}</div>
          <div class="col col-2">${code.value}</div>
          <div class="col col-3">${writername.value}</div>
          <div class="col col-4">N/A</div>
    </li>
    `
   list.appendChild(row)
    }
})