
const list = document.querySelector('.list')
const add = document.querySelector('.plus')




add.addEventListener('click',(e) => {
    e.preventDefault();
    const row = document.createElement('div');
    row.innerHTML = `
     <li class="table-row">
          <div class="col col-1"><input placeholder="Persepolis"/></div>
          <div class="col col-2"><input placeholder="543"/></div>
          <div class="col col-3"><input placeholder="Mark Haddon"/></div>
          <div class="col col-4"><input placeholder="N/A"/></div>
    </li>
    `
   list.appendChild(row)
    
})